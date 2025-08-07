---
title : "Lý thuyết về mô hình ngôn ngữ lớn"
date : "`r Sys.Date()`"
weight : 1 
chapter : false
pre : " <b> 1.1 </b> "
---

Mô hình ngôn ngữ lớn, còn gọi là LLM, là các mô hình **học sâu** rất lớn, được đào tạo trước dựa trên một lượng dữ liệu khổng lồ. Bộ chuyển hóa cơ bản là tập hợp các **mạng nơ-ron** có một bộ mã hóa và một bộ giải mã với khả năng tự tập trung. Bộ mã hóa và bộ giải mã trích xuất ý nghĩa từ một chuỗi văn bản và hiểu mối quan hệ giữa các từ và cụm từ trong đó.

Kiến trúc **Transformer** là nền tảng cốt lõi của hầu hết các mô hình ngôn ngữ lớn (LLM) hiện nay như GPT, BERT hay LLaMA. Transformer hoạt động dựa trên cơ chế **self-attention**, cho phép mô hình hiểu và liên kết các từ trong một câu bất kể khoảng cách giữa chúng. Kiến trúc này gồm nhiều lớp lặp lại (stacked layers), mỗi lớp bao gồm hai thành phần chính: **multi-head self-attention** và **mạng nơ-ron feed-forward**. Dữ liệu đầu vào được mã hóa thành vector thông qua embedding, sau đó truyền qua chuỗi các lớp Transformer để tạo ra đầu ra là chuỗi các vector đại diện cho ngữ nghĩa. Transformer có thể được thiết kế theo dạng encoder-only (như BERT), decoder-only (như GPT), hoặc encoder-decoder (như T5), tùy theo mục tiêu của mô hình.

![Large language model](/images/1.introduce/1.0.png)

{{% notice info %}}
Các mô hình ngôn ngữ lớn là mô hình tạo sinh
{{% /notice %}}

LLM rất lớn, vô cùng lớn. Chúng có thể xem xét hàng tỷ tham số và có nhiều cách sử dụng tiềm năng. Dưới đây là một số ví dụ:

- Mô hình GPT-3 của Open AI có 175 tỷ tham số. Người anh em họ của nó là ChatGPT có thể xác định các nhiều mô hình từ dữ liệu, từ đó tạo ra kết quả tự nhiên và có thể đọc được. Mặc dù chúng tôi không biết kích thước của Claude 2, nhưng nó có thể nhận dữ liệu đầu vào lên đến 100.000 token trong mỗi lời nhắc, có nghĩa là nó có thể đọc hàng trăm trang tài liệu kỹ thuật hoặc thậm chí toàn bộ cuốn sách.
- Mô hình Jurassic-1 của AI21 Labs có 178 tỷ tham số và một kho từ vựng token gồm 250.000 thành phần từ cùng khả năng trò chuyện tương tự.
- Mô hình Command của Cohere có khả năng tương tự và có thể hoạt động trong hơn 100 ngôn ngữ khác nhau.
- Nền tảng Paradigm của LightOn cung cấp các mô hình nền tảng với các tính năng được công bố là vượt trội so với các tính năng của mô hình GPT-3. Tất cả các LLM này đều đi kèm với API cho phép các nhà phát triển tạo ra các ứng dụng AI tạo sinh độc đáo.


### LLM có rất nhiều ứng dụng thực tế.

- **Viết quảng cáo**
Ngoài GPT-3 và ChatGPT, Claude, Llama 2, Cohere Command và Jurassic cũng có thể viết quảng cáo gốc. AI21 Wordspice đề xuất những thay đổi đối với câu gốc để cải thiện văn phong và giọng điệu.

- **Trả lời dựa trên cơ sở kiến thức**
Thường được gọi là xử lý ngôn ngữ tự nhiên chuyên sâu về kiến thức (KI-NLP), kỹ thuật này đề cập đến các LLM có khả năng trả lời những câu hỏi cụ thể dựa trên thông tin được lưu trữ trong kho lưu trữ kỹ thuật số. Một ví dụ là khả năng trả lời câu hỏi về kiến thức tổng quát của sân chơi AI21 Studio.

- **Phân loại văn bản**
LLM có thể phân loại văn bản có ý nghĩa hoặc quan điểm tương tự nhau bằng cách sử dụng cụm. Các trường hợp sử dụng bao gồm đo lường quan điểm khách hàng, xác định mối quan hệ giữa các văn bản và tìm kiếm tài liệu.

- **Tạo mã**
LLM thành thạo trong việc tạo mã từ lời nhắc ngôn ngữ tự nhiên. Ví dụ: Amazon CodeWhisperer và codex của Open AI được sử dụng trong GitHub Copilot có thể viết mã bằng Python, JavaScript, Ruby và một số ngôn ngữ lập trình khác. Các ứng dụng viết mã khác bao gồm tạo truy vấn SQL, viết lệnh shell và thiết kế trang web. Tìm hiểu thêm về tạo mã AI.

- **Tạo văn bản**
Tương tự như tạo mã, tạo văn bản có thể hoàn tất các câu không hoàn chỉnh, viết tài liệu về sản phẩm hoặc, như Alexa Create, viết một câu chuyện ngắn dành cho trẻ em.


