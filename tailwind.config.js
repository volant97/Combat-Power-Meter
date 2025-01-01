/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maintextc: "#f7f7f7",
        bgc1: "#1e1e1e",
        bgc2: "#262626",
        pointc: "#f19e54",
      },
    },
    fontFamily: {
      Pretendard: ["Pretendard-Regular"],
      Freesentation: ["Freesentation-9Black"],
      SDSamliphopangche: ["SDSamliphopangche_Basic"],
    },
    boxShadow: {
      headerShadow: "0 10px 10px -7px rgba(0, 0, 0, 0.5)",
      footerShadow: "0 -10px 10px -7px rgba(0, 0, 0, 0.5)",
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
} satisfies Config;
