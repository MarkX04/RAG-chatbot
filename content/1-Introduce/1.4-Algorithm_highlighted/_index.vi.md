---
title : "Thuật toán highlight text pdf sử dụng thư viện pymupdf"
date : "2024-01-01"
weight : 4 
chapter : false
pre : " <b> 1.4 </b> "
---

## Giới thiệu

Khi xử lý tài liệu PDF trong Python, việc tô sáng (highlight) văn bản là một thao tác phổ biến, đặc biệt trong các ứng dụng trích xuất thông tin, đánh dấu dữ liệu quan trọng, hoặc hiển thị kết quả tìm kiếm. Trong bài viết này, chúng ta sẽ tìm hiểu cách thực hiện highlight text trong file PDF bằng cách sử dụng thư viện [PyMuPDF (fitz)](https://pymupdf.readthedocs.io/).

## Cách highlight văn bản trong PDF với PyMuPDF

### Tìm vị trí văn bản bằng `.search_for()`

Đầu tiên, bạn cần mở tài liệu PDF và tìm các đoạn văn bản muốn highlight bằng hàm `.search_for()` của đối tượng `Page`. Hàm này sẽ trả về danh sách các `Rect` tương ứng với vị trí của văn bản được tìm thấy.

```python
import fitz  # PyMuPDF

# Mở file PDF
doc = fitz.open("example.pdf")

# Duyệt từng trang
for page in doc:
    # Tìm các vị trí khớp với chuỗi tìm kiếm
    text_instances = page.search_for("highlight me")

    # Tô sáng từng vùng tìm được
    for inst in text_instances:
        highlight = page.add_highlight_annot(inst)

# Lưu file kết quả
doc.save("highlighted.pdf", garbage=4, deflate=True)
```

{{% notice tip %}}
Các mô hình ngôn ngữ lớn có thể đưa các câu trả lời theo 1 format json. 
{{% /notice %}}


Ví dụ:

```
[
  {{ "chunk_id": ..., "highlight_text": "..." }},
  ...
]
```

{{% notice tip %}}
Dựa vào tính chất này. Khi đặt 1 promt gửi cho ngôn ngữ lớn bất kì. Yêu cầu trong promt rằng hãy phân tích và gửi lại cùng lúc câu trả lời kèm với format json cho chỗ cần highlight. Nên bản chất tính năng highlight cần chỉ chủ yếu là nhờ mô hình ngôn ngữ lớn giải đáp.
{{% /notice %}}


{{% notice warning %}}
Nhưng bản chất của ngôn ngữ lớn là 1 mô hình tạo sinh. Là 1 mô hình ko phải lúc nào cũng đảm bảo output ra thứ mà mình muốn (Ví dụ cụ thể trong ứng dụng này là ta yêu cầu nó gửi lại chính xác text cần được highlight thì sẽ có lúc nó gửi 1 text bị khác đi 1 ký tự hoặc định dạng mà ta đã gửi) mà hàm `.search_for()` cần chính xác định dạng và ký tự. Suy ra nếu chỉ dựa vào ngôn ngữ lớn thì ứng dụng này sẽ chỉ highlight được khoảng 1 phần các lượt promt chứ không phải lúc này cũng vậy.
{{% /notice %}}


- **Một giải pháp** cho bất cập này là ta sẽ viết 1 giải thuật để giải quyết các trường hợp ngôn ngữ lớn trả về output bị khác đi 1 chút so với chính xác trong pdf.

## Giải pháp highlight không chính xác bằng fuzzy matching

Chúng ta sẽ sử dụng một **giải thuật fuzzy matching** để tìm những đoạn văn bản gần đúng trong trang PDF, sau đó tạo highlight tương ứng với vùng tìm được.

### Giải thuật `partial_highlight()`

Dưới đây là hàm `partial_highlight()` giúp tìm kiếm văn bản gần đúng và thực hiện highlight, kể cả khi không tìm thấy khớp tuyệt đối:

```python
def partial_highlight(pdf_path, output_path, text_to_highlight, page_number, file_exist, threshold=90):
    doc = fitz.open(pdf_path)
    page = doc[page_number]
    page_text = page.get_text()

    # Làm sạch text input
    target_text = text_to_highlight.replace("\\n", "\n").strip()

    # Tìm vùng gần đúng bằng fuzzy matching
    spans = find_spans_fuzzy(page, target_text, threshold)

    if not spans:
        print("--------------Failed to find highlight partial!")
        return
    else:
        for span in spans:
            highlight = page.add_highlight_annot(span)
            highlight.update()

    print("------------------Partial highlight checking---------------")

    # Ghi file PDF ra đĩa
    if file_exist:
        temp_output = output_path + ".temp.pdf"
        doc.save(temp_output, garbage=4, deflate=True, clean=True)
        doc.close()
        shutil.move(temp_output, output_path)
    else:
        doc.save(output_path, garbage=4, deflate=True, clean=True)
        doc.close()
```

### Hàm phụ trợ `find_spans_fuzzy()`

Hàm này duyệt qua toàn bộ các từ `(words)` trên trang PDF và thực hiện ***so khớp mờ*** trên từng cửa sổ trượt để tìm vùng có văn bản tương tự:

```python
from fuzzywuzzy import fuzz

def find_spans_fuzzy(page, target, threshold=90, buffer=10):
    spans = []
    words = page.get_text("words")  # Mỗi từ là (x0, y0, x1, y1, word, block_no, line_no, word_no)
    words.sort(key=lambda w: (w[1], w[0]))  # Sắp xếp theo vị trí: trên xuống, trái sang phải

    word_texts = [w[4] for w in words]
    target_len = len(target.split())
    max_window = min(len(words), target_len + buffer)

    for i in range(len(words) - max_window + 1):
        for window in range(target_len, max_window + 1):
            window_words = word_texts[i:i+window]
            window_text = " ".join(window_words)
            score = fuzz.partial_ratio(window_text, target)
            if score >= threshold:
                rects = [fitz.Rect(w[:4]) for w in words[i:i+window]]
                span = rects[0]
                for r in rects[1:]:
                    span |= r  # union các vùng chữ lại
                spans.append(span)
                break  # Dừng kiểm tra dài hơn nếu đã match tại vị trí này

    return spans
```


