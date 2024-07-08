from io import BytesIO
from flask import Flask, request, jsonify, send_file, Response
from dspy_utils import PodcastSettingSignature, PodcastEpisodeSignature
from content_utils import ContentUtils
from flask_cors import CORS
from tts_utils import TTSUtils
from pydub import AudioSegment



app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000", "http://tovoice.co"])

@app.route('/', methods=['GET'])
def index():
    return jsonify('Welcome to the server!')

@app.route('/health', methods=['GET'])
def health():
    return jsonify('Server is running...')

@app.route('/podcast/setting', methods=['POST'])
def generate_setting():
    preset = request.json['preset']
    setting = PodcastSettingSignature(preset=preset).setting
    return jsonify(setting)

@app.route('/podcast/episode', methods=['POST'])
def generate_episode():
    setting = request.json['setting']
    source = request.json['source']
    episode = PodcastEpisodeSignature(setting=setting, source=source).episode
    return jsonify(episode)

@app.route('/extract/blog', methods=['POST'])
def extract_blog():
    url = request.json['url']
    data = ContentUtils.extract_blog(url)
    return jsonify(data)

@app.route('/extract/youtube', methods=['POST'])
def extract_youtube():
    url = request.json['url']
    data = ContentUtils.extract_youtube(url)
    return jsonify(data)

@app.route('/generate', methods=['POST'])
def generate_with_query():
    query = request.json['query']
    data = ContentUtils.generate_with_query(query)
    return jsonify(data)

@app.route('/tts', methods=['POST'])
def tts():
    try:
        # Get the input text from the request
        data = request.json
        input_text = data.get('text')
        voice = data.get('voice', 'alloy')  # Default to 'alloy' if no voice specified
        tts_utils = TTSUtils()
        
        if not input_text:
            return jsonify({'error': 'No text provided'}), 400
        
        # Generate the audio using TTSUtils
        audio_data = tts_utils.generate_audio(input_text, voice)
        
        audio_data.seek(0)
        
        # Send the file as a response
        return Response(audio_data, mimetype='audio/wav', headers={"Content-Disposition": "attachment;filename=output.wav"})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/concat-audio', methods=['POST'])
def concat_audio():
    audio_files = request.files.getlist('audioFiles')
    print(audio_files)
    if not audio_files:
        return jsonify({'error': 'No audio files provided'}), 400

    combined = AudioSegment.empty()

    for file in audio_files:
        audio_segment = AudioSegment.from_wav(file)
        # wait for 0.3 seconds between each audio file
        combined += AudioSegment.silent(duration=300)
        combined += audio_segment

    output = BytesIO()
    combined.export(output, format='wav')
    output.seek(0)

    return send_file(output, mimetype='audio/wav', as_attachment=True, download_name='combined_audio.wav')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)