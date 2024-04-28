// use client; // Not required in TypeScript

import { useState, useRef, useEffect } from 'react';
import { blobToBase64 } from '../utils';
import { createMediaStream } from '../utils';

interface UseRecordVoiceProps {
  recording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  text: string;
}

type TextState = string;
type RecordingState = boolean;

export const useRecordVoice = (): UseRecordVoiceProps => {
  const [text, setText] = useState<TextState>("");
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recording, setRecording] = useState<RecordingState>(false);
  const isRecording = useRef<boolean>(false);
  const chunks = useRef<Blob[]>([]);

  const startRecording = () => {
    if (mediaRecorder) {
      isRecording.current = true;
      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      isRecording.current = false;
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const getText = async (base64data: string) => {
    try {
      const response = await fetch("/api/speechToText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audio: base64data,
        }),
      });

      if (!response.ok || !response.json) {
        console.error("Error fetching speech-to-text response");
        return;
      }

      const responseJson = await response.json();
      const { text } = responseJson;
      setText(text);
    } catch (error) {
      console.log(error);
    }
  };

  const initialMediaRecorder = (stream: MediaStream) => {
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.onstart = () => {
      createMediaStream(stream);
      chunks.current = [];
    };

    mediaRecorder.ondataavailable = (ev: BlobEvent) => {
      chunks.current.push(ev.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(chunks.current, { type: "audio/wav" });
      await blobToBase64(audioBlob, getText);
    };

    setMediaRecorder(mediaRecorder);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(initialMediaRecorder);
    }
  }, []);

  return { recording, startRecording, stopRecording, text };
};
