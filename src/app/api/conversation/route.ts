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
    content: " You are a mental helth supporter  for ther user and contextual recognition of +ve and -ve sentiments of text  . So you need to behave with the user like a friend and what to do next."
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