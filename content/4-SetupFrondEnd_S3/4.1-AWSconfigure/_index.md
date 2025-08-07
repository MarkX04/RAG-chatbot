---
title : "Configure AWS"
date : "2024-01-01"
weight : 1
chapter : false
pre : " <b> 4.1 </b> "
---

### Step-by-step AWS CLI Configuration

1. Clone the GitHub project [chatbot-rag](https://github.com/MarkX04/chatbot-rag) to your local machine.

![alt text](/images/4.s3/4.0.png)

2. Switch to the `deploy` branch:
   + Run the command in your terminal: `git checkout deploy`

3. Enter the **Access Keys** that you downloaded earlier:
   + Run: `aws configure`
   + `AWS Access Key ID`: From the downloaded CSV file
   + `AWS Secret Access Key`: From the downloaded CSV file
   + `Default region`: `us-east-1`
   + `Default output format`: `json`

![alt text](/images/4.s3/4.1.png)
