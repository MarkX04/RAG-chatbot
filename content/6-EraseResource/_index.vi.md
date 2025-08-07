---
title : "Xóa tài nguyên"
date : "`r Sys.Date()`"
weight : 6
chapter : false
pre : " <b> 6. </b> "
---

### Phần này ta sẽ xóa nhanh các tài nguyên đã sử dụng trên AWS để tránh bị tính tiền quá mong muốn

1. Truy cập lại dịch vụ **EC2** và chọn lại đúng cái EC2 instance đã dùng cho ứng dụng. `Stop` Instance và sau đó `Terminate` Instance.

![alt text](/images/6.clean/6.0.png)

2. Truy cập tiếp qua dịch vụ **S3** và chọn đúng cái bucket đã tạo. Đầu tiên phải empty cái bucket đó.

![alt text](/images/6.clean/6.1.png)

3. Nhập `permanently delete` và bấm `Empty`

![alt text](/images/6.clean/6.2.png)

4. Sau đó quay lại chỗ bucket general bấm vào `Delete`.

![alt text](/images/6.clean/6.3.png)

5. Nhập vào đúng tên website đã đặt để **chắc chắn là bạn muốn delete**. Sau đó bấm `Delete bucket`.

![alt text](/images/6.clean/6.4.png)

6. Truy cập vào dịch vụ **IAM** để xóa IAM ROLE.

![alt text](/images/6.clean/6.5.png)

7. **Deactivate access key**. Hãy nhớ deactivate trước khi xóa hoàn toàn IAM.

![alt text](/images/6.clean/6.6.png)

8. Nhập **Confirm** và bấm `Delete`

![alt text](/images/6.clean/6.7.png)