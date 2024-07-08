from extracty import LLMExtractor
from dotenv import load_dotenv
import datetime
import os
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import TextFormatter
from openai import OpenAI
import dspy


load_dotenv()


class ContentUtils:
    def extract_blog(url):
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
            url=url,
            query="Retrieve the blog content in the given URL.",
            api_key=os.getenv("OPENAI_API_KEY"),
            fields=fields,
            gpt_model="gpt-4o",
        )

        data = extractor.extract()

        # format into string
        content = f"Title: {data.title}\nAuthor: {data.author}\nDate: {data.date}\nContent: {data.content}\nTags: {data.tags}\nNumber of Claps: {data.number_of_claps}\nNumber of Responses: {data.number_of_responses}"

        return content

    def extract_youtube(url):

        video_id = url.split("v=")[1]

        result = YouTubeTranscriptApi.get_transcript(video_id)

        formatter = TextFormatter()

        content = formatter.format_transcript(result)

        return content

    def generate_with_query(query):
        client = OpenAI()
        completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": query},
        ],
        )
        
        return completion.choices[0].message.content
        
        


