import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)",
        },
        secondary: {
          "pale-blue": "hsl(223, 100%, 88%)",
          "light-red": "hsl(354, 100%, 66%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)",
          "very-dark-blue": "hsl(209, 33%, 12%)",
          blue: "hsl(223, 53%, 83%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
