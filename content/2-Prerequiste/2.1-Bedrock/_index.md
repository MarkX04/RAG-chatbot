---
title: "Enabling Large Language and Embedding Models"
date: "`r Sys.Date()`"
weight: 1 
chapter: false
pre: " <b> 2.1</b> "
---

### Enabling Large Language and Embedding Models

1. Log in to the AWS Console  
   - Search for **AWS Bedrock**  
   - Select **Amazon Bedrock**

![AWS Bedrock](/images/2.prerequisite/2.0.png)

{{% notice warning %}}
In this workshop, we will be using the Virginia United States region `(us-east-1)`
{{% /notice %}}

![AWS Bedrock](/images/2.prerequisite/2.1.png)

2. In the Amazon Bedrock interface, scroll down in the **Configure and learn** section and select **Model access**

3. Click **Modify model access**

![AWS Bedrock](/images/2.prerequisite/2.2.png)

{{% notice info %}}
In this workshop, we will use the `Claude 3.5 Sonnet` model from **Anthropic** and the `Embedding English` model from **Cohere** as examples. You can choose other models if you prefer.
{{% /notice %}}

4. Select `Claude 3.5 Sonnet` and `Embedding English`, then click `Next`

![AWS Bedrock](/images/2.prerequisite/2.3.png)

![AWS Bedrock](/images/2.prerequisite/2.4.png)

5. Review the changes and click `Submit`

![AWS Bedrock](/images/2.prerequisite/2.5.png)

---

Once the services have been enabled and the IAM role or IAM user has been created, you can use the Access Key and Secret Key to send prompts to the Large Language Model (LLM) via code — for example, using AWS’s `boto3` SDK.

```python
import boto3
import json

# Create a client for Bedrock
bedrock = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1",  # replace with your region
    aws_access_key_id="YOUR_ACCESS_KEY_ID",
    aws_secret_access_key="YOUR_SECRET_ACCESS_KEY",
)

# Example: send a prompt to Claude
response = bedrock.invoke_model(
    modelId="anthropic.claude-v2",
    contentType="application/json",
    accept="application/json",
    body=json.dumps({
        "prompt": "Please explain the difference between AI and Machine Learning.",
        "max_tokens_to_sample": 300,
        "temperature": 0.7
    })
)

result = response['body'].read().decode('utf-8')
print(result)
```

{{% notice tip %}}
In practice, the arguments aws_access_key_id and aws_secret_access_key will not appear directly in the code. They will be stored in a .env file and loaded when needed.
{{% /notice %}}