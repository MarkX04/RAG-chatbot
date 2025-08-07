---
title : "Theory of Embeddings for Storage"
date : "`r Sys.Date()`"
weight : 2 
chapter : false
pre : " <b> 1.2 </b> "
---

**Embeddings** are numerical representations of real-world objects that machine learning (ML) and artificial intelligence (AI) systems use to understand complex knowledge domains like humans do. For example, computational algorithms understand that the difference between 2 and 3 is 1, showing a closer relationship between 2 and 3 than between 2 and 100. However, real-world data involves more complex relationships. For instance, bird nests and lion dens are analogous pairs, while day-night are opposites. Embeddings transform real-world objects into complex mathematical representations that capture the inherent attributes and relationships in real-world data. The entire process is automated, with AI systems generating embeddings during training and using them when needed to perform new tasks.

Embeddings allow deep learning models to understand real-world data domains more efficiently. They simplify how real-world data is represented while preserving semantic and syntactic relationships. This enables ML algorithms to extract and process complex data types and powers advanced AI applications. The following sections describe several key aspects:

- **Dimensionality reduction**
- **Training large language models**
- **Building creative applications**

Embeddings enable new deep learning and AI applications. Different embedding techniques used in neural network architectures support the development, training, and deployment of accurate AI models across various fields and use cases. For example:

- With image embedding technology, engineers can build high-accuracy computer vision applications for object detection, image recognition, and other vision-related tasks.
- With word embeddings, natural language processing software can better understand the context and relationships between words.
- Graph embeddings extract and classify relevant information from connected nodes to support network analysis.

Computer vision models, **AI chatbots**, and AI recommendation systems all use embeddings to perform complex tasks that mimic human intelligence.

![Visualize embedding](/images/1.introduce/1.1.png)

Data embeddings transform raw data into continuous values that ML models can interpret. Typically, ML models use **one-hot encoding** to map categorical variables into learnable forms. This encoding method splits each category into rows and columns and assigns them binary values. Consider the following produce categories and their prices.

One-hot encoding expands values into 0s and 1s without providing information that helps the model relate different objects. For example, the model cannot detect similarities between apples and oranges, even though they are both fruits, nor can it distinguish between oranges and carrots as fruit and vegetables. As the number of categories increases, one-hot encoding results in sparse variables with many empty values, consuming a lot of memory space.

Embeddings vectorize objects into a lower-dimensional space by representing similarities between objects as numerical values. Neural network embeddings ensure dimensionality remains manageable even with extensive input features. Input features are the attributes of specific objects that the ML algorithm is tasked with analyzing. Dimensionality reduction allows embeddings to retain the information that ML models use to identify similarities and differences from input data. Data scientists can also visualize embeddings in two-dimensional space to better understand the relationships between distributed objects.

![Convert text to embedding vector](/images/1.introduce/1.2.png)

**Amazon Bedrock** is a fully managed service that offers a variety of high-performing foundation models (FMs) from leading AI companies, along with a broad set of features for building generative AI applications. **Amazon Nova** is the new generation of state-of-the-art (SOTA) foundation models, offering advanced intelligence and industry-leading price/performance. These are powerful, versatile models designed to support a wide range of use cases. You can use them out-of-the-box or customize them with your own data.

**Titan Embeddings** is a machine learning (ML) foundation model that converts text into numerical representations. The Titan Embeddings model supports text retrieval, clustering, and semantic comparison. The input text limit is 8K tokens, and the maximum output vector length is 1536.

ML teams can also use **Amazon SageMaker** to generate embeddings. Amazon SageMaker is a hub where you can build, train, and deploy ML models in a secure and scalable environment. It provides an embedding technique called Object2Vec, allowing engineers to vectorize multi-dimensional data into a multi-dimensional space. You can use the learned embeddings to compute object relationships for downstream tasks such as classification and regression.
