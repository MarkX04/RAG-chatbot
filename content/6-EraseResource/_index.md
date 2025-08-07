---
title : "Delete Resources"
date : "`r Sys.Date()`"
weight : 6
chapter : false
pre : " <b> 6. </b> "
---

### This section helps you quickly delete the resources used on AWS to avoid unexpected charges.

1. Go back to the **EC2** service and select the EC2 instance you used for the application. Click `Stop` Instance and then `Terminate` Instance.

![alt text](/images/6.clean/6.0.png)

2. Then go to the **S3** service and select the correct bucket you created. First, empty the bucket.

![alt text](/images/6.clean/6.1.png)

3. Type `permanently delete` and click `Empty`.

![alt text](/images/6.clean/6.2.png)

4. Then go back to the general bucket view and click `Delete`.

![alt text](/images/6.clean/6.3.png)

5. Enter the exact website name you set earlier to **confirm you want to delete**. Then click `Delete bucket`.

![alt text](/images/6.clean/6.4.png)

6. Go to the **IAM** service to delete the IAM ROLE.

![alt text](/images/6.clean/6.5.png)

7. **Deactivate the access key**. Be sure to deactivate it before fully deleting the IAM.

![alt text](/images/6.clean/6.6.png)

8. Type **Confirm** and click `Delete`.

![alt text](/images/6.clean/6.7.png)
