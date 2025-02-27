// "use client";
// import { useState } from "react";
// import { analyzeSentiment } from "@/utils/sentimentAnalysis";

// export default function SentimentAnalyzer() {
//   const [text, setText] = useState("");
//   const [sentiment, setSentiment] = useState<string | null>(null);

//   const handleAnalyze = async () => {
//     const result = await analyzeSentiment(text);
//     setSentiment(result);
//   };

//   return (
//     <div className="p-6 bg-white rounded-xl shadow-lg text-center">
//       <h2 className="text-xl font-semibold mb-4">Sentiment Analysis</h2>
//       <textarea
//         className="border rounded-md p-2 w-full"
//         rows={3}
//         placeholder="Type your thoughts..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={handleAnalyze}
//         className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Analyze
//       </button>
//       {sentiment && (
//         <p className="mt-4 text-lg font-bold">
//           Sentiment:{" "}
//           <span
//             className={
//               sentiment === "Negative"
//                 ? "text-red-500"
//                 : sentiment === "Positive"
//                 ? "text-green-500"
//                 : "text-gray-500"
//             }
//           >
//             {sentiment}
//           </span>
//         </p>
//       )}
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { analyzeSentiment, detectCrisis } from "@/utils/sentimentAnalysis";

export default function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState<string | null>(null);
  const [crisisMessage, setCrisisMessage] = useState<string | null>(null);

  const handleAnalyze = async () => {
    const result = await analyzeSentiment(text);
    setSentiment(result);

    // Check for crisis alert
    const crisisAlert = await detectCrisis(text);
    setCrisisMessage(crisisAlert);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4">Sentiment Analysis</h2>
      <textarea
        className="border rounded-md p-2 w-full"
        rows={3}
        placeholder="Type your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleAnalyze}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Analyze
      </button>
      {sentiment && (
        <p className="mt-4 text-lg font-bold">
          Sentiment:{" "}
          <span
            className={
              sentiment === "Negative"
                ? "text-red-500"
                : sentiment === "Positive"
                ? "text-green-500"
                : "text-gray-500"
            }
          >
            {sentiment}
          </span>
        </p>
      )}
      {crisisMessage && (
        <p className="mt-4 text-lg font-bold text-red-600">
          {crisisMessage}
        </p>
      )}
    </div>
  );
}
