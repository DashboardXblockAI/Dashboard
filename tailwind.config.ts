
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#C084FC',
					foreground: '#ffffff',
					50: '#faf7ff',
					100: '#f3ecff',
					200: '#e9d8ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7c3aed',
					800: '#6b21a8',
					900: '#1A0536',
					950: '#030014',
				},
				secondary: {
					DEFAULT: '#1A0536',
					foreground: '#ffffff'
				},
				accent: {
					DEFAULT: '#C084FC',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#1A0536',
					foreground: '#a0a0a0'
				},
				popover: {
					DEFAULT: '#030014',
					foreground: '#ffffff'
				},
				card: {
					DEFAULT: '#1A0536',
					foreground: '#ffffff'
				},
				sidebar: {
					DEFAULT: '#030014',
					foreground: '#ffffff',
					primary: '#C084FC',
					'primary-foreground': '#ffffff',
					accent: '#1A0536',
					'accent-foreground': '#ffffff',
					border: '#1A0536',
					ring: '#C084FC'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #C084FC'
					},
					'50%': {
						boxShadow: '0 0 20px #C084FC, 0 0 30px #C084FC'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 10px #C084FC, 0 0 20px #C084FC, 0 0 30px #C084FC'
					},
					'50%': {
						boxShadow: '0 0 20px #C084FC, 0 0 30px #C084FC, 0 0 40px #C084FC'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.4s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite'
			},
			fontFamily: {
				'sora': ['Sora', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
