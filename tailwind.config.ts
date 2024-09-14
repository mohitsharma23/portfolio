import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0px)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
    },
    animation: {
      slidein300: "slidein 1s ease 300ms forwards",
      slidein500: "slidein 1s ease 500ms forwards",
      slidein700: "slidein 1s ease 700ms forwards",
      slidein900: "slidein 1s ease 900ms forwards",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
  },
  plugins: [],
};
export default config;
