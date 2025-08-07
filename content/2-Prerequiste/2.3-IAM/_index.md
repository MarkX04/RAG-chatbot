---
title : "Create IAM Role with Required Permissions"
date : "2024-01-01"
weight : 3
chapter : false
pre : " <b> 2.3</b> "
---

### Creating and Assigning IAM Role Permissions

{{% notice warning %}}
To follow best practices, we should create a dedicated user account and assign permissions using IAM roles.
{{% /notice %}}

1. In the AWS Console search bar, search for **IAM** and select it. Click on `Create User`.

![Project Name](/images/2.prerequisite/2.13.png)

2. Enter a `Username`. Under `Provide user access to the AWS Management Console`, choose `I want to create an IAM user`, then click `Next`.

![Project Name](/images/2.prerequisite/2.14.png)

3. Under the `Set Permissions` section, choose `Attach policies directly`.

![alt text](/images/2.prerequisite/2.15.png)

4. Select the following 3 policies:
   - `AdministratorAccess`
   - `AmazonS3FullAccess`
   - `AmazonEC2FullAccess`

![alt text](/images/2.prerequisite/2.16.png)
![alt text](/images/2.prerequisite/2.17.png)
![alt text](/images/2.prerequisite/2.18.png)

5. Click `Next`, review the selected permissions to confirm, then click `Create user`.

![alt text](/images/2.prerequisite/2.19.png)

6. Download the `.csv` file containing the **username** and **password** details.

![alt text](/images/2.prerequisite/2.20.png)

7. Go back to the newly created user and select `Create access key`.

![alt text](/images/2.prerequisite/2.21.png)

8. Select `Command Line Interface (CLI)`. Check the box `I understand the above recommendation and want to proceed to create an access key`. Then click `Next`, and `Next` again.

![alt text](/images/2.prerequisite/2.22.png)

9. Download the `.csv` file containing the access key credentials and store it securely.

![alt text](/images/2.prerequisite/2.23.png)

{{% notice warning %}}
Never share the contents of the downloaded `.csv` files with others.
{{% /notice %}}

{{% notice info %}}
These access key files are used to authenticate when accessing Amazon Bedrock's Embedding and LLM services.
{{% /notice %}}
