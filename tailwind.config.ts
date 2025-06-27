import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		xm: '425px',
		msm: '500px',
		sm: '640px',
		md: '768px',
		slg: '900px',
		'mlg': '950px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px'
	},
	extend: {
		fontFamily: {
			bebas: ['var(--font-bebas-neue)', 'sans-serif'],
			barlow: ['var(--font-barlow-condensed)', 'sans-serif'],
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			error: "#ff4761"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
