'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Send, Bot, Loader2 } from "lucide-react";
import Link from 'next/link';

// Base questions that Claude will use as context
interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    context: string;
  }
  
  interface Answer {
    mainAnswer: string;
    followUpAnswer?: string;
    analysis?: any;
  }
  
  const questions: Question[] = [
    {
      id: 1,
      category: "Social Interaction",
      question: "How do you feel when meeting new friends?",
      options: [
        "I get very excited!",
        "I feel a little nervous",
        "I prefer staying with my current friends",
        "I don't like meeting new people"
      ],
      context: "This question helps assess social anxiety and eagerness for social interactions"
    },
    {
      id: 2,
      category: "Screen Time",
      question: "What do you like to do most during free time?",
      options: [
        "Play video games or watch videos",
        "Play outside with friends",
        "Read books or draw",
        "Talk with family members"
      ],
      context: "This question helps understand screen time habits and activity preferences"
    },
    // ... other questions
  ];
  

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
}

export default function TestPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [userInput, setUserInput] = useState('');

  const askClaude = async (prompt: string) => {
    try {
      const response = await fetch('/api/anthropic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      return data.completion;
    } catch (error) {
      console.error('Error calling Claude:', error);
      return null;
    }
  };
  // Add this function to handle adding messages to the chat
  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, {
      ...message,
      id: prev.length // Ensure unique ID
    }]);
  };


  // Initial greeting using Claude
  useEffect(() => {
    const getInitialGreeting = async () => {
      const prompt = `You are a friendly chatbot talking to a child. Generate a warm, engaging greeting that makes them feel comfortable and excited to answer some questions. The greeting should be short, use simple language, and include an emoji. End with asking if they're ready to start.`;
      
      setIsTyping(true);
      const greeting = await askClaude(prompt) || "Hi! 👋 I'm your friendly chat buddy. Ready to start our chat?";
      setIsTyping(false);

      setMessages([{
        id: 0,
        type: 'bot',
        content: greeting,
        options: ["Yes, let's begin!", "Tell me more first"]
      }]);
    };

    getInitialGreeting();
  }, []);

  const generateFollowUp = async (question: any, answer: string) => {
    const prompt = `
      Context: A child has just answered a question about ${question.category}.
      Question asked: "${question.question}"
      Child's answer: "${answer}"
      Context about the question: ${question.context}

      Generate a follow-up question that:
      1. Is specific to their answer
      2. Uses child-friendly language
      3. Helps understand their response better
      4. Is open-ended but easy to answer
      5. Is encouraging and positive

      Provide just the follow-up question, no additional text.
    `;

    return await askClaude(prompt);
  };

  const analyzeResponse = async (question: any, mainAnswer: string, followUpAnswer: string) => {
    const prompt = `
      Analyze a child's responses about ${question.category}:
      Original question: "${question.question}"
      Initial answer: "${mainAnswer}"
      Follow-up response: "${followUpAnswer}"
      
      Provide a brief analysis of:
      1. Key insights about the child's behavior/preferences
      2. Potential areas for growth
      3. Suggested activities or approaches
      
      Format as JSON with keys: insights, growthAreas, suggestions
    `;

    const analysis = await askClaude(prompt);
    try {
      return JSON.parse(analysis);
    } catch (error) {
      console.error('Error parsing analysis:', error);
      return null;
    }
  };

  const handleOptionSelect = async (option: string) => {
    addMessage({
      id: messages.length,
      type: 'user',
      content: option
    });

    setIsTyping(true);
    const followUpQuestion = await generateFollowUp(questions[currentQuestion], option);
    setIsTyping(false);

    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].category]: {
        ...prev[questions[currentQuestion].category],
        mainAnswer: option
      }
    }));

    // setShowFollowUp(true);
    addMessage({
      id: messages.length + 1,
      type: 'bot',
      content: followUpQuestion || "Could you tell me more about that?"
    });
  };

  const handleFollowUpSubmit = async () => {
    if (!userInput.trim()) return;

    addMessage({
      id: messages.length,
      type: 'user',
      content: userInput
    });

    const currentQuestionData = questions[currentQuestion];
    const currentAnswers = answers[currentQuestionData.category];

    // Analyze responses using Claude
    const analysis = await analyzeResponse(
      currentQuestionData,
      currentAnswers.mainAnswer,
      userInput
    );

    setAnswers(prev => ({
      ...prev,
      [currentQuestionData.category]: {
        ...prev[currentQuestionData.category],
        followUpAnswer: userInput,
        analysis: analysis
      }
    }));

    setUserInput('');
    setShowFollowUp(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      
      // Use Claude to generate transition to next question
      setIsTyping(true);
      const transitionPrompt = `
        Based on the previous answer about ${currentQuestionData.category},
        create a smooth transition to the next question: "${questions[currentQuestion + 1].question}"
        Keep it brief and encouraging.
      `;
      const transition = await askClaude(transitionPrompt);
      setIsTyping(false);

      addMessage({
        id: messages.length + 1,
        type: 'bot',
        content: transition,
        options: questions[currentQuestion + 1].options
      });
    } else {
      // Generate completion message using Claude
      setIsTyping(true);
      const summaryPrompt = `
        Create an encouraging completion message for a child who just finished answering questions about their social skills and habits.
        Include:
        1. Gratitude for their participation
        2. A positive note about their answers
        3. An emoji
        Keep it brief and cheerful.
      `;
      const completionMessage = await askClaude(summaryPrompt);
      setIsTyping(false);

      addMessage({
        id: messages.length + 1,
        type: 'bot',
        content: completionMessage
      });

      // Save complete analysis to your backend here
      console.log('Test Completed. Answers:', answers);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-4"
        asChild
      >
        <Link href="/child">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </Button>

      {/* Chat Container */}
      <Card className="max-w-2xl mx-auto p-4 h-[80vh] flex flex-col">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${
                message.type === 'bot' ? 'bg-orange-100' : 'bg-blue-100'
              } rounded-lg p-3`}>
                {message.type === 'bot' && (
                  <Bot className="w-6 h-6 text-orange-500" />
                )}
                <div>
                  <p className="text-gray-800">{message.content}</p>
                  {message.options && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full text-left justify-start hover:bg-orange-50"
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-orange-100 rounded-lg p-3">
                <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area - Always visible but conditionally enabled */}
      <div className="flex space-x-2 mt-auto">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={showFollowUp ? "Type your answer..." : "Waiting for question..."}
          disabled={!showFollowUp}
          className={`flex-1 p-2 border rounded-lg transition-colors
            ${showFollowUp 
              ? "focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              : "bg-gray-50 text-gray-400"
            }`}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && showFollowUp) {
              handleFollowUpSubmit();
            }
          }}
        />
        <Button
          onClick={handleFollowUpSubmit}
          disabled={!showFollowUp || !userInput.trim()}
          className={`bg-orange-500 hover:bg-orange-600 transition-colors
            ${(!showFollowUp || !userInput.trim()) && 'opacity-50 cursor-not-allowed'}`}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  </div>
  );
}