import React, { useState } from 'react';
import { Send } from 'lucide-react';

const seasonalAdvice = {
  Spring: [
    "It's perfect for planting lettuce, peas, and carrots!",
    "Start your tomato seedlings indoors now.",
    "Consider planting root vegetables like radishes."
  ],
  Summer: [
    "Great time for tomatoes, peppers, and cucumbers!",
    "Make sure to water regularly in the heat.",
    "Plant heat-loving herbs like basil."
  ],
  Fall: [
    "Plant your winter vegetables like kale and Brussels sprouts.",
    "Time to start planting garlic for next year.",
    "Consider cold-hardy lettuce varieties."
  ],
  Winter: [
    "Focus on planning your spring garden.",
    "Start indoor microgreens.",
    "Maintain your winter crops like kale and spinach."
  ]
};

export function Chatbot() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hello! I can help you decide what to plant based on the season. What season are you planning for?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Simple response logic
    const season = Object.keys(seasonalAdvice).find(
      s => input.toLowerCase().includes(s.toLowerCase())
    );

    const response = season
      ? { text: seasonalAdvice[season as keyof typeof seasonalAdvice][
          Math.floor(Math.random() * seasonalAdvice[season as keyof typeof seasonalAdvice].length)
        ], isUser: false }
      : { text: "Please specify a season (Spring, Summer, Fall, or Winter) and I'll provide planting suggestions!", isUser: false };

    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 500);

    setInput("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <h2 className="text-xl font-bold text-white">Planting Guide Assistant</h2>
        </div>
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about planting in any season..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}