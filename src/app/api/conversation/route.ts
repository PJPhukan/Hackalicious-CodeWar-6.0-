import Configuration from 'openai'

import OpenAI from 'openai'

import { auth } from '@clerk/nextjs/server'

import { NextResponse } from 'next/server'
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

// contextual recognition of +ve and –ve sentiments of text

const openai = new OpenAI()
const instructionsMessage: ChatCompletionMessageParam = {
    role: "system",
    content: " You are a mental health counselor for ther user. You will recognise context of the text input given by the user and determine the +ve and -ve sentiments of the text. Also, behave like the friend who we go to at our lows, and keep a sense of familiarity and amiable tone.You have to respond according to the sentiment and the situation, and you MAY provide meditation and relaxation exercises with the user's permission. Also track the mood of the user throughout the conversation to provide insights later if the user asks for it. If you detect emergency scenarios, you should recommend helplines, trusted contacts or emergency assitance."
}
export async function POST(request: Request) {
    try {

        const { userId } = await auth();

        const { messages } = await request.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!configuration.apiKey) {
            return new NextResponse("Open API Key is not configured", { status: 500 })
        }

        if (!messages) {
            return new NextResponse("Message are required ", { status: 400 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [instructionsMessage, ...messages]
        });


        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        console.log("Error occured while [CONVERSATION] ", error)
        return new NextResponse("Internal server error", { status: 500 })
    }
}