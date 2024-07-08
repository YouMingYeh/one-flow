from pathlib import Path
from openai import OpenAI
from dotenv import load_dotenv
import io
import os

load_dotenv()

class TTSUtils:
    def generate_audio(self, input_text: str, voice: str):
        client = OpenAI()
        
        response = client.audio.speech.create(
            model="tts-1",
            voice=voice,
            input=input_text,
            response_format="wav"
        )
        
        # Create a BytesIO object to hold the audio data
        audio_data = io.BytesIO()
        
        # Write the streamed response to the BytesIO object
        for data in response.iter_bytes():
            audio_data.write(data)
        
        # Seek to the beginning of the BytesIO object
        audio_data.seek(0)
        
        return audio_data