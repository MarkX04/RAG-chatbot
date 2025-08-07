---
title: "Enabling the Gemini Large Language Model"
date: "2024-01-01"
weight: 2
chapter: false
pre: " <b> 2.2</b> "
---

### Introduction to the Gemini Large Language Model

In this workshop, we will introduce another model that can be used for this application: **Gemini**.

Using the Gemini LLM on Google Cloud offers several notable benefits, especially suitable for beginners or those experimenting with LLMs:

1. **Simple and Easy-to-Integrate Prompting**

- Official Python SDK: `vertexai`
- Sending a prompt is as simple as calling a Python function
- JSON or object-based structure that's easy to read and parse

```python
chat.send_message("Please write a simple chatbot using Streamlit.")
```

2. **Gemini 1.5 Pro is Currently Free**

- Google is currently offering access to **Gemini 1.5 Pro** completely **free of charge** via:

    - [Google AI Studio](https://makersuite.google.com/)  
    - **Vertex AI** (via Notebook or API)  
    - This is a great opportunity to experiment with a powerful LLM **at no cost**.

3. **No Billing Card Required**

- If you're using a **personal Google account (Gmail)** to:

    - Sign in to **AI Studio**, or  
    - Create a **new Google Cloud Project**,  
    - You can use **Gemini for free** without needing to add a billing card. Google provides a **default free quota** that’s sufficient for experimentation or learning. This is especially suitable for **students, AI learners, or hands-on workshops.**

4. **Multimodal Support (text + image + code)**

- Gemini is one of the few LLMs that supports **multimodal input**, including:

    - Text  
    - Images  
    - Code  

- This enables you to solve a wide range of problems, such as:

    - Synthesizing and summarizing documents  
    - Explaining programming code  
    - Image recognition and analysis  
    - Building comprehensive AI-powered applications  
    - Perfect for real-world scenarios, educational use, or intelligent chatbot development

---

### Enabling the Gemini Large Language Model

1. Visit [Google AI Studio](https://ai.google.dev/aistudio) and sign in

![AWS Bedrock](/images/2.prerequisite/2.6.png)

2. Go to the [Google Cloud Console](https://cloud.google.com/cloud-console), and click on `Console`

![AWS Bedrock](/images/2.prerequisite/2.7.png)

3. In the project selection dropdown, choose to create a new project

![Project Name](/images/2.prerequisite/2.8.png)

For the `Location`, select `No organization`.

![Project Name](/images/2.prerequisite/2.9.png)

Then click `Create`

4. Return to **Google AI Studio**. Click on `Get API Key`, then select `Create API Key`

![Project Name](/images/2.prerequisite/2.10.png)

5. Select the project you just created. Then proceed to create the Gemini API key.

![Project Name](/images/2.prerequisite/2.11.png)

6. Scroll down and you will see the **API Key** you just created. Be sure to keep this key secure.

![Project Name](/images/2.prerequisite/2.12.png)

{{% notice warning %}}
Be sure to keep your API keys secure, even if you are using a free billing plan.
{{% /notice %}}
