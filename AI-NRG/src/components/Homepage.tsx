import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Energy Consumption',
      description: 'Training large AI models can consume as much energy as several households use in a year. Understanding this impact helps us make informed decisions about AI development and deployment.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: '🌍',
      title: 'Carbon Footprint',
      description: 'Data centers powering AI contribute significantly to global carbon emissions. Learn how to measure, track, and minimize the environmental cost of artificial intelligence.',
      color: 'from-emerald-400 to-green-600'
    },
    {
      icon: '♻️',
      title: 'Sustainable Solutions',
      description: 'Discover best practices, green computing techniques, and renewable energy solutions for more sustainable AI development and responsible innovation.',
      color: 'from-teal-400 to-cyan-600'
    }
  ];

  const stats = [
    { value: '700+', label: 'AI Models Analyzed', icon: '🤖' },
    { value: '50M', label: 'kWh Tracked', icon: '⚡' },
    { value: '15K', label: 'Tonnes CO₂e', icon: '🌱' }
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-emerald-800 tracking-wide">SUSTAINABLE AI INITIATIVE</span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-slate-900">Welcome to </span>
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                AI-NRG
              </span>
            </h1>

            <p className="text-2xl text-emerald-900 font-semibold mb-4">
              Exploring the Environmental Impact of Artificial Intelligence
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              As AI systems become increasingly powerful and ubiquitous, understanding their environmental footprint has never been more critical. AI-NRG is your comprehensive resource for learning about the energy consumption, carbon emissions, and ecological impact of AI technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/data">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Explore Data
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-emerald-500 text-emerald-700 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-0 left-0 z-10"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl">⚡</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Energy Usage</h3>
                      <p className="text-sm text-slate-600">Track AI consumption</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-32 right-0 z-10"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-gradient-to-br from-emerald-100 to-green-100 p-3 rounded-xl">🌳</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Carbon Impact</h3>
                      <p className="text-sm text-slate-600">Measure emissions</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute bottom-8 left-16 z-10"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-gradient-to-br from-teal-100 to-cyan-100 p-3 rounded-xl">📊</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">Analytics</h3>
                      <p className="text-sm text-slate-600">Visualize insights</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Circle */}
              <div className="w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-green-300/40 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl font-black text-center mb-4 text-slate-900"
          >
            Why AI Environmental Impact Matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center text-slate-600 text-lg mb-12 max-w-3xl mx-auto"
          >
            Understanding the environmental cost of AI is crucial for building a sustainable technological future
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className={`inline-block text-6xl mb-6 p-4 bg-gradient-to-br ${feature.color} rounded-2xl`}>
                    <span className="filter drop-shadow-lg">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;