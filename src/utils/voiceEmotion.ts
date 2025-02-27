
// Hugging Face API Key (store securely in .env.local)
const HF_API_KEY = process.env.NEXT_PUBLIC_HF_API_KEY;
// const HF_MODEL_URL = "https://api-inference.huggingface.co/models/superb/wav2vec2-large-xlsr-53";
const HF_MODEL_URL = "https://api-inference.huggingface.co/models/audeering/wav2vec2-large-robust-12-ft-emotion-msp-dim";


// Function to send audio data to Hugging Face API
export async function analyzeVoiceEmotion(audioBlob: Blob) {
  if (!HF_API_KEY) {
    console.error("Hugging Face API key is missing!");
    return "neutral";
  }

  const formData = new FormData();
  formData.append("file", audioBlob);

  const response = await fetch(HF_MODEL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_KEY}`,
    },
    body: formData,
  });

  const result = await response.json();
  console.log("Emotion Detection Result:", result);

  // Extract detected emotion
  return result[0]?.label || "neutral";
}

// Generate mental support message based on detected emotion
export function generateSupportMessage(emotion: string) {
  switch (emotion) {
    case "happy":
      return "I'm so glad you're feeling good! Keep smiling 😊";
    case "sad":
      return "I'm here for you. You are not alone 💙";
    case "angry":
      return "I understand your frustration. Try taking a deep breath and relaxing ✨";
    case "neutral":
      return "How can I support you today? 💙";
    default:
      return "I'm here to listen. Let me know how you're feeling.";
  }
}
