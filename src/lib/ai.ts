import { GoogleGenerativeAI } from "@google/generative-ai";

export async function analyze(question: string, sentiment: string) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI as string);
    const ANALYSIS_PROMPT = `You are a sentiment analyzer assistant that will only response in JSON (without additional characters or backticks), You will analyze the sentiment based on the question provided and rate it from 1-10 and also get the negative and positive feedbacks from the response.

    Sample JSON OUTPUT:
    {
      "rating": 8,
      "feedbacks": [
        "positive": [],
        "negative": []
      ]
    }
    
    The Question:
    "${question}"
    
    The Response:
    "${sentiment}"
    
    The JSON (without additional characters or backticks):`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(ANALYSIS_PROMPT);
    const response = await result.response;
    return { data: JSON.parse(response.text()) };
  } catch (error) {
    console.log(error);
    return { data: "Ulol" };
  }
}
