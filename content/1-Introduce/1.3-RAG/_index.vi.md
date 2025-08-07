---
title : "Lý thuyết về Sinh văn bản truy vấn tăng cường"
date : "`r Sys.Date()`"
weight : 3 
chapter : false
pre : " <b> 1.3 </b> "
---

**Tạo tăng cường truy xuất (RAG)** là quá trình tối ưu hóa đầu ra của một mô hình ngôn ngữ lớn, vì vậy nó tham khảo một cơ sở kiến thức có thẩm quyền bên ngoài các nguồn dữ liệu đào tạo của nó trước khi tạo phản hồi. Mô hình ngôn ngữ lớn (LLM) được đào tạo trên khối lượng dữ liệu khổng lồ và có sử dụng hàng tỷ tham số để tạo ra đầu ra ban đầu cho các nhiệm vụ như trả lời câu hỏi, dịch ngôn ngữ và hoàn thành câu. RAG mở rộng các khả năng vốn đã mạnh mẽ của LLM đến các miền cụ thể hoặc cơ sở kiến thức nội bộ của tổ chức, tất cả mà không cần đào tạo lại mô hình. Đây là một cách tiếp cận hiệu quả về chi phí để cải thiện đầu ra LLM, để nó vẫn phù hợp, chính xác và hữu ích trong nhiều bối cảnh khác nhau.

LLM là một công nghệ trí tuệ nhân tạo (AI) quan trọng, hỗ trợ các chatbot thông minh và các ứng dụng xử lý ngôn ngữ tự nhiên (NLP) khác. Mục tiêu là tạo ra các bot có thể trả lời các câu hỏi của người dùng trong nhiều bối cảnh bằng cách tham chiếu chéo các nguồn kiến thức có thẩm quyền. Rất tiếc, bản chất của công nghệ LLM đưa ra sự không thể đoán trước trong các phản hồi LLM. Ngoài ra, dữ liệu đào tạo LLM là tĩnh và giới thiệu ngày giới hạn về kiến thức hiện có.

Các thách thức đã biết của LLM bao gồm:

- Trình bày thông tin sai lệch khi nó không có câu trả lời.
- Trình bày thông tin lỗi thời hoặc chung chung khi người dùng mong chờ một phản hồi cụ thể, hiện tại.
- Tạo phản hồi từ những nguồn không có thẩm quyền.
- Tạo phản hồi không chính xác do nhầm lẫn thuật ngữ, trong đó các nguồn đào tạo khác nhau sử dụng cùng một thuật ngữ để nói về những điều khác nhau.


Mô hình ngôn ngữ lớn như một nhân viên mới quá nhiệt tình, từ chối cập nhật thông tin về các sự kiện hiện tại nhưng sẽ luôn trả lời mọi câu hỏi với sự tự tin tuyệt đối. Rất tiếc, một thái độ như vậy ảnh hưởng tiêu cực đến sự tin tưởng của người dùng và không phải là thứ bạn muốn chatbot của mình mô phỏng!

### Lợi ích của Tạo tăng cường truy xuất là gì:

- **Thực hiện tiết kiệm chi phí**
- **Thông tin hiện tại**
- **Nâng cao niềm tin của người dùng**
- **Nhà phát triển có quyền kiểm soát tốt hơn**


### Tạo tăng cường truy xuất hoạt động như thế nào?

Nếu không có RAG, LLM nhận đầu vào của người dùng và tạo ra phản hồi dựa trên thông tin mà nó đã được đào tạo — hoặc những gì nó đã biết. Với RAG, một thành phần truy xuất thông tin được giới thiệu sử dụng đầu vào của người dùng để lấy trước thông tin từ một nguồn dữ liệu mới. Truy vấn người dùng và thông tin có liên quan đều được cung cấp cho LLM. LLM sử dụng kiến thức mới và dữ liệu đào tạo của nó để tạo ra phản hồi tốt hơn. Các phần sau đây cung cấp thông tin tổng quan về quy trình.

- **Tạo dữ liệu bên ngoài**
- **Truy xuất thông tin liên quan**
- **Tăng cường lời nhắc LLM**
- **Cập nhật dữ liệu bên ngoài**

Sơ đồ sau đây cho thấy quy trình mang tính khái niệm của việc sử dụng RAG với LLM.

![RAG architecture](/images/1.introduce/1.3.jpg)
