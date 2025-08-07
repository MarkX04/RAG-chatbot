---
title : "Create EC2 Instance"
date : "`r Sys.Date()`"
weight : 3
chapter : false
pre : " <b> 3. </b> "
---

In this step, we will create an EC2 instance for the RAG (Retrieval-Augmented Generation) application.

1. Search for `EC2` using the AWS Console search bar.

![alt text](/images/3.ec2/3.0.png)

2. In the left sidebar, click on `Instances`, then choose `Launch Instance`.

![alt text](/images/3.ec2/3.1.png)

3. Name your EC2 instance.

![alt text](/images/3.ec2/3.2.png)

4. Under **Amazon Machine Image**, select:
   - `Ubuntu Server 22.04 LTS (HVM), SSD Volume Type`

![alt text](/images/3.ec2/3.3.png)

5. In the **Instance Type** section, choose `t3.small`.  
   For **Key pair (login)**, either select an existing key or create a new one.

{{% notice info %}}
Make sure to **download the `.pem` key file** to your local machine.
{{% /notice %}}

![alt text](/images/3.ec2/3.4.png)

6. For **VPC**, select `Default`.

![alt text](/images/3.ec2/3.5.png)

7. Modify the **Inbound Rules** to allow access:
   - **Type**: `SSH`, **Source Type**: `Anywhere`, **Port Range**: `22`
   - **Type**: `Custom TCP`, **Source Type**: `Anywhere`, **Port Range**: `8000`

![alt text](/images/3.ec2/3.6.png)

8. Under **Storage**, choose `24 GiB` with volume type `gp2`.

![alt text](/images/3.ec2/3.7.png)

9. Finally, click **Launch Instance** to start your EC2 instance.
