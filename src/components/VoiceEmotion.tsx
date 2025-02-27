"use client";
import { useState } from "react";
import { analyzeVoiceEmotion, generateSupportMessage } from "@/utils/voiceEmotion";

export default function VoiceEmotion() {
  const [emotion, setEmotion] = useState<string | null>(null);
  const [supportMessage, setSupportMessage] = useState<string | null>(null);

  const handleRecordVoice = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      let audioChunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

        // Send the recorded audio to Hugging Face for emotion detection
        const detectedEmotion = await analyzeVoiceEmotion(audioBlob);
        setEmotion(detectedEmotion);

        // Generate response
        const response = generateSupportMessage(detectedEmotion);
        setSupportMessage(response);
      };

      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 3000); // Record for 3 seconds
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4">Voice Emotion Analysis</h2>
      <button
        onClick={handleRecordVoice}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Start Talking
      </button>
      {emotion && (
        <p className="mt-4 text-lg font-bold">
          Detected Emotion: <span className="text-green-500">{emotion}</span>
        </p>
      )}
      {supportMessage && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          {supportMessage}
        </p>
      )}
    </div>
  );
}
