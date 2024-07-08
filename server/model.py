import datetime
from enum import Enum, StrEnum
from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    author: str
    date: datetime.date
    content: str
    tags: list[str]

    def __str__(self) -> str:
        return f"\nBlog\ntitle:{self.title}\nauthor:{self.author}\ndate:{self.date}\ntags:{self.tags}\ncontent:{self.content}"


class PodcastPreset(BaseModel):
    num_dialogues: int
    num_agents: int
    show_title: str
    brief: str


class Role(str, Enum):
    host = "host"
    guest = "guest"


class VoiceEnum(str, Enum):
    alloy = "alloy"
    echo = "echo"
    fable = "fable"
    onyx = "onyx"
    nova = "nova"
    shimmer = "shimmer"


class HostEnum(StrEnum):
    # TODO: Dynamically generate this enum from the hosts in the podcast setting
    yym = "Ming"
    debbie = "Debbie"
    gay = "Gary"


class Host(BaseModel):
    """
    name: The name of the host
    role: The role of the host
    persona: The persona of the host
    """
    name: HostEnum
    role: Role
    persona: str


class PodcastSetting(BaseModel):
    """
    The setting of a podcast episode
    num_dialogues: The number of dialogues in the episode
    num_agents: The number of agents in the episode
    title: The title of the podcast
    brief: The brief of the podcast
    description: The description of the podcast
    hosts: The hosts of the podcast
    """
    num_dialogues: int
    num_agents: int
    title: str
    brief: str
    description: str
    hosts: list[Host]


class Dialogue(BaseModel):
    """
    The dialogue of a podcast episode
    speaker: The speaker of the dialogue
    content: The content of the dialogue
    index: The index of the dialogue
    """
    speaker: HostEnum
    content: str
    index: int


class PodcastEpisode(BaseModel):
    """
    The dialogues of a podcast episode
    dialogues: The dialogues of the episode
    """
    dialogues: list[Dialogue]


class MockBlog(Blog):
    title: str = "To those who disappears when things get tough"
    author: str = "R"
    date: datetime.date = datetime.date.today()
    content: str = """
    I never liked being alone, but for some reason I’m always on my own; not because I’m a loner myself, but because I choose to self-isolate when everything just feels like a lot to handle.
    Coming from a person whose love language includes quality time, I find it difficult to ignore the urge to just disappear after every minor inconvenience in my life. I crave love and attention yet I distance myself when I’m having a hard time.
    Most of the time, people who are a great listener are also the ones who doesn’t have anyone to turn to when life’s being a bummer to them. They tend to be there for everyone else and yet are always absent when it comes to their own needs.
    But they’re also the ones who pushes people away because to them, their own problems are a burden to themselves, especially to others. And so they choose to feel it alone.
    These kind of people are the most dangerous as they’re very good at pretending; pretending to be fine, pretending to have things under control, when in reality they’re struggling to even get out of bed.
    I’m still learning to not vanish but I do admit it’s not an easy process. I still have the desire to be alone when I’m upset. But oh it must be nice to be heard, without having to say a word.
    Nonetheless people are not mind readers, they can’t scan our thoughts and find out what has been bothering us.
    HIGHLIGHT[“ Communication is the key “ they say. But I think communication AND comprehension are both essential towards understanding]
    They won’t know if we don’t tell them. Of course, who doesn’t want to be understood right? However being the understanding one is just as important as being understood.
    Alternate our perception of having to make people guess what we’re currently going through.
    From time to time, all we want is to be heard and understood, so consider yourself lucky if you have someone that chooses to stay, even if you walk away. Let yourself be heard this time, instead of constantly being the listener.
    Life’s a pain in the butt, but we don’t always have to go through it alone. Though I do understand sometimes all we have is ourselves, and God.
    HIGHLIGHT[So to the the people who disappears as their coping mechanism, give yourself a chance to be understood.]
    Be nice to yourself, speak kind words to yourself, forgive yourself, as you would to others. Give yourself love as much as you give love to others. Your own needs are priorities as well.
    -R.D
    """
    tags: list[str] = ["life", "philosophy"]
