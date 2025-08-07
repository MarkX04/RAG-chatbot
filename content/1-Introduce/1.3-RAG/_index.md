---
title : "Theory of Retrieval-Augmented Generation"
date : "`r Sys.Date()`"
weight : 3 
chapter : false
pre : " <b> 1.3 </b> "
---

**Retrieval-Augmented Generation (RAG)** is the process of optimizing the output of a large language model by referencing an authoritative external knowledge base beyond its training data before generating a response. A large language model (LLM) is trained on massive datasets and uses billions of parameters to produce initial outputs for tasks such as question answering, language translation, and sentence completion. RAG extends the already powerful capabilities of an LLM to specific domains or an organization’s internal knowledge base — all without retraining the model. This is a cost-effective way to enhance LLM output so that it remains relevant, accurate, and useful in a wide range of contexts.

LLMs are a key artificial intelligence (AI) technology that powers intelligent chatbots and other natural language processing (NLP) applications. The goal is to create bots that can answer user questions in various contexts by cross-referencing authoritative sources of knowledge. Unfortunately, the nature of LLM technology introduces unpredictability in responses. Additionally, LLM training data is static and introduces a cutoff date for existing knowledge.

Common challenges with LLMs include:

- Providing misleading information when no correct answer is known.
- Returning outdated or generic information when users expect specific, current answers.
- Generating responses from non-authoritative sources.
- Producing inaccurate answers due to terminology confusion, where different training sources use the same terms to refer to different things.

A large language model can be thought of as an overly enthusiastic new employee who refuses to update information about current events but still answers every question with absolute confidence. Unfortunately, such behavior negatively impacts user trust — and is not something you want your chatbot to emulate!

### What are the benefits of Retrieval-Augmented Generation?

- **Cost-effective implementation**
- **Up-to-date information**
- **Improved user trust**
- **Greater developer control**

### How does Retrieval-Augmented Generation work?

Without RAG, an LLM takes the user's input and generates a response based on the information it was trained on — what it already "knows." With RAG, an information retrieval component is introduced to use the user’s input to fetch relevant information from a new data source. The user query and the retrieved information are both passed to the LLM. The LLM then uses this new knowledge along with its training data to generate a better response. The following sections provide an overview of the process.

- **Generate external data**
- **Retrieve relevant information**
- **Augment LLM prompts**
- **Update external data**

The following diagram illustrates the conceptual process of using RAG with an LLM.

![RAG architecture](/images/1.introduce/1.3.jpg)
