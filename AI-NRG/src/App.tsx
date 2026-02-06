import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/Homepage.tsx';
import DataPage from './components/Datapage.tsx';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl blur-md opacity-50" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  AI-NRG
                </h1>
                <p className="text-xs text-emerald-700/70 font-medium tracking-wide">ENERGY · IMPACT · AI</p>
              </div>
            </motion.div>

            <div className="flex gap-2">
              {['home', 'data'].map((page, index) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrentPage(page)}
                  className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {page === 'home' ? 'Home' : 'Data & Insights'}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
         
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;