'use client'

import * as React from 'react'

import { IconMicrophone } from '@/components/ui/icons'

const Microphone = ({
  startRecording,
  stopRecording,
  text,
  isRecording,
  setIsRecording
}: {
  startRecording: () => void
  stopRecording: () => void
  text: string
  isRecording: boolean
  setIsRecording: any
}) => {
  const handleStartRecording = () => {
    if(isRecording) return;
    setIsRecording(true)
    startRecording()
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    stopRecording()
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onMouseDown={handleStartRecording}
        onMouseUp={handleStopRecording}
        onTouchStart={handleStartRecording}
        onTouchEnd={handleStopRecording}
        className="border-none bg-transparent w-10 pt-2"
      >
        <IconMicrophone isRecording={isRecording} />
      </button>
      <p className='h-5'>{isRecording ? 'Recording started' : ""}</p>
    </div>
  )
}

export default Microphone
