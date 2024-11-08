// src/app/api/anthropic/route.js

import { NextResponse } from 'next/server';
import axios from 'axios';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"]
  });

export async function POST(request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  try {
    const response = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });
      const messageText = response.content[0].text;
      console.log(messageText)
      return NextResponse.json({ completion: messageText }, { status: 200 });
    } catch (error) {
      console.error('Anthropic API Error:', error.response?.data || error.message);
      return NextResponse.json({ error: 'Failed to fetch data from Anthropic API.' }, { status: 500 });
    }
}
