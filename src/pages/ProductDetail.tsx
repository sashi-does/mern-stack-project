import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Calendar, Leaf, MessageCircle } from 'lucide-react';
import { plants } from '../data/plants';
import { useStore } from '../store/useStore';
import { useAuthStore } from '../store/useAuthStore';
import { Message } from '../types';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plant = plants.find(p => p.id === id);
  const { isAuthenticated } = useAuthStore();
  const addToCart = useStore(state => state.addToCart);
  
  const [messages, setMessages] = useState<Message[]>([
    { text: `Ask me anything about ${plant?.name || 'this plant'}!`, isUser: false }
  ]);
  const [input, setInput] = useState('');

  if (!plant) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-white">Product not found</p>
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot response based on keywords
    let response = `I can help you with growing ${plant.name}. `;
    if (input.toLowerCase().includes('water')) {
      response += plant.careInstructions || 'Make sure to water regularly.';
    } else if (input.toLowerCase().includes('plant')) {
      response += plant.plantingInstructions || 'Follow general planting guidelines.';
    } else {
      response += 'What specific aspect would you like to know about?';
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInput('');
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{plant.name}</h1>
          <p className="text-gray-400 mb-6">{plant.description}</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg"
          >
            Login to View Details & Purchase
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-white mb-4">{plant.name}</h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl text-green-400 font-bold">
              ${plant.price.toFixed(2)}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              plant.stockStatus === 'In Stock'
                ? 'bg-green-500/20 text-green-400'
                : plant.stockStatus === 'Low Stock'
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-red-500/20 text-red-400'
            }`}>
              {plant.stockStatus}
            </span>
          </div>
          <button
            onClick={() => addToCart(plant)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Details</h2>
            </div>
            <p className="text-gray-400 mb-4">{plant.detailedDescription}</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Care Instructions</h3>
                <p className="text-gray-400">{plant.careInstructions}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Planting Instructions</h3>
                <p className="text-gray-400">{plant.plantingInstructions}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Best Planting Season</h2>
            </div>
            <p className="text-gray-400">
              Best time to plant: <span className="text-green-400">{plant.season}</span>
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="h-6 w-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Plant Care Assistant</h2>
            </div>
            <div className="h-64 overflow-y-auto mb-4 space-y-4">
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
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about plant care..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}