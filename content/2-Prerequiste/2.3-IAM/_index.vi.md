---
title : "Tạo IAM role với các quyền cần thiết"
date : "2024-01-01"
weight : 3
chapter : false
pre : " <b> 2.3</b> "
---


### Tạo và Phân quyền cho IAM Role

{{% notice warning%}}
Để tuân thủ Best Practice. Chúng ta nên tạo acc và phân quyền IAM Role
{{% /notice %}}

1. Vào mục tìm kiếm trên console của AWS. Chọn **IAM**. Bấm vào `Create User`.

![Project Name](/images/2.prerequisite/2.13.png)

2. Đặt tên `Username`. Chọn mục `Provide user access to the AWS Management Console`. Ở mục `User type` chọn `I want to create an IAM user`. Rồi chọn `Next`.

![Project Name](/images/2.prerequisite/2.14.png)

3. Mục `Set Permission` chọn `Attach policies directly`.

![alt text](/images/2.prerequisite/2.15.png)

4. Trong các Policy chọn 3 options:
    + Search Policy: `AdministratorAccess`
    + Search Policy: `AmazonS3FullAccess`
    + Search Policy: `AmazonEC2FullAccess`

![alt text](/images/2.prerequisite/2.16.png)

![alt text](/images/2.prerequisite/2.17.png)

![alt text](/images/2.prerequisite/2.18.png)

5. Sau khi bấm `Next` kiểm tra lại các quyền đã chọn coi đúng chưa. Sau đó bấm vào `Create user`

![alt text](/images/2.prerequisite/2.19.png)

6. Tải xuống file csv chứa các thông tin về **user** và **password**

![alt text](/images/2.prerequisite/2.20.png)

7. Bấm lại vào User vừa tạo và `Create access key`.

![alt text](/images/2.prerequisite/2.21.png)

8. Chọn `Command Line Interface (CLI)`. Nhớ bấm tick chỗ `I understand the above recommendation and want to proceed to create an access key`. Chọn `Next`, và `Next` tiếp.

![alt text](/images/2.prerequisite/2.22.png)

9. Download file `csv` access key của IAM về và lưu trữ.

![alt text](/images/2.prerequisite/2.23.png)

{{% notice warning%}}
Tuyệt đối không chia sẻ các thông tin về các file csv đã download.
{{% /notice %}}

{{% notice info%}}
Các file access key này dùng để sử dụng mỗi khi sử dụng embedding và LLM từ Amazon Bedrock
{{% /notice %}}