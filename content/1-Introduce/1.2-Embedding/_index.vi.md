---
title : "Lý thuyết về Hàm nhúng để lưu trữ"
date : "2024-01-01"
weight : 2 
chapter : false
pre : " <b> 1.2 </b> "
---

**Hàm nhúng** là các biểu diễn số của các đối tượng trong thế giới thực mà các hệ thống học máy (ML) và trí tuệ nhân tạo (AI) sử dụng để hiểu các miền kiến thức phức tạp như con người. Ví dụ, các thuật toán điện toán hiểu rằng hiệu số giữa 2 và 3 là 1, cho thấy mối quan hệ chặt chẽ giữa 2 và 3 so với 2 và 100. Tuy nhiên, dữ liệu trong thế giới thực bao gồm các mối quan hệ phức tạp hơn. Ví dụ, tổ chim và hang sư tử là các cặp tương tự, trong khi ngày-đêm là các thuật ngữ trái nghĩa. Nhúng chuyển đổi các đối tượng trong thế giới thực thành các biểu diễn toán học phức tạp nắm bắt các thuộc tính và mối quan hệ vốn có giữa dữ liệu trong thế giới thực. Toàn bộ quá trình được tự động hóa, với các hệ thống AI tự tạo nhúng trong quá trình đào tạo và sử dụng chúng khi cần để hoàn thành các nhiệm vụ mới.

Nhúng cho phép các mô hình học sâu hiểu các miền dữ liệu thực tế hiệu quả hơn. Chúng đơn giản hóa cách dữ liệu thực tế được biểu diễn trong khi vẫn giữ nguyên các mối quan hệ ngữ nghĩa và cú pháp. Điều này cho phép các thuật toán học máy trích xuất và xử lý các loại dữ liệu phức tạp, đồng thời cho phép các ứng dụng AI tiên tiến. Các phần sau đây sẽ mô tả một số yếu tố quan trọng. 

- **Giảm chiều dữ liệu**
- **Đào tạo các mô hình ngôn ngữ lớn**
- **Xây dựng các ứng dụng sáng tạo**

Nhúng cho phép các ứng dụng học sâu và trí tuệ nhân tạo (AI) mới . Các kỹ thuật nhúng khác nhau được áp dụng trong kiến trúc mạng nơ-ron cho phép phát triển, đào tạo và triển khai các mô hình AI chính xác trong nhiều lĩnh vực và ứng dụng khác nhau. Ví dụ:

- Với công nghệ nhúng hình ảnh, các kỹ sư có thể xây dựng các ứng dụng thị giác máy tính có độ chính xác cao để phát hiện đối tượng, nhận dạng hình ảnh và các tác vụ liên quan đến thị giác khác. 
- Với việc nhúng từ, phần mềm xử lý ngôn ngữ tự nhiên có thể hiểu chính xác hơn ngữ cảnh và mối quan hệ giữa các từ.
- Nhúng đồ thị trích xuất và phân loại thông tin liên quan từ các nút được kết nối để hỗ trợ phân tích mạng.

Các mô hình thị giác máy tính, **chatbot AI** và hệ thống đề xuất AI đều sử dụng nhúng để hoàn thành các nhiệm vụ phức tạp mô phỏng trí thông minh của con người.

![Visualize embedding](/images/1.introduce/1.1.png)


Nhúng dữ liệu chuyển đổi dữ liệu thô thành các giá trị liên tục mà mô hình ML có thể diễn giải. Thông thường, các mô hình ML sử dụng mã hóa **one-hot** để ánh xạ các biến phân loại thành các dạng mà chúng có thể học được. Phương pháp mã hóa chia mỗi danh mục thành các hàng và cột và gán cho chúng các giá trị nhị phân. Hãy xem xét các danh mục nông sản sau và giá của chúng.

Mã hóa one-hot mở rộng các giá trị chiều 0 và 1 mà không cung cấp thông tin giúp mô hình liên hệ các đối tượng khác nhau. Ví dụ, mô hình không thể tìm thấy điểm tương đồng giữa táo và cam mặc dù chúng là trái cây, cũng không thể phân biệt cam và cà rốt là trái cây và rau củ. Khi danh sách càng nhiều danh mục, mã hóa sẽ dẫn đến các biến phân bố thưa thớt với nhiều giá trị rỗng, chiếm dụng rất nhiều không gian bộ nhớ. 

Nhúng vector hóa các đối tượng thành không gian ít chiều bằng cách biểu diễn các điểm tương đồng giữa các đối tượng bằng các giá trị số. Nhúng mạng nơ-ron đảm bảo số chiều vẫn có thể quản lý được với các đặc trưng đầu vào mở rộng. Đặc trưng đầu vào là các đặc điểm của các đối tượng cụ thể mà thuật toán ML được giao nhiệm vụ phân tích. Giảm chiều cho phép nhúng giữ lại thông tin mà các mô hình ML sử dụng để tìm điểm tương đồng và khác biệt từ dữ liệu đầu vào. Các nhà khoa học dữ liệu cũng có thể trực quan hóa các nhúng trong không gian hai chiều để hiểu rõ hơn mối quan hệ của các đối tượng phân tán. 

![Convert text to embedding vector](/images/1.introduce/1.2.png)

**Amazon Bedrock** là một dịch vụ được quản lý toàn diện, cung cấp nhiều lựa chọn mô hình nền tảng (FM) hiệu suất cao từ các công ty AI hàng đầu, cùng với một bộ tính năng đa dạng để xây dựng các ứng dụng trí tuệ nhân tạo (AI) tạo sinh. **Amazon Nova**  là thế hệ mô hình nền tảng (FM) tiên tiến (SOTA) mới, mang đến trí tuệ tiên tiến và hiệu suất giá/hiệu suất hàng đầu trong ngành. Đây là những mô hình mạnh mẽ, đa năng được xây dựng để hỗ trợ nhiều trường hợp sử dụng khác nhau. Bạn có thể sử dụng chúng theo nguyên trạng hoặc tùy chỉnh chúng với dữ liệu của riêng bạn. 

**Titan Embeddings** là một LLM (Lý thuyết học máy) chuyển đổi văn bản thành biểu diễn số. Mô hình Titan Embeddings hỗ trợ truy xuất văn bản, phân cụm và so sánh ngữ nghĩa. Văn bản đầu vào tối đa là 8K token và độ dài vectơ đầu ra tối đa là 1536.

Các nhóm học máy cũng có thể sử dụng **Amazon SageMaker** để tạo nhúng. Amazon SageMaker là một trung tâm nơi bạn có thể xây dựng, đào tạo và triển khai các mô hình ML trong một môi trường an toàn và có thể mở rộng. Nó cung cấp một kỹ thuật nhúng gọi là Object2Vec, cho phép các kỹ sư vector hóa dữ liệu đa chiều trong không gian đa chiều. Bạn có thể sử dụng các nhúng đã học để tính toán mối quan hệ giữa các đối tượng cho các tác vụ hạ nguồn như phân loại và hồi quy.