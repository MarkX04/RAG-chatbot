---
title : "Build Docker từ local"
date : "2024-01-01"
weight : 1
chapter : false
pre : " <b> 5.1 </b> "
---

1. Thay đổi đường dẫn đến **backend**: `cd backend` . Tạo 1 file .env trong folder `rag_v1`.

{{% notice info%}}
File .env chứa các key để gọi promt đến các mô hình ngôn ngữ lớn.
{{% /notice %}}

![alt text](/images/5.backend/5.0.png)

2. Nhập lệnh `docker build -t rag-chatbot-backend .` để build images.

![alt text](/images/5.backend/5.1.png)

{{% notice warning%}}
Lưu ý có khả năng khi build sẽ bị fail do chưa cài C++ Build Tools. Các bạn có thể tự tải C++ Build Tools từ [Build Tools](https://visualstudio.microsoft.com/downloads/?q=build+tools). Chọn option C++ Build Tools là được.
{{% /notice %}}

![alt text](/images/5.backend/5.2.png)

{{% notice warning%}}
Lưu ý các bạn cũng phải tạo 1 thư mục tên `chroma` và 1 thư mục `data`. Và hãy kiếm cái file pdf bỏ vào folder `data`. Các bạn có thể lấy các file từ [sample_data](https://drive.google.com/drive/u/0/folders/1y-8b_YjXUWdkL5vSOpMouV65H1g6E1RY). **Lưu ý đặc biệt**: file pdf phải là file pdf thuần text. Nếu file pdf image thì có khả năng trích xuất ảnh ko được tốt.
{{% /notice %}}

![alt text](/images/5.backend/5.3.png)


3. Bắt đầy nén image Docker `rag-chatbot-backend` thành một file `.tar.gz` để  chuyển qua máy khác.
`docker save rag-chatbot-backend | gzip > rag-chatbot-backend.tar.gz`

{{% notice tip%}}
Lệnh gzip không có trong **powershell**. Nên ta bật git bash để nhập lệnh đó.
{{% /notice %}}

![alt text](/images/5.backend/5.4.png)

![alt text](/images/5.backend/5.5.png)

{{% notice tip%}}
Chờ lệnh này hơi lâu 1 chút.
{{% /notice %}}

4. Gửi file `rag-chatbot-backend.tar.gz` từ máy lên EC2 ở thư mục home của user ubuntu thông qua **SSH**, dùng file **PEM** để xác thực.
`scp -i ~/.ssh/tenfile.pem rag-chatbot-backend.tar.gz ubuntu@EC2-IP:~/` (Nhớ cái chỗ `~/.ssh/tenfile.pem` ghi đúng địa chỉ file key pair bạn đã tải và `EC2-IP` cũng ghi đúng địa chỉ public IP EC2 instance)

{{% notice info%}}
Bạn nhớ nhập `yes` vào **Are you sure you want to...**. Chữ đánh máy sẽ không hiển thị.
{{% /notice %}}

![alt text](/images/5.backend/5.6.png)

Sau đó bạn sẽ chờ file được tải lên ec2. Tốc độ tùy thuộc vào mạng nhà của bạn

5. Đăng nhập vào máy chủ EC2 chạy Ubuntu, sử dụng file PEM để xác thực thay vì nhập mật khẩu.
`ssh -i ~/.ssh/tenfile.pem ubuntu@EC2-IP` (Nhớ cái chỗ `~/.ssh/tenfile.pem` ghi đúng địa chỉ file key pair bạn đã tải và `EC2-IP` cũng ghi đúng địa chỉ public IP EC2 instance)

![alt text](/images/5.backend/5.7.png)


6. Sau khi ssh vào EC2:
    + Cài Docker trên Ubuntu EC2
    + Thêm user vào nhóm docker
    + Load Docker image
    + Chạy container

```
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
newgrp docker
gunzip -c rag-chatbot-backend.tar.gz | docker load
docker run -d   --name rag-chatbot-backend   -p 8000:8000    rag-chatbot-backend
```


![alt text](/images/5.backend/5.8.png)

7. Kiểm tra backend có đang hoạt động hay không bằng cách vào: `http://<ec2-ip>:8000/docs`

![alt text](/images/5.backend/5.9.png)

8. Kiểm tra trong terminal: `docker logs -f rag-chatbot-backend`

9. Quay lại cái đường dẫn **Frond End** bạn đã tạo lúc đầu.

![alt text](/images/5.backend/5.10.png)

{{% notice info%}}
Check xem thấy chữ `RAG Ready` màu xanh lá cây là ok.
{{% /notice %}}