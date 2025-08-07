---
title : "Deploy Frontend to Amazon S3"
date : "2024-01-01"
weight : 2
chapter : false
pre : " <b> 4.2 </b> "
---

{{% notice info %}}
This section requires Node.js to be installed on your machine.
{{% /notice %}}

### Steps to Deploy the Frontend on Amazon S3

1. First, think of a unique name for your website. This will be used as the **S3 bucket name** (i.e., the path to your static website). Choose a name that’s less likely to be taken, for example:  
   - `fcj-rag-chatbot-frontend`  
   - `fcj-rag-chatbot`  
   etc.

2. Go back to your **EC2 Instance** and copy the **Public IP address**.

![alt text](/images/4.s3/4.2.png)

3. Create a `.env.production` file in the project root with the following content:

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

Then adjust these two values:
+ In `IP-EC2`: enter the public IP address you copied earlier.
+ In `VITE_S3_BUCKET`: enter the name of the website bucket you chose.

![alt text](/images/4.s3/4.3.png)

4. In the terminal, run `npm install`, then run `npm build`.

![alt text](/images/4.s3/4.4.png)

5. In the terminal, run `aws s3 mb s3://ten-website`.

{{% notice warning %}}
Make sure the `ten-website` matches the name of `VITE_S3_BUCKET` you set above.
{{% /notice %}}
