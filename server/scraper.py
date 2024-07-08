from extracty import LLMExtractor
# dotenv
from dotenv import load_dotenv
import datetime
import os

load_dotenv()


fields = {
    "title": str,
    "author": str,
    "date": datetime.date,
    "content": str,
    "tags": list[str],
    "number_of_claps": int,
    "number_of_responses": int,
}

extractor = LLMExtractor(
    url="https://medium.com/gitconnected/how-to-use-chatgpt-in-daily-life-4688f7afb930",
    query="What is the blog in the given URL?",
    api_key=os.getenv("OPENAI_API_KEY"),
    fields=fields,
    gpt_model="gpt-4o",
)

data = extractor.extract()

print(data.model_dump_json())