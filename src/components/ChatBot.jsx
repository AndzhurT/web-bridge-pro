import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(`Hi! Welcome to Web Bridge Pro! 👋 I'm here to help you learn about our AI-powered browser platform for automotive dealers. What would you like to know about?`);
      }, 500);
    }
  }, [isOpen, messages.length]);

  // Auto scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Intent recognition system
  const detectIntent = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Product overview
    if (lowerMessage.includes('web bridge pro') || 
        lowerMessage.includes('what do you do') || 
        lowerMessage.includes('tell me about') ||
        lowerMessage.includes('what is') ||
        lowerMessage.includes('your product') ||
        lowerMessage.includes('services')) {
      return 'product_overview';
    }
    
    // Pricing
    if (lowerMessage.includes('pricing') || 
        lowerMessage.includes('price') || 
        lowerMessage.includes('cost') || 
        lowerMessage.includes('plans') ||
        lowerMessage.includes('how much') ||
        lowerMessage.includes('silver') ||
        lowerMessage.includes('gold') ||
        lowerMessage.includes('platinum')) {
      return 'pricing_inquiry';
    }
    
    // Integrations
    if (lowerMessage.includes('integration') || 
        lowerMessage.includes('vendor') || 
        lowerMessage.includes('brand') || 
        lowerMessage.includes('manheim') ||
        lowerMessage.includes('carmax') ||
        lowerMessage.includes('acv') ||
        lowerMessage.includes('connect') ||
        lowerMessage.includes('support')) {
      return 'integrations_supported';
    }
    
    // Free trial
    if (lowerMessage.includes('free trial') || 
        lowerMessage.includes('try for free') || 
        lowerMessage.includes('demo') || 
        lowerMessage.includes('test')) {
      return 'free_trial';
    }
    
    // Technical support
    if (lowerMessage.includes('help') || 
        lowerMessage.includes('support') || 
        lowerMessage.includes('technical') || 
        lowerMessage.includes('problem') ||
        lowerMessage.includes('issue') ||
        lowerMessage.includes('not working')) {
      return 'technical_support';
    }
    
    // Business hours
    if (lowerMessage.includes('hours') || 
        lowerMessage.includes('when open') || 
        lowerMessage.includes('available') ||
        lowerMessage.includes('business hours')) {
      return 'business_hours';
    }
    
    // Getting started
    if (lowerMessage.includes('get started') || 
        lowerMessage.includes('sign up') || 
        lowerMessage.includes('how to begin') || 
        lowerMessage.includes('start trial') ||
        lowerMessage.includes('begin')) {
      return 'getting_started';
    }
    
    // Greetings
    if (lowerMessage.includes('hello') || 
        lowerMessage.includes('hi') || 
        lowerMessage.includes('hey') ||
        lowerMessage.includes('good morning') ||
        lowerMessage.includes('good afternoon')) {
      return 'greeting';
    }
    
    return 'unknown_fallback';
  };

  // Response system
  const getResponse = (intent) => {
    const responses = {
      greeting: `Hello! 👋 Great to meet you! I'm here to help you learn about Web Bridge Pro's AI-powered browser platform for automotive dealers. 

What would you like to know about?
• Our services and integrations
• Pricing plans and free trial
• Technical support
• Getting started`,

      product_overview: `Hi! 👋 Web Bridge Pro is an AI-powered browser platform designed specifically for automotive dealers. We help independent and franchise dealerships automate their workflows by seamlessly connecting your DMS with vendor portals like Manheim, CarMax, ACV Auction, and more.

Our platform eliminates manual data entry and repetitive tasks, saving you time and reducing errors. Think of it as your smart assistant that handles inventory syncs, vendor updates, and dealership operations automatically.

Would you like to know more about our specific features or pricing plans?`,

      pricing_inquiry: `Great question! We offer three plans to fit different dealership needs:

Silver Plan - $99/month 📊
• 1 user
• All core features + ChatGPT integration
• 30-day free trial

Gold Plan - $399/month ⭐ (Most Popular)
• 3 users
• 3 custom integrations
• Unlimited auction integrations
• 30-day free trial

Platinum Plan - $599/month 💎
• 5 users
• 5 custom integrations
• Unlimited auction & lender integrations
• Priority support
• 30-day free trial

All plans include access to our SmartDMS marketplace and state dealer association connections. Ready to start your free trial? I can connect you with our team!`,

      integrations_supported: `We support a wide range of automotive industry vendors! 🚗

Currently integrated brands include:
• Manheim
• CarMax
• ACV Auction
• VIN Solutions
• CarGuru
• Dejavoo
• Gmail & Google Workspace
• Dropbox
• And many more!

Plus custom integrations available with:
• Your DMS system
• Auction platforms
• Lender portals
• State dealer associations

The number of custom integrations depends on your plan (3 for Gold, 5 for Platinum). Need a specific integration? Let me know and I can check if we support it or if it can be added to your custom integration allowance!`,

      free_trial: `Absolutely! We offer a 30-day free trial on all our plans - no credit card required upfront! 🎉

During your trial, you'll get:
✅ Full access to all features in your chosen plan
✅ Setup assistance from our team
✅ Training and onboarding support
✅ Direct access to our support team

Ready to get started? I can connect you with our team right now:
📞 Call: (215) 532-1743
📧 Email: ksimmons@autodealerpro.com

Our team is available Monday-Friday, 9AM-6PM EST. Would you like me to schedule a call or would you prefer to reach out directly?`,

      technical_support: `I'm here to help! For technical support, we offer multiple ways to get assistance:

Immediate Support:
📞 Phone: (215) 532-1743 (Mon-Fri, 9AM-6PM EST)
📧 Email: contact@webbridgepro.com

What to expect:
• Platinum customers get priority support
• Most issues resolved within 24 hours
• Screen-sharing sessions available for complex issues
• Comprehensive training and onboarding included

Common issues I can help with right now:
• Login problems
• Integration questions
• Feature explanations
• Billing inquiries

What specific issue are you experiencing? I might be able to provide immediate guidance!`,

      business_hours: `Our support team is available:
🕘 Monday - Friday: 9:00 AM - 6:00 PM EST

Contact options:
📞 Phone: (215) 532-1743
📧 Email: ksimmons@autodealerpro.com (Sales)
📧 Email: contact@webbridgepro.com (Support)

Outside business hours? No problem! You can:
• Send us an email and we'll respond first thing in the morning
• Start your 30-day free trial anytime at our website
• Browse our resources and FAQ section

Is there something specific I can help you with right now?`,

      getting_started: `Excited to get you started with Web Bridge Pro! 🚀

Here's how to begin:

1️⃣ Choose your plan (Silver, Gold, or Platinum)
2️⃣ Start your 30-day free trial - no credit card needed
3️⃣ Schedule onboarding with our team
4️⃣ Connect your first integrations
5️⃣ Start automating your workflows!

Ready to take the next step?
📞 Call our team: (215) 532-1743
📧 Email: ksimmons@autodealerpro.com

Our specialists will help you choose the right plan and get everything set up quickly. The whole process typically takes less than a day!

Which plan sounds most interesting to you? I can provide more details about any of them!`,

      unknown_fallback: `I want to make sure I give you the most accurate information! 🤔

I didn't quite catch that, but I'm here to help with questions about:
• Web Bridge Pro features and pricing
• Integrations and compatibility
• Getting started and free trials
• Technical support and contact info

Could you rephrase your question? Or if you'd prefer to speak with a specialist:
📞 Call: (215) 532-1743 (Mon-Fri, 9AM-6PM EST)
📧 Email: ksimmons@autodealerpro.com

What specific information are you looking for today?`
    };

    return responses[intent] || responses.unknown_fallback;
  };

  const addBotMessage = (text) => {
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text, 
      sender: 'bot', 
      timestamp: new Date() 
    }]);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text, 
      sender: 'user', 
      timestamp: new Date() 
    }]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    addUserMessage(userMessage);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Detect intent and generate response
    const intent = detectIntent(userMessage);
    const response = getResponse(intent);

    setIsTyping(false);
    addBotMessage(response);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    "What is Web Bridge Pro?",
    "Show me pricing plans",
    "Start free trial",
    "What integrations do you support?",
    "Contact support"
  ];

  const handleQuickResponse = async (response) => {
    // Directly send the quick response without using input state
    addUserMessage(response);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Detect intent and generate response
    const intent = detectIntent(response);
    const botResponse = getResponse(intent);

    setIsTyping(false);
    addBotMessage(botResponse);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-[#f49f1c]/45 bg-[#f49f1c] p-4 text-[#111b20] shadow-2xl shadow-[#f49f1c]/25 transition-all duration-300 hover:scale-110 hover:bg-[#ffad35] focus:outline-none focus:ring-2 focus:ring-[#f49f1c]/60 focus:ring-offset-2 focus:ring-offset-[#0d1418]"
          aria-label={isOpen ? "Close WebBridge Assistant" : "Open WebBridge Assistant"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 z-50 flex h-[min(600px,calc(100dvh-6rem))] w-[calc(100vw-1.5rem)] max-w-96 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1418] text-white shadow-2xl shadow-black/40 sm:bottom-24 sm:right-6 sm:h-[600px] sm:w-96 sm:rounded-[32px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[linear-gradient(135deg,rgba(244,159,28,0.20),rgba(255,255,255,0.04))] p-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#f49f1c] shadow-lg shadow-[#f49f1c]/20">
                <span className="text-sm font-black text-[#111b20]">WB</span>
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">WebBridge Assistant</h3>
                <p className="text-xs text-white/62">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 text-white/62 transition-colors hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f49f1c]/60"
              aria-label="Close WebBridge Assistant"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_10%_0%,rgba(244,159,28,0.11),transparent_32%)] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl border p-3 shadow-lg ${
                    message.sender === 'user'
                      ? 'border-[#f49f1c]/40 bg-[#f49f1c] text-[#111b20] shadow-[#f49f1c]/10'
                      : 'border-white/10 bg-white/[0.06] text-white shadow-black/10'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                  <div className={`mt-1 text-xs ${message.sender === 'user' ? 'text-[#111b20]/60' : 'text-white/42'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#f49f1c]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#f49f1c]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#f49f1c]" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

             {/* Quick responses (always visible when chat is open) */}
             <div className="mt-4 space-y-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
               <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#f49f1c]">Quick questions</p>
               <div className="flex flex-wrap gap-2">
                 {quickResponses.map((response, index) => (
                   <button
                     key={index}
                     onClick={() => handleQuickResponse(response)}
                     className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-white/72 transition-colors hover:border-[#f49f1c]/45 hover:bg-white/[0.08] hover:text-white"
                   >
                     {response}
                   </button>
                 ))}
               </div>
             </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 bg-[#101a20]/90 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Web Bridge Pro..."
                className="flex-1 rounded-full border border-white/10 bg-white/[0.045] p-3 text-sm text-white placeholder:text-white/38 transition-colors focus:border-[#f49f1c]/70 focus:outline-none focus:ring-2 focus:ring-[#f49f1c]/20"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="rounded-full bg-[#f49f1c] p-3 text-[#111b20] transition-colors hover:bg-[#ffad35] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
                aria-label="Send chat message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-white/42">
              Powered by WebBridge AI • For urgent issues call (215) 532-1743
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot; 