import dspy
from dotenv import load_dotenv
import os
from model import Blog, PodcastPreset, PodcastSetting, PodcastEpisode, MockBlog, VoiceEnum
load_dotenv()


class VoiceSignature(dspy.Signature):
    '''
    Decide the voice of the host based on the given setting. 
    Alloy is the default voice.
    Echo is the voice of a young male adult.
    Fable is the voice with a British accent.
    Onyx is the voice of a middle age male adult.
    Nova is the voice of a young female adult.
    Shimmer is the voice of a middle age female adult.
    Choose the voice that best fits the host's gender, age and persona.
    '''
    name: str = dspy.InputField(
        description="The name of the host.")
    persona: str = dspy.InputField(
        description="The persona of the host.")
    voice: VoiceEnum = dspy.OutputField(
        description="The generated voice of the host.")


class PodcastSettingSignature(dspy.Signature):
    "Generate a detailed podcast setting based on the given brief."
    preset: PodcastPreset = dspy.InputField(
        description="The preset of the podcast.")
    setting: PodcastSetting = dspy.OutputField(
        description="The generated podcast setting.")


class PodcastEpisodeSignature(dspy.Signature):
    "Generate a podcast episode based on the given setting. You can first draft a loosly structured episode with 50 dialogues then fill the indeviual dialogues with the actual content."
    setting: PodcastSetting = dspy.InputField(
        description="The setting of the podcast.")
    source: Blog = dspy.InputField(
        description="The source of dusscussion.")
    episode: PodcastEpisode = dspy.OutputField(
        description="The generated dialogues of the podcast episode.")


if __name__ == "__main__":
    gpt4o = dspy.OpenAI(model='gpt-4o', max_tokens=4000)
    dspy.configure(lm=gpt4o)
    settingPredictor = dspy.TypedChainOfThought(PodcastSettingSignature)
    setting: PodcastSetting = settingPredictor(preset=PodcastPreset(num_dialogues=50, num_agents=3, show_title="Life with Ming",
                                                                    brief="A podcast about the life of a young adult named Ming.")).setting
    settingJSON = setting.model_dump_json()
    with open(os.path.join(os.path.dirname(__file__), "mockPodcastSetting.json"), "w") as f:
        f.write(settingJSON)

    episodePredictor = dspy.TypedChainOfThought(PodcastEpisodeSignature)
    episode: PodcastEpisode = episodePredictor(
        setting=setting, source=MockBlog()).episode

    episodeJSON = episode.model_dump_json()

    with open(os.path.join(os.path.dirname(__file__), "mockPodcastEpisode.json"), "w") as f:
        f.write(episodeJSON)
