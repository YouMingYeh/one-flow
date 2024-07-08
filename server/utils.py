from model import Blog, MockBlog
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI()


def direct_generate_script(blog: Blog):
    prompt = "Generate a podcast script with 50 dialogues based on the following blog:\n\n" + \
        str(blog) + "\n\nScript"
    respond = client.chat.completions.create(messages=[
        {
            "role": "user",
            "content": prompt,
        }
    ],
        model="gpt-4o",max_tokens=2000)
    return respond.choices[0].message.content


if __name__ == "__main__":
    blog = MockBlog()
    print(direct_generate_script(blog))
