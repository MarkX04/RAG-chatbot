---
title : "PDF Text Highlighting Algorithm using PyMuPDF Library"
date : "2024-01-01"
weight : 4 
chapter : false
pre : " <b> 1.4 </b> "
---

## Introduction

When working with PDF documents in Python, highlighting text is a common operation — especially in applications involving information extraction, marking important data, or displaying search results. In this article, we’ll explore how to highlight text in a PDF file using the [PyMuPDF (fitz)](https://pymupdf.readthedocs.io/) library.

## How to Highlight Text in PDF with PyMuPDF

### Find text positions using `.search_for()`

First, you need to open the PDF document and find the text fragments to highlight using the `.search_for()` function of a `Page` object. This function returns a list of `Rect` objects corresponding to the positions of the found text.

```python
import fitz  # PyMuPDF

# Open the PDF file
doc = fitz.open("example.pdf")

# Iterate through each page
for page in doc:
    # Search for the positions matching the search string
    text_instances = page.search_for("highlight me")

    # Highlight each found region
    for inst in text_instances:
        highlight = page.add_highlight_annot(inst)

# Save the result
doc.save("highlighted.pdf", garbage=4, deflate=True)
```

{{% notice tip %}}
Large language models can return answers in a JSON format.
{{% /notice %}}

Example:
```
[
  {{ "chunk_id": ..., "highlight_text": "..." }},
  ...
]
```

{{% notice tip %}}
Based on this capability, when sending a prompt to any large language model, you can ask it to return its answer along with a JSON format for the text that should be highlighted. This means the highlight functionality heavily depends on the language model's output.
{{% /notice %}}

{{% notice warning %}}
However, the nature of large language models is generative. They do not always guarantee the exact output format or text (e.g., in this application, they might return text that differs slightly from the exact original text in the PDF). Since .search_for() requires an exact match in characters and formatting, relying solely on the language model means the highlighting will only work for a subset of prompts — not consistently.
{{% /notice %}}

+ **One solution** to this issue is to write an algorithm that handles cases where the language model returns slightly altered text compared to the original in the PDF.

### Solution: Fuzzy Matching for Inexact Highlighting

We will use a **fuzzy matching algorithm** to find approximate text matches on a PDF page, then create highlights for the matched regions.

### `partial_highlight()` Algorithm

Below is the `partial_highlight()` function, which helps find approximate text and apply highlights, even when exact matches aren’t found:

```python
def partial_highlight(pdf_path, output_path, text_to_highlight, page_number, file_exist, threshold=90):
    doc = fitz.open(pdf_path)
    page = doc[page_number]
    page_text = page.get_text()

    # Clean the input text
    target_text = text_to_highlight.replace("\\n", "\n").strip()

    # Find approximate matches using fuzzy matching
    spans = find_spans_fuzzy(page, target_text, threshold)

    if not spans:
        print("--------------Failed to find highlight partial!")
        return
    else:
        for span in spans:
            highlight = page.add_highlight_annot(span)
            highlight.update()

    print("------------------Partial highlight checking---------------")

    # Save the PDF to disk
    if file_exist:
        temp_output = output_path + ".temp.pdf"
        doc.save(temp_output, garbage=4, deflate=True, clean=True)
        doc.close()
        shutil.move(temp_output, output_path)
    else:
        doc.save(output_path, garbage=4, deflate=True, clean=True)
        doc.close()
```

### Helper Function: `find_spans_fuzzy()`

This function loops through all words on a PDF page and performs **fuzzy matching** using a sliding window approach to locate regions with similar text:

```python
from fuzzywuzzy import fuzz

def find_spans_fuzzy(page, target, threshold=90, buffer=10):
    spans = []
    words = page.get_text("words")  # Each word is (x0, y0, x1, y1, word, block_no, line_no, word_no)
    words.sort(key=lambda w: (w[1], w[0]))  # Sort by position: top-to-bottom, left-to-right

    word_texts = [w[4] for w in words]
    target_len = len(target.split())
    max_window = min(len(words), target_len + buffer)

    for i in range(len(words) - max_window + 1):
        for window in range(target_len, max_window + 1):
            window_words = word_texts[i:i+window]
            window_text = " ".join(window_words)
            score = fuzz.partial_ratio(window_text, target)
            if score >= threshold:
                rects = [fitz.Rect(w[:4]) for w in words[i:i+window]]
                span = rects[0]
                for r in rects[1:]:
                    span |= r  # union all rectangles
                spans.append(span)
                break  # Stop checking longer windows at this position once a match is found

    return spans
```