'use client';
import React from 'react';
import Draggable from 'react-draggable';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'ui';

interface DraggableCardProps {
  title: string;
  description: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function DraggableCard({
  title,
  description,
  content,
  footer,
  ...props
}: DraggableCardProps) {
  return (
    <Draggable>
      <Card {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className='h-full'>{content}</CardContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </Draggable>
  );
}
