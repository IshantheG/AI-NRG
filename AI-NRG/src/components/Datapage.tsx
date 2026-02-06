import { motion } from 'framer-motion';
import { useState } from 'react';

const DataPage = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm the AI-NRG assistant. Ask me anything about AI's environmental impact, energy consumption, or sustainability practices."
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      // Add user message
      setMessages(prev => [...prev, { type: 'user', content: inputValue }]);
      
      // Simulate bot response (placeholder)
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "I'm a UI placeholder for now. In production, I'd be connected to an LLM API to provide real insights about AI environmental impact!"
        }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  const graphs = [
    {
      title: 'Energy Consumption Trends',
      subtitle: 'Monthly AI model training energy usage',
      icon: '📈',
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Carbon Emissions by Model Type',
      subtitle: 'CO₂e breakdown across different AI architectures',
      icon: '🌍',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Comparative Analysis',
      subtitle: 'Cross-model environmental impact comparison',
      icon: '📊',
      color: 'from-teal-500 to-cyan-600',
      wide: true
    }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-slate-900">Data & </span>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Real-time analytics on AI environmental impact
          </p>
        </motion.div>

        {/* Graphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {graphs.map((graph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl shadow-xl border border-emerald-50 overflow-hidden ${
                graph.wide ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Graph Header */}
              <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-emerald-50/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl bg-gradient-to-br ${graph.color} p-3 rounded-xl shadow-lg`}>
                      {graph.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{graph.title}</h3>
                      <p className="text-sm text-slate-600">{graph.subtitle}</p>
                    </div>
                  </div>
                  <select className="px-4 py-2 bg-white border-2 border-emerald-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                    <option>Last 30 Days</option>
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                  </select>
                </div>
              </div>

              {/* Graph Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-green-50/30 flex items-center justify-center">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full" style={{
                    backgroundImage: `linear-gradient(to right, #10b98120 1px, transparent 1px),
                                      linear-gradient(to bottom, #10b98120 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Placeholder Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative text-center z-10"
                >
                  <div className="text-7xl mb-4 opacity-60">📊</div>
                  <p className="text-lg font-bold text-slate-700 mb-2">
                    Chart Visualization Placeholder
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    Data integration pending
                  </p>
                  <div className="mt-6 flex gap-2 justify-center">
                    <div className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold">
                      Chart.js Ready
                    </div>
                    <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold">
                      D3.js Ready
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chatbot Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden"
        >
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AI-NRG Assistant</h3>
                  <p className="text-emerald-100 text-sm font-medium">
                    Ask me about AI environmental impact
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                <span className="text-white text-sm font-semibold">Online</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 bg-gradient-to-br from-slate-50 to-emerald-50/20">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-3 mb-4 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  message.type === 'bot'
                    ? 'bg-gradient-to-br from-emerald-500 to-green-600'
                    : 'bg-gradient-to-br from-slate-600 to-slate-700'
                }`}>
                  {message.type === 'bot' ? '🤖' : '👤'}
                </div>
                <div
                  className={`max-w-md px-5 py-3 rounded-2xl ${
                    message.type === 'bot'
                      ? 'bg-white border-2 border-emerald-100 text-slate-800'
                      : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white'
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t-2 border-emerald-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about AI environmental impact..."
                className="flex-1 px-6 py-4 bg-slate-50 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 placeholder-slate-400 font-medium transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <span>Send</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
            <p className="mt-3 text-xs text-slate-500 text-center font-medium">
              💡 LLM integration pending - This is a UI placeholder for demonstration
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataPage;