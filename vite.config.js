/** @type {import('tailwindcss').Config} */
export default {
  // Purge unused styles in production
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist any dynamically generated classes (if any)
  safelist: [
    // Example: 'bg-ischool-blue', 'text-ischool-blue'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'apple-system', 'sans-serif'],
      },
      colors: {
        'ischool-blue': '#077ffb',
        'ischool-dark': '#1a2b4c',
      },
      // Add mobile-first breakpoints (optional, but helps responsive design)
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // Ensure transitions don't cause jank
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  // Disable unused core plugins for smaller bundle (optional)
  corePlugins: {
    // If you don't use certain utilities, disable them to reduce CSS
    // For example: preflight: true, (keep it)
  },
  plugins: [],
  // Important: Ensure this is false in development, true in production (automatically handled by NODE_ENV)
  // But Tailwind v3+ does it automatically.
}