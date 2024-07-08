import requests

# URL of the Flask endpoint
url = 'http://localhost:5000/concat-audio'

# Replace these file paths with the paths to your actual audio files
files = [
    ('audio_files', ('audio1.wav', open('output.wav', 'rb'), 'audio/wav')),
    ('audio_files', ('audio2.wav', open('output2.wav', 'rb'), 'audio/wav'))
]

response = requests.post(url, files=files)

if response.status_code == 200:
    # Assuming you want to save the concatenated audio file
    with open('combined_audio.wav', 'wb') as f:
        f.write(response.content)
    print("Concatenated audio saved as 'combined_audio.wav'")
else:
    print(f"Error: {response.status_code} - {response.text}")