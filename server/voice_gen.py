from dotenv import load_dotenv
from openai import OpenAI
from model import PodcastSetting, PodcastEpisode, VoiceEnum
from enum import Enum
from dspy_utils import VoiceSignature
import dspy
import os
load_dotenv()

client = OpenAI()

gpt4o = dspy.OpenAI(model='gpt-4o', max_tokens=2000)
dspy.configure(lm=gpt4o)


def decide_voice(name: str, ps: PodcastSetting) -> VoiceEnum:
    voice_predictor = dspy.TypedPredictor(VoiceSignature)
    persona = list(filter(lambda x: x.name == name, ps.hosts))[0].persona
    voice: VoiceEnum = voice_predictor(name=name, persona=persona).voice
    return voice


def generate_voice(ps: PodcastSetting, pe: PodcastEpisode, debug=False, folder="audio") -> None:
    name_to_voice = {}
    for idx, d in enumerate(pe.dialogues):
        if d.speaker in name_to_voice:
            voice = name_to_voice[d.speaker]
        else:
            voice = decide_voice(d.speaker, ps)
            name_to_voice[d.speaker] = voice
        audio_file = client.audio.speech.create(
            input=d.content,
            model="tts-1-hd",
            voice=voice.value,
            response_format="mp3",
        )
        if debug:
            print(f"Generated audio for dialogue {idx+1}")
        audio_file.write_to_file(os.path.join(folder, f"dialogue_{idx+1}.mp3"))


if __name__ == "__main__":
    ps_str = open(os.path.join(
        os.path.dirname(__file__), "mockPodcastSetting.json")).read()
    pe_str = open(os.path.join(
        os.path.dirname(__file__), "mockPodcastEpisode.json")).read()
    ps = PodcastSetting.model_validate_json(ps_str)
    pe = PodcastEpisode.model_validate_json(pe_str)
    generate_voice(ps, pe, debug=True, folder=os.path.join(
        os.path.dirname(__file__), "audio"))
    print("Voice generation completed successfully")
    print("Check the audio folder for generated audio files")
    print("Exiting...")
