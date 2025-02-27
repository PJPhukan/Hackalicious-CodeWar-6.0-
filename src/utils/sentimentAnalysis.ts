// import * as toxicity from "@tensorflow-models/toxicity";

// // Set threshold (0.9 means high confidence)
// const threshold = 0.9;

// // Labels to detect specific types of sentiment
// const toxicityLabels = ["identity_attack", "insult", "threat", "toxicity"];

// // Load the model with labels
// export async function loadSentimentModel() {
//   return await toxicity.load(threshold, toxicityLabels);
// }

// export async function analyzeSentiment(text: string) {
//   const model = await loadSentimentModel();
//   const predictions = await model.classify([text]);

//   let sentiment = "Neutral";
//   let isNegative = false;

//   predictions.forEach((prediction) => {
//     if (prediction.results[0].match) {
//       isNegative = true;
//     }
//   });

//   if (isNegative) {
//     sentiment = "Negative";
//   } else if (text.includes("happy") || text.includes("great")) {
//     sentiment = "Positive";
//   }

//   return sentiment;
// }




import * as toxicity from "@tensorflow-models/toxicity";

// Set threshold (0.9 means high confidence)
const threshold = 0.9;

// Labels to detect specific types of sentiment
const toxicityLabels = ["identity_attack", "insult", "threat", "toxicity"];

// Load the model with labels
export async function loadSentimentModel() {
  return await toxicity.load(threshold, toxicityLabels);
}

// Analyze sentiment of input text
export async function analyzeSentiment(text: string) {
  const model = await loadSentimentModel();
  const predictions = await model.classify([text]);

  let sentiment = "Neutral";
  let isNegative = false;

  predictions.forEach((prediction) => {
    if (prediction.results[0].match) {
      isNegative = true;
    }
  });

  if (isNegative) {
    sentiment = "Negative";
  } else if (text.includes("happy") || text.includes("great")) {
    sentiment = "Positive";
  }

  return sentiment;
}

// Crisis Detection Function
export async function detectCrisis(text: string) {
  const sentiment = await analyzeSentiment(text);
  if (sentiment === "Negative") {
    return "⚠️ Crisis Alert! Please reach out for help.";
  }
  return "You're doing okay, keep going!";
}
