---
title: "Build Docker from Local"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 5.1 </b> "
---

1. Change the path to the **backend**: `cd backend`. Create a `.env` file inside the `rag_v1` folder.

{{% notice info %}}
The `.env` file contains the keys required to call prompts to large language models.
{{% /notice %}}

![alt text](/images/5.backend/5.0.png)

2. Run the command `docker build -t rag-chatbot-backend .` to build the image.

![alt text](/images/5.backend/5.1.png)

{{% notice warning %}}
Note: The build might fail if you haven't installed C++ Build Tools. You can download them from [Build Tools](https://visualstudio.microsoft.com/downloads/?q=build+tools). Just select the C++ Build Tools option.
{{% /notice %}}

![alt text](/images/5.backend/5.2.png)

{{% notice warning %}}
Make sure to create a folder named `chroma` and another folder `data`. Put a sample PDF file inside the `data` folder. You can download sample files from [sample_data](https://drive.google.com/drive/u/0/folders/1y-8b_YjXUWdkL5vSOpMouV65H1g6E1RY).  
**Important Note**: The PDF file must be in pure text format. If it's image-based, the extraction may not work properly.
{{% /notice %}}

![alt text](/images/5.backend/5.3.png)

3. Start compressing the Docker image `rag-chatbot-backend` into a `.tar.gz` file to transfer to another machine:
`docker save rag-chatbot-backend | gzip > rag-chatbot-backend.tar.gz`

{{% notice tip %}}
The `gzip` command is not available in **PowerShell**. Use Git Bash to run the command instead.
{{% /notice %}}

![alt text](/images/5.backend/5.4.png)
![alt text](/images/5.backend/5.5.png)

{{% notice tip %}}
This command might take a little while to complete.
{{% /notice %}}

4. Transfer the `rag-chatbot-backend.tar.gz` file from your local machine to the EC2 instance's home directory using **SSH**, with the **PEM** file for authentication:
`scp -i ~/.ssh/keyfile.pem rag-chatbot-backend.tar.gz ubuntu@EC2-IP:~/`  
(Remember to replace `~/.ssh/keyfile.pem` with the actual path to your downloaded key pair and `EC2-IP` with the actual public IP of your EC2 instance)

{{% notice info %}}
Type `yes` if prompted with **Are you sure you want to continue connecting...**. Your typing won’t be shown on screen.
{{% /notice %}}

![alt text](/images/5.backend/5.6.png)

Wait for the file to finish uploading to EC2. The upload time depends on your internet speed.

5. SSH into your Ubuntu EC2 instance using the PEM file for authentication:
`ssh -i ~/.ssh/keyfile.pem ubuntu@EC2-IP`  
(Remember to replace `~/.ssh/keyfile.pem` and `EC2-IP` with the correct values)

![alt text](/images/5.backend/5.7.png)

6. Once connected to EC2:
   + Install Docker on Ubuntu EC2
   + Add user to the docker group
   + Load the Docker image
   + Run the container

```
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker ubuntu
newgrp docker
gunzip -c rag-chatbot-backend.tar.gz | docker load
docker run -d   --name rag-chatbot-backend   -p 8000:8000    rag-chatbot-backend
```

![alt text](/images/5.backend/5.8.png)

7. Check if the backend is running by visiting: `http://<ec2-ip>:8000/docs`

![alt text](/images/5.backend/5.9.png)

8. Monitor the backend logs in the terminal with: `docker logs -f rag-chatbot-backend`

9. Go back to the **Front End** URL you created earlier.

![alt text](/images/5.backend/5.10.png)

{{% notice info %}}
Check if you see the green text `RAG Ready`. That means everything is working properly.
{{% /notice %}}
