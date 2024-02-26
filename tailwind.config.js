/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans'],
                roboto: ['Roboto', 'sans-serif'],
                serif: ['DM Serif Display', 'serif']
            },
            colors: {
                'header-gray': '#2F3750',
                'fade-gray': '#828796',
                'brand-blue': '#0A66EC',
                'brand-pink': '#F46997',
                'accent-blue': '#253F9C'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem'
            },
            height: {
                150: '37.5rem'
            },
            lineHeight: {
                15: '3.75rem',
                22.5: '5.625rem'
            },
            fontSize: {
                '7.5xl': '5rem',
                '4.5xl': '2.5rem'
            }
        }
    },
    plugins: []
};
