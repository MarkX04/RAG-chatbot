---
title : "Tạo EC2"
date : "2024-01-01"
weight : 3
chapter : false
pre : " <b> 3. </b> "
---

Trong bước này, chúng ta sẽ tạo EC2 cho ứng dụng RAG.

1. Tìm kiếm `EC2` trên thanh tìm kiếm AWS console.

![alt text](/images/3.ec2/3.0.png)

2. Chọn vào mục `Instance` bên thanh bên trái. Sau đó chọn `Launch Instance`.

![alt text](/images/3.ec2/3.1.png)

3. Đặt tên cho EC2.

![alt text](/images/3.ec2/3.2.png)

4. Chọn hệ điều hành `Ubuntu`. **Amazon Machine Image** chọn loại `Ubuntu Server 22.04 LTS (HVM), SSD Volume Type`

![alt text](/images/3.ec2/3.3.png)

5. Phần **Instance Type** chọn `t3.small`. **Key pair** thì hoặc là chọn cái đã có hoặc là tạo mới. 

{{% notice info%}}
Lưu ý phải phải tải file .pem về local.
{{% /notice %}}


![alt text](/images/3.ec2/3.4.png)

6. **VPC** chọn `Default`.

![alt text](/images/3.ec2/3.5.png)

7. **Inbound Rule** chỉnh 2 thứ:
    + **Type**: `SSH`; **Source Type**: `Anywhere`; **Port Range**: `22`
    + **Type**: `Custom TCP`; **Source Type**: `Anywhere`; **Port Range**: `8000`

![alt text](/images/3.ec2/3.6.png)

8. Phần storage chọn 24 GiB loại `gp2`.

![alt text](/images/3.ec2/3.7.png)

9. Sau đó bấm **Launch Instance**.