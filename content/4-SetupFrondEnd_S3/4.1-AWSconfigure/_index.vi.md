---
title : "Cấu hình AWS"
date : "`r Sys.Date()`"
weight : 1
chapter : false
pre : " <b> 4.1 </b> "
---
 
1. Clone Project Github [chatbot-rag](https://github.com/MarkX04/chatbot-rag) về local

![alt text](/images/4.s3/4.0.png)

2. Đổi qua branch `deploy`.
    + Nhập terminal `git checkout deploy`.

3. Nhập các **Key** đã tải lúc trước.
    + Nhập terminal `aws configure`
    + `AWS Access Key ID`: lấy từ file csv đã tải.
    + `AWS Secret Access Key`: lấy từ file csv đã tải.
    + `Default region`: `us-east-1`
    + `Default output format`: `json`

![alt text](/images/4.s3/4.1.png)
