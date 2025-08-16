// Theme constants for cyberpunk neon styling
export const THEME = {
  colors: {
    neon: {
      cyan: '#00ffff',
      magenta: '#ff00ff',
      electric: '#00ff41',
      purple: '#9d00ff',
      pink: '#ff0080',
      blue: '#0080ff',
      yellow: '#ffff00',
      orange: '#ff8000'
    },
    dark: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      tertiary: '#2a2a2a',
      border: '#333333'
    },
    gradients: {
      neonCyan: 'from-cyan-400 via-cyan-500 to-blue-500',
      neonMagenta: 'from-purple-400 via-pink-500 to-red-500',
      neonElectric: 'from-green-400 via-emerald-500 to-teal-500',
      cyberpunk: 'from-purple-600 via-pink-600 to-blue-600'
    }
  },
  effects: {
    glow: {
      small: '0 0 5px currentColor',
      medium: '0 0 10px currentColor, 0 0 20px currentColor',
      large: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
      intense: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor'
    },
    shadow: {
      neon: '0 0 20px rgba(0, 255, 255, 0.5)',
      purple: '0 0 20px rgba(157, 0, 255, 0.5)',
      pink: '0 0 20px rgba(255, 0, 128, 0.5)',
      green: '0 0 20px rgba(0, 255, 65, 0.5)'
    }
  },
  animations: {
    flicker: 'flicker 2s infinite alternate',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    glow: 'glow 2s ease-in-out infinite alternate',
    scan: 'scan 3s linear infinite'
  }
}

// Text content constants
export const CONTENT = {
  app: {
    title: 'HELLO WORLD',
    subtitle: 'Cyberpunk Edition',
    tagline: 'Welcome to the neon future',
    version: 'v2.077'
  },
  messages: {
    welcome: 'SYSTEM INITIALIZED',
    loading: 'LOADING...',
    error: 'ERROR: CONNECTION FAILED',
    success: 'OPERATION COMPLETE',
    unauthorized: 'ACCESS DENIED',
    connecting: 'ESTABLISHING CONNECTION...'
  },
  ui: {
    buttons: {
      enter: 'ENTER',
      exit: 'EXIT',
      connect: 'CONNECT',
      disconnect: 'DISCONNECT',
      activate: 'ACTIVATE',
      deactivate: 'DEACTIVATE'
    },
    labels: {
      status: 'STATUS',
      online: 'ONLINE',
      offline: 'OFFLINE',
      active: 'ACTIVE',
      inactive: 'INACTIVE'
    }
  }
}

// Animation keyframes (for use with Tailwind CSS)
export const ANIMATIONS = {
  flicker: `
    @keyframes flicker {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
  `,
  glow: `
    @keyframes glow {
      from { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
      to { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
    }
  `,
  scan: `
    @keyframes scan {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100vw); }
    }
  `
}

// Cyberpunk-themed class combinations
export const STYLES = {
  neonText: {
    base: 'font-mono font-bold uppercase tracking-wider',
    cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]',
    magenta: 'text-pink-500 drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]',
    electric: 'text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]',
    purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(157,0,255,0.8)]'
  },
  containers: {
    main: 'min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-900',
    card: 'bg-black/80 border border-cyan-400/30 backdrop-blur-sm rounded-lg',
    panel: 'bg-gradient-to-r from-black/90 to-gray-900/90 border-l-4 border-cyan-400'
  },
  effects: {
    scanline: 'relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-cyan-400/10 before:to-transparent before:animate-pulse',
    glitch: 'relative overflow-hidden',
    hologram: 'bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse'
  }
}

// Configuration constants
export const CONFIG = {
  animation: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
}

// Utility functions for theme management
export const THEME_UTILS = {
  getRandomNeonColor: () => {
    const colors = Object.values(THEME.colors.neon)
    return colors[Math.floor(Math.random() * colors.length)]
  },
  
  getNeonClass: (color = 'cyan') => {
    const colorMap = {
      cyan: STYLES.neonText.cyan,
      magenta: STYLES.neonText.magenta,
      electric: STYLES.neonText.electric,
      purple: STYLES.neonText.purple
    }
    return `${STYLES.neonText.base} ${colorMap[color] || colorMap.cyan}`
  },

  createGlowStyle: (color, intensity = 'medium') => {
    return {
      textShadow: THEME.effects.glow[intensity],
      color: THEME.colors.neon[color] || THEME.colors.neon.cyan
    }
  }
}