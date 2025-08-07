---
title : "Deploy FrondEnd lên Amazon S3"
date : "2024-01-01"
weight : 2
chapter : false
pre : " <b> 4.2 </b> "
---

{{% notice info%}}
Phần này yêu cầu máy đã cài đặt NodeJs
{{% /notice %}}


1. Đầu tiên ta phải suy nghĩ cái tên cho trang web. `ten-website`: là tên cho đường dẫn tới static web, nên dùng những tên ít phổ biến để tránh gặp lỗi, ví dụ: `fcj-rag-chatbot-frontend`, `fcj-rag-chatbot`,…

2. Quay lại cái **Instance EC2** và copy cái địa chỉ public IP lại.

![alt text](/images/4.s3/4.2.png)

3. Tạo file `.env.production`. Nhập vào đoạn code sau:
```
# Production environment variables for AWS deployment  
VITE_API_URL=http://IP-EC2:8000/api
VITE_APP_NAME=RAG Chatbot
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=production
VITE_DEBUG_MODE=false

# AWS Configuration
VITE_AWS_REGION=us-east-1
VITE_S3_BUCKET=ten-website
VITE_CLOUDFRONT_DOMAIN=your-cloudfront-domain.cloudfront.net

# API Configuration
VITE_API_TIMEOUT=30000
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true

# Feature Flags
VITE_ENABLE_PDF_HIGHLIGHTING=true
VITE_ENABLE_DOCUMENT_UPLOAD=true
VITE_MAX_FILE_SIZE=10485760
```
Sau đó chỉnh 2 chỗ:
+ Chỗ `IP-EC2`: nhập vào địa chỉ public IP đã copy.
+ Chỗ `VITE_S3_BUCKET`: cái tên website bạn đã chọn.


![alt text](/images/4.s3/4.3.png)

4. Nhập Terminal `npm install`. Sau đó nhập `npm build`

![alt text](/images/4.s3/4.4.png)

5. Nhập Terminal `aws s3 mb s3://ten-website`.


{{% notice warning%}}
Nhớ cái `ten-website` trùng với tên `VITE_S3_BUCKE` ở trên bạn đã đặt
{{% /notice %}}