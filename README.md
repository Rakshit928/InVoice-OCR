**InVoice OCR: A RAG-Based Invoice Processing Application**

I developed InVoice OCR, an advanced application designed to extract key information from invoice images and respond to client queries using cutting-edge AI technology. The system leverages a Retrieval-Augmented Generation (RAG) model and the Llama2 API, integrated into a Flask web app, to deliver accurate and contextual data extraction.

### How It Works:

**Flask Web App Interface:**  
I created a user-friendly Flask web app that allows users to easily upload their invoice images. The interface supports both drag-and-drop functionality and a traditional file upload button.

**Optical Character Recognition (OCR):**  
After the user uploads an invoice image, the system processes it using an OCR engine, converting the image text into a machine-readable format.

**Large Language Model (LLM) Integration with RAG:**  
I integrated the extracted text into a RAG system that utilizes the Llama2 API. This setup not only extracts the text but also enables the system to understand the context and structure of the invoice, allowing it to answer specific client queries related to the invoice.

**POST Request to Postman:**  
To validate and test the system’s functionality, I sent a POST request to the Postman app with the extracted text and a client query. The system, leveraging the Llama2 API, processed the query and returned the answer, demonstrating the model's ability to handle real-time inquiries based on invoice data.

**Information Extraction:**  
With the Llama2 API, the system identifies and extracts crucial invoice fields, such as:
- Merchant name
- Invoice date
- Item descriptions
- Quantities
- Prices
- Total amount

**Query Answering and Data Storage:**  
In addition to extracting data, the system answers specific queries about the invoice content. I designed it to store all extracted information and related query responses in a ChromaDB directory named "db" for easy retrieval and future reference.

**Result Presentation:**  
The system presents the processed and extracted information to the user in a clear, organized format, such as a table summarizing the invoice details or a downloadable file.

### Key Benefits:

**Enhanced Accuracy:**  
By integrating the RAG system with Llama2, I ensured improved accuracy in data extraction, accommodating variations in invoice formats and layouts.

**Adaptability:**  
The model adapts to new invoice formats and query types over time, ensuring the application remains effective as client needs evolve.

**Contextual Understanding:**  
The LLM’s ability to understand the relationships between different data points enhances the quality of the extracted information and the accuracy of responses to client queries.

**Streamlined Development and User Experience:**  
By using Flask, I streamlined the development process and created a seamless, intuitive user experience for uploading invoices and accessing extracted data.

In summary, I combined the powerful capabilities of a RAG system with the Llama2 API, integrated into a Flask web app, to create InVoice OCR—a robust and adaptable solution for invoice data extraction and query answering. The system’s effectiveness was validated by successfully sending POST requests to Postman and receiving accurate answers based on the extracted invoice data.
