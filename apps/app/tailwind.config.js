/** @type {import('tailwindcss').Config} */
const sharedConfig = require("tailwind-config");
module.exports = {
  ...sharedConfig,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/onborda/dist/**/*.{js,ts,jsx,tsx}'
  ],
};