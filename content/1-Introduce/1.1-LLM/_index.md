---
title : "Theory of Large Language Models"
date : "2024-01-01"
weight : 1 
chapter : false
pre : " <b> 1.1 </b> "
---

Large Language Models, also known as LLMs, are extremely large **deep learning** models pre-trained on massive datasets. The core transformer is a set of **neural networks** with an encoder and a decoder capable of self-attention. The encoder and decoder extract meaning from a text sequence and understand the relationships between words and phrases in it.

The **Transformer** architecture is the foundational core of most current large language models (LLMs) such as GPT, BERT, or LLaMA. Transformers work based on the **self-attention** mechanism, allowing the model to understand and relate words in a sentence regardless of the distance between them. This architecture consists of many stacked layers, each comprising two main components: **multi-head self-attention** and **feed-forward neural networks**. Input data is encoded into vectors through embeddings, then passed through the Transformer layers to produce output as a sequence of vectors representing semantics. Transformers can be designed as encoder-only (e.g., BERT), decoder-only (e.g., GPT), or encoder-decoder (e.g., T5), depending on the model’s objective.

![Large language model](/images/1.introduce/1.0.png)

{{% notice info %}}
Large language models are generative models
{{% /notice %}}

LLMs are huge—extremely huge. They can consider billions of parameters and have a wide range of potential uses. Below are some examples:

- OpenAI's GPT-3 model has 175 billion parameters. Its cousin, ChatGPT, can identify patterns from data and generate natural, readable outputs. Although the size of Claude 2 is unknown, it can accept up to 100,000 tokens per prompt, meaning it can read hundreds of pages of technical documentation or even an entire book.
- AI21 Labs' Jurassic-1 model has 178 billion parameters and a token vocabulary of 250,000 components with similar conversational capabilities.
- Cohere's Command model offers similar capabilities and supports over 100 different languages.
- LightOn’s Paradigm platform provides foundation models with features claimed to outperform GPT-3. All of these LLMs come with APIs that allow developers to create unique generative AI applications.

### LLMs have many practical applications.

- **Ad Copywriting**  
In addition to GPT-3 and ChatGPT, Claude, Llama 2, Cohere Command, and Jurassic can all generate native ad copy. AI21's Wordspice suggests modifications to original sentences to improve style and tone.

- **Knowledge-based Q&A**  
Often referred to as knowledge-intensive natural language processing (KI-NLP), this technique refers to LLMs capable of answering specific questions based on information stored in digital repositories. One example is answering general knowledge questions in AI21 Studio’s playground.

- **Text Classification**  
LLMs can classify text with similar meanings or sentiments by clustering. Use cases include measuring customer sentiment, identifying relationships between texts, and document retrieval.

- **Code Generation**  
LLMs are proficient at generating code from natural language prompts. For example, Amazon CodeWhisperer and OpenAI’s Codex, used in GitHub Copilot, can write code in Python, JavaScript, Ruby, and other languages. Other use cases include generating SQL queries, writing shell commands, and designing websites. Learn more about AI code generation.

- **Text Generation**  
Similar to code generation, text generation can complete unfinished sentences, write product documentation, or, like Alexa Create, generate short children’s stories.
