import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NeonText from '../components/NeonText'

export default function Home() {
  const [glitchText, setGlitchText] = useState('HELLO WORLD')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => {
        setIsGlitching(false)
      }, 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const glitchVariants = {
    normal: {
      x: 0,
      opacity: 1,
      filter: 'hue-rotate(0deg)'
    },
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'],
      transition: {
        duration: 0.2,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main title with glitch effect */}
        <motion.div
          className="text-center mb-8"
          variants={glitchVariants}
          animate={isGlitching ? "glitch" : "normal"}
        >
          <NeonText className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
            {glitchText}
          </NeonText>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-cyan-300 font-mono tracking-wider">
            WELCOME TO THE NEON REALM
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* Interactive elements */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          {/* Card 1 */}
          <motion.div
            className="group relative bg-black/50 border border-cyan-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-cyan-300 font-mono text-lg mb-2">SYSTEM.01</h3>
              <p className="text-gray-300 text-sm">Neural interface activated</p>
              <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 1 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="group relative bg-black/50 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(128, 0, 255, 0.3)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-purple-300 font-mono text-lg mb-2">MATRIX.02</h3>
              <p className="text-gray-300 text-sm">Data stream synchronized</p>
              <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 2, delay: 1.5 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="group relative bg-black/50 border border-pink-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-pink-400/60 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 0, 128, 0.3)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-pink-300 font-mono text-lg mb-2">CYBER.03</h3>
              <p className="text-gray-300 text-sm">Reality bridge online</p>
              <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-pink-400 to-cyan-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 2, delay: 2 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-12">
          <motion.button
            className="group relative px-8 py-3 font-mono text-cyan-300 border border-cyan-400/50 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">ENTER THE MATRIX</span>
          </motion.button>
        </motion.div>

        {/* Status bar */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-8 right-8"
        >
          <div className="flex justify-between items-center text-xs font-mono text-cyan-400/60">
            <div>STATUS: ONLINE</div>
            <div>PROTOCOL: NEON-7</div>
            <div>UPTIME: ∞</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(0,255,255,0.03)_100%)] bg-[length:100%_4px] animate-pulse"></div>
      </div>
    </div>
  )
}