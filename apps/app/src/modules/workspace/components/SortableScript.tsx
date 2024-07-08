'use client';
import type { FC } from 'react';
import React, { useState } from 'react';
import {
  Card,
  Icons,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Textarea,
  DialogClose,
  Button,
  Label,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useToast,
} from 'ui';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type WaveSurfer from 'wavesurfer.js';
import WavesurferPlayer from '@wavesurfer/react';

type VoiceTypes = 'Alloy' | 'Echo' | 'Fable' | 'Onyx' | 'Nova' | 'Shimmer';

type ScriptItem = {
  name: string;
  id: number;
  content: string;
  voice: VoiceTypes;
  audioUrl: string;
};

const voiceTypes: VoiceTypes[] = [
  'Alloy',
  'Echo',
  'Fable',
  'Onyx',
  'Nova',
  'Shimmer',
];

interface SortableScriptCardProps {
  item: ScriptItem;
  onDelete: (id: number) => void;
  onCreate: (id: number) => void;
  onEdit: (id: number, item: ScriptItem) => void;
}

const SortableScript: FC<SortableScriptCardProps> = ({
  item,
  onDelete,
  onCreate,
  onEdit,
}) => {
  const { toast } = useToast();
  const [value, setValue] = useState<ScriptItem>(item);
  const [voice, setVoice] = useState(item.voice);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const uniqueId = item.id;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: uniqueId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const handleGenerateAudio = async () => {
    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice: voice.toLowerCase(),
        text: value.content,
      }),
    });

    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const bufferData = Buffer.from(buffer);
    const url = URL.createObjectURL(
      new Blob([bufferData], { type: 'audio/wav' }),
    );

    const newValue = { ...value, audioUrl: url };
    setValue(newValue);
    onEdit(uniqueId, newValue);
  };

  const isCursorGrabbing = attributes['aria-pressed'];

  return (
    <div key={uniqueId} ref={setNodeRef} style={style}>
      <Card className='group relative flex justify-between gap-5 p-4'>
        <div>
          <div className='flex items-center gap-1'>
            <Popover>
              <PopoverTrigger
                className={`h-4 w-4 rounded-full ${voiceTypeToColor(voice)}`}
              >
                {' '}
              </PopoverTrigger>
              <PopoverContent className='flex flex-wrap gap-2'>
                {voiceTypes.map(voiceType => (
                  <Button
                    className='flex items-center gap-2'
                    key={voiceType}
                    onClick={() => {
                      setVoice(voiceType);
                      onEdit(uniqueId, { ...value, voice: voiceType });
                    }}
                    variant={voice === voiceType ? 'secondary' : 'outline'}
                  >
                    <div
                      className={`h-4 w-4 rounded-full ${voiceTypeToColor(
                        voiceType,
                      )}`}
                    />
                    {voiceType}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>

            <h2>{item.name}</h2>
          </div>

          <h3 className='text-muted-foreground text-sm'>{item.content}</h3>
        </div>
        <div className='flex flex-col'>
          {item.audioUrl.length > 0 ? (
            <>
              <WavesurferPlayer
                height={100}
                onPause={() => {
                  setIsPlaying(false);
                }}
                onPlay={() => {
                  setIsPlaying(true);
                }}
                onReady={onReady}
                progressColor='black'
                url={value.audioUrl}
                // CanvasGradient
                waveColor='grey'
                width={200}
              />
              <div className='flex w-full flex-row items-center justify-center gap-2'>
                <button onClick={() => wavesurfer && wavesurfer.playPause()}>
                  {isPlaying ? <Icons.Pause /> : <Icons.Play />}
                </button>
                <button
                  className='transition-all hover:rotate-45'
                  onClick={handleGenerateAudio}
                >
                  <Icons.RotateCw />
                </button>
                <button
                  className='transition-all hover:scale-110'
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = value.audioUrl;
                    a.download = 'scripts.wav';
                    a.click();
                  }}
                >
                  <Icons.Download />
                </button>
              </div>
            </>
          ) : (
            <Button onClick={handleGenerateAudio} variant='outline'>
              No audio now, click to generate
            </Button>
          )}
        </div>

        <div className='flex items-center justify-center gap-4'>
          <button
            className='invisible group-hover:visible'
            onClick={() => {
              onDelete(uniqueId);
            }}
          >
            <svg
              className='text-red-500'
              fill='none'
              height='15'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          </button>
          <button
            className='invisible group-hover:visible'
            onClick={() => {
              onCreate(uniqueId);
            }}
          >
            <svg
              className='text-blue-500'
              fill='none'
              height='15'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='15'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 6v12' />
              <path d='M6 12h12' />
            </svg>
          </button>

          <Dialog>
            <DialogTrigger>
              {' '}
              <Icons.Edit size={16} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit this script</DialogTitle>
                <DialogDescription>
                  Edit the script for this item
                </DialogDescription>
              </DialogHeader>
              <div className='flex flex-col gap-2'>
                <div>
                  <Label>Name</Label>
                  <Input
                    onChange={e => {
                      setValue({ ...value, name: e.target.value });
                    }}
                    value={value.name}
                  />
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea
                    onChange={e => {
                      setValue({ ...value, content: e.target.value });
                    }}
                    value={value.content}
                  />
                </div>
                <div>
                  <Label>Audio</Label>
                  <Input
                    accept='audio/*'
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file && file.type.startsWith('audio/')) {
                        const url = URL.createObjectURL(file);
                        setValue({ ...value, audioUrl: url });
                        toast({
                          title: 'Success',
                          description: 'File uploaded',
                        });
                      } else {
                        toast({
                          title: 'Error',
                          description: 'Please select an audio file',
                        });
                      }
                    }}
                    type='file'
                  />
                </div>
              </div>
              <DialogClose className='flex justify-center gap-2'>
                <Button variant='outline'>Close</Button>
                <Button
                  onClick={() => {
                    onEdit(uniqueId, value);
                  }}
                >
                  Save
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>

          <button
            {...attributes}
            {...listeners}
            aria-describedby={`DndContext-${uniqueId}`}
            className={` ${
              isCursorGrabbing ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <svg viewBox='0 0 20 20' width='15'>
              <path
                d='M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SortableScript;

function voiceTypeToColor(voice: VoiceTypes) {
  switch (voice) {
    case 'Alloy':
      return 'bg-red-500';
    case 'Echo':
      return 'bg-blue-500';
    case 'Fable':
      return 'bg-green-500';
    case 'Onyx':
      return 'bg-yellow-500';
    case 'Nova':
      return 'bg-purple-500';
    case 'Shimmer':
      return 'bg-indigo-500';
  }
}
