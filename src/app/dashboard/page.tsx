import Chat from "@/components/chat";
import SentimentAnalyzer from "@/components/SentimentAnalyzer";
import VoiceEmotion from "@/components/VoiceEmotion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
      <Chat/>
      
      {/* <VoiceEmotion />
      <SentimentAnalyzer /> */}
    </div>
  );
}
