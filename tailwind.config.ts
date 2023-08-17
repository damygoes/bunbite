import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#e74c3c", // Burger Red
          secondary: "#ffd700", // Cheese Yellow
          accent: "#228b22", // Lettuce Green
          neutral: "#7d7d7d", // Bun Brown
          "base-100": "#ffffff", // White
          info: "#3498db", // Tomato Blue
          success: "#2ecc71", // Pickle Green
          warning: "#f39c12", // Mustard Yellow
          error: "#c0392b", // Ketchup Red
          body: {
            "background-color": "#f7f7f7", // Light Gray Background
          },
        },
        darkTheme: {
          primary: "#e74c3c", // Burger Red
          secondary: "#ffd700", // Cheese Yellow
          accent: "#228b22", // Lettuce Green
          neutral: "#7d7d7d", // Bun Brown
          "base-100": "#1e1e1e", // Dark Background
          info: "#3498db", // Tomato Blue
          success: "#2ecc71", // Pickle Green
          warning: "#f39c12", // Mustard Yellow
          error: "#c0392b", // Ketchup Red
          body: {
            "background-color": "#121212", // Dark Gray Background
          },
        },
      },
    ],
  },
};
export default config;
