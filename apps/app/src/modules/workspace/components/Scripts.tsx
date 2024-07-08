'use client';

import type { DragEndEvent } from '@dnd-kit/core';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';
import { useState } from 'react';
import { Button, Icons, useToast } from 'ui';
import type WaveSurfer from 'wavesurfer.js';
import WavesurferPlayer from '@wavesurfer/react';
import createSupabaseClientClient from '../../../../lib/supabase/client';
import Note from './Note';
import SortableScript from './SortableScript';

type VoiceTypes = 'Alloy' | 'Echo' | 'Fable' | 'Onyx' | 'Nova' | 'Shimmer';

type ScriptItem = {
  name: string;
  id: number;
  content: string;
  voice: VoiceTypes;
  audioUrl: string;
};

interface ScriptsProps {
  projectId: string;
  defaultItems?: ScriptItem[];
}

const Scripts: React.FC<ScriptsProps> = ({ projectId, defaultItems }) => {
  const { toast } = useToast();
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>('');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [items, setItems] = useState<ScriptItem[]>(
    defaultItems ? defaultItems : [],
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      setItems(prevItems => {
        const oldIndex = prevItems.findIndex(item => item.id === active.id);
        const newIndex = prevItems.findIndex(item => item.id === over.id);

        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  }

  function handleDelete(idToDelete: number) {
    setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
  }

  function handleCreate(idToCreate: number) {
    const indexToCreate = items.findIndex(item => item.id === idToCreate);
    const newItem = {
      name: "<Talker's Name>",
      id: Math.floor(Math.random() * 10000),
      content: '<Script>',
      voice: 'Alloy' as const,
      audioUrl: '',
    };

    setItems(prevItems => [
      ...prevItems.slice(0, indexToCreate + 1),
      newItem,
      ...prevItems.slice(indexToCreate + 1),
    ]);
  }

  function handleEdit(idToEdit: number, newItem: ScriptItem) {
    setItems(prevItems => {
      const indexToEdit = prevItems.findIndex(item => item.id === idToEdit);

      return [
        ...prevItems.slice(0, indexToEdit),
        newItem,
        ...prevItems.slice(indexToEdit + 1),
      ];
    });
  }

  async function handleConcatAudio() {
    const audioUrls = items
      .map(item => item.audioUrl)
      .filter(url => url !== '');
    const files = await Promise.all(
      audioUrls.map(async url => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], 'audio.wav');
      }),
    );

    const formDataToSend = new FormData();
    files.forEach((file, index) => {
      formDataToSend.append(`audioFiles`, file, `audio${index}.wav`);
    });

    const response = await fetch('/api/concat-audio', {
      method: 'POST',
      body: formDataToSend,
    });

    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const bufferData = Buffer.from(buffer);
    const url = URL.createObjectURL(
      new Blob([bufferData], { type: 'audio/wav' }),
    );
    setAudioUrl(url);
  }

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const handleSaveScript = async () => {
    const supabase = createSupabaseClientClient();
    const { data } = await supabase.auth.getSession();
    if (!data.session?.user) {
      return;
    }

    const itemsToSave = items.map(item => {
      return {
        ...item,
        audioUrl: '',
      };
    });
    const { error } = await supabase
      .from('project')
      .update({
        script: itemsToSave,
      })
      .eq('id', projectId)
      .select();

    if (error) {
      toast({
        title: 'Error!',
        description: 'Failed to save script.',
      });
      return;
    }

    toast({
      title: 'Saved!',
      description: 'Your script has been saved.',
    });
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className='bg-background fixed bottom-0 left-0 z-40 flex w-screen flex-row items-center justify-between border px-16 py-4 pr-36'>
        <h2 className='flex items-center gap-1 text-lg font-bold'>
          <Icons.logo />
          Your Scripts Here
        </h2>

        {audioUrl ? (
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
            url={audioUrl}
            // CanvasGradient
            waveColor='grey'
            width={400}
          />
        ) : (
          <Button onClick={handleConcatAudio} variant='outline'>
            Click to Concat the scripts
          </Button>
        )}
        <div className='flex flex-row items-center justify-center gap-2'>
          <button
            className='transition-all hover:scale-110'
            onClick={() => wavesurfer && wavesurfer.playPause()}
          >
            {isPlaying ? <Icons.Pause /> : <Icons.Play />}
          </button>
          <button
            className='transition-all hover:rotate-45'
            onClick={handleConcatAudio}
          >
            <Icons.RotateCw />
          </button>
          <button
            className='transition-all hover:scale-110'
            onClick={() => {
              const a = document.createElement('a');
              a.href = audioUrl;
              a.download = 'scripts.wav';
              a.click();
            }}
          >
            <Icons.Download />
          </button>
          <Note />
        </div>
      </div>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Button
          className='m-2'
          onClick={() => {
            handleCreate(0);
          }}
        >
          Add Script
        </Button>
        <Button className='m-2' onClick={handleSaveScript}>
          Save
        </Button>
        <div className='flex h-[60vh] flex-col gap-1 overflow-y-scroll pb-64'>
          {items.map(item => (
            <SortableScript
              item={item}
              key={item.id}
              onCreate={handleCreate}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Scripts;
