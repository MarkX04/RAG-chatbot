---
title : "Kích hoạt model ngôn ngữ lớn và embedding"
date : "2024-01-01"
weight : 1 
chapter : false
pre : " <b> 2.1</b> "
---


### Kích hoạt model ngôn ngữ lớn và embedding

1. Đăng nhập vào AWS console
  - Tìm **AWS Bedrock**
  - Chọn **Amazon Bedrock**

![AWS Bedrock](/images/2.prerequisite/2.0.png)

{{% notice warning %}}
Trong bài workshop này chúng ta sẽ sử dụng Region Virgina United States `(us-east-1)`
{{% /notice %}}

![AWS Bedrock](/images/2.prerequisite/2.1.png)

2. Trong giao diện Amazon Bedrock kéo thanh menu bên phải xuống trong mục **Configure and learn** và chọn **Model access**

3. Chọn **Modify model access**


![AWS Bedrock](/images/2.prerequisite/2.2.png)


{{% notice info%}}
Trong bài workshop này chúng ta sẽ sử dụng Model `Claude 3.5 Sonnet` của **Anthropic** và `Embedding English` của **Cohere** để làm ví dụ. Bạn có thể hoàn toàn chọn những model khác thay thế.
{{% /notice %}}

4. Chọn vào `Claude 3.5 Sonnet` và `Embedding English`. Rồi bấm `Next`

![AWS Bedrock](/images/2.prerequisite/2.3.png)

![AWS Bedrock](/images/2.prerequisite/2.4.png)

5. Kiểm tra lại các thay đổi, rồi bấm `Submit`

![AWS Bedrock](/images/2.prerequisite/2.5.png)


- Sau khi đã enable dịch vụ và tạo IAM role hoặc IAM user, bạn có thể sử dụng Access Key và Secret Key để gửi prompt đến mô hình ngôn ngữ lớn (LLM) thông qua code — ví dụ với SDK `boto3` của AWS.

```python
import boto3

# Tạo client kết nối đến Bedrock
bedrock = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1",  # thay bằng region phù hợp
    aws_access_key_id="YOUR_ACCESS_KEY_ID",
    aws_secret_access_key="YOUR_SECRET_ACCESS_KEY",
)

# Ví dụ gửi prompt tới Claude
response = bedrock.invoke_model(
    modelId="anthropic.claude-v2",
    contentType="application/json",
    accept="application/json",
    body=json.dumps({
        "prompt": "Làm ơn giải thích sự khác nhau giữa AI và Machine Learning.",
        "max_tokens_to_sample": 300,
        "temperature": 0.7
    })
)

result = response['body'].read().decode('utf-8')
print(result)
```

{{% notice tip%}}
Trong code thực hành sẽ ko có các argument `aws_access_key_id` và `aws_secret_access_key` vì ta sẽ bỏ chúng vào 1 file .env và sẽ load lên sử dụng.
{{% /notice %}}