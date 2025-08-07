---
title : "Cấu hình Amazon S3"
date : "`r Sys.Date()`"
weight : 3
chapter : false
pre : " <b> 4.3 </b> "
---

1. Tìm kiếm dịch vụ **S3** của AWS. 

2. Ở mục menu bên trái chọn `General purpose buckets`. Chọn vào đúng cái `ten-website` lúc nãy bạn đã đặt.

![alt text](/images/4.s3/4.5.png)

3. Chọn tab `Permission`.

![alt text](/images/4.s3/4.6.png)

4. Bấm vào `Edit` trong mục **Block public access**

![alt text](/images/4.s3/4.7.png)

5. Bấm uncheck `Block all public access`. Rồi chọn `Save changes`.

![alt text](/images/4.s3/4.8.png)

6. Rồi tiếp tục kéo xuống phần `Bucket Policy`. Chọn `Edit`.

![alt text](/images/4.s3/4.9.png)

7. Copy lệnh này bỏ vào(Nhớ chỗ `ten-website` để đúng cái tên bạn đã dùng):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ten-website/*"
    }
  ]
}
```

![alt text](/images/4.s3/4.10.png)

8. Sau đó chọn tiếp tab `Properties`. Kéo xuống dưới chỗ `Static website hosting` chọn `Edit`.

![alt text](/images/4.s3/4.11.png)

9. **Static web hosting** chọn `Enable`. Phần **Index document** và **Error document** đều nhập `index.html`. Sau đó bấm `Save`.

![alt text](/images/4.s3/4.12.png)


10. Quay về **Terminal** upload folder dist vừa build từ frontend (Nhớ là để đúng tên website bạn đã chọn): `aws s3 sync dist/ s3://ten-website`

![alt text](/images/4.s3/4.13.png)


11. Truy cập `http://ten-website.s3-website-us-east-1.amazonaws.com`. (Thay đúng tên) để check xem Frond End.

![alt text](/images/4.s3/4.14.png)

{{% notice warning%}}
Lúc này chưa có Back End. Nên góc dưới bên phải sẽ hiện dòng chữ màu đỏ `Backend Offline`
{{% /notice %}}