---
title : "Kích hoạt model ngôn ngữ lớn Gemini"
date : "`r Sys.Date()`"
weight : 2
chapter : false
pre : " <b> 2.2</b> "
---


### Giới thiệu về model ngôn ngữ lớn Gemini

Trong workshop này, mình sẽ giới thiệu cho các bạn biết thêm 1 cái model có thể sử dụng trong ứng dụng này là Gemini.

Việc sử dụng mô hình ngôn ngữ Gemini trong Google Cloud có nhiều lợi ích đáng chú ý, đặc biệt phù hợp cho người mới bắt đầu hoặc những người đang thử nghiệm mô hình LLM:

1. Code prompt đơn giản, dễ tích hợp

- SDK `vertexai` hỗ trợ Python chính thức
- Gửi prompt đơn giản như gọi hàm Python
- Cấu trúc JSON hoặc object dễ đọc, dễ parse

```python
chat.send_message("Viết giúp mình đoạn code tạo chatbot đơn giản với Streamlit.")
```

2. Hiện tại Gemini 1.5 Pro đang miễn phí

- Google đang cho phép sử dụng mô hình **Gemini 1.5 Pro** hoàn toàn **miễn phí** thông qua:

    - [Google AI Studio](https://makersuite.google.com/)  
    - **Vertex AI** (sử dụng qua Notebook hoặc API)
    - Đây là cơ hội tuyệt vời để thử nghiệm một mô hình LLM mạnh mẽ **mà không mất chi phí**.

3. Không cần gắn thẻ thanh toán (billing card)

- Nếu bạn sử dụng **tài khoản Google cá nhân (Gmail)** để:

    - Đăng nhập vào **AI Studio**, hoặc  
    - Tạo **Google Cloud Project mới**
    - Thì bạn có thể dùng **Gemini miễn phí** mà **không cần thêm thẻ thanh toán**. Google cung cấp **quota miễn phí mặc định**, đủ để thử nghiệm hoặc học tập. Điều này đặc biệt phù hợp cho **sinh viên, người học AI, hoặc trong các buổi workshop thực hành.**

4. Có hỗ trợ đa modal (text + image + code)

- Gemini là một trong số ít mô hình ngôn ngữ lớn hỗ trợ **đa modal**, bao gồm:

    - Văn bản (Text)
    - Hình ảnh (Image)
    - Mã nguồn (Code)

- Điều này giúp bạn giải quyết được nhiều bài toán hơn, như:

    - Tổng hợp và tóm tắt tài liệu
    - Giải thích mã lập trình
    - Nhận diện và phân tích hình ảnh
    - Xây dựng ứng dụng AI tổng hợp
    - Rất phù hợp với các bài toán thực tế, ứng dụng giáo dục, hay xây dựng chatbot thông minh.

### Kích hoạt model ngôn ngữ lớn Gemini

1. Truy cập vào [Google AI Studio](https://ai.google.dev/aistudio) và bấm đăng nhập

![AWS Bedrock](/images/2.prerequisite/2.6.png)

2. Truy cập vào [Google Cloud Console](https://cloud.google.com/cloud-console), bấm vào chữ `Console`

![AWS Bedrock](/images/2.prerequisite/2.7.png)


3. Chọn vào ô project và tạo 1 project mới.

![Project Name](/images/2.prerequisite/2.8.png)

Chỗ `Location` chọn `No organization`.

![Project Name](/images/2.prerequisite/2.9.png)

Xong rồi bấm `Create`

4. Quay lại trang **Google AI Studio**. Bấm vào `Get API Key`, chọn `Create API Key`.

![Project Name](/images/2.prerequisite/2.10.png)


5. Chọn đúng project bạn vừa tạo ở trên. Rồi bấm tạo API key Gemini.

![Project Name](/images/2.prerequisite/2.11.png)

6. Kéo xuống dưới và bạn sẽ thấy **Key** vừa được tạo. Hãy giữ bảo mật key này.

![Project Name](/images/2.prerequisite/2.12.png)

{{% notice warning%}}
Hãy nhớ bảo mật các key này cho kĩ dù cho có đang là Free billing.
{{% /notice %}}