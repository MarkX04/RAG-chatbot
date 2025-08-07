---
title : "Configure Amazon S3"
date : "2024-01-01"
weight : 3
chapter : false
pre : " <b> 4.3 </b> "
---

### Configure Your Amazon S3 Bucket for Static Website Hosting

1. In the AWS Console, search for the **S3** service.

2. In the left menu, select `General purpose buckets`. Click on the bucket you created earlier — this is your `your-website-name`.

![alt text](/images/4.s3/4.5.png)

3. Go to the `Permissions` tab.

![alt text](/images/4.s3/4.6.png)

4. Under **Block public access**, click `Edit`.

![alt text](/images/4.s3/4.7.png)

5. Uncheck the box **Block all public access**, then click `Save changes`.

![alt text](/images/4.s3/4.8.png)

6. Scroll down to the **Bucket Policy** section and click `Edit`.

![alt text](/images/4.s3/4.9.png)

7. Paste the following policy into the editor (replace `your-website-name` with your actual bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-website-name/*"
    }
  ]
}
```

8. Then, go to the `Properties` tab. Scroll down to **Static website hosting** and click `Edit`.

![alt text](/images/4.s3/4.11.png)

9. Under **Static website hosting**, select `Enable`. For both **Index document** and **Error document**, enter `index.html`, then click `Save`.

![alt text](/images/4.s3/4.12.png)

10. Back in your terminal, upload the `dist` folder (which was generated from building the frontend) to the S3 bucket. Make sure the bucket name matches what you used earlier:

```bash
aws s3 sync dist/ s3://your-website-name
```
![alt text](/images/4.s3/4.13.png)


11. Access `http://ten-website.s3-website-us-east-1.amazonaws.com`. (Replace with your actual bucket name) to check the Front End.

![alt text](/images/4.s3/4.14.png)

{{% notice warning %}}
Since the Back End has not been deployed yet, you will see a red message in the bottom right corner saying `Backend Offline`.
{{% /notice %}}