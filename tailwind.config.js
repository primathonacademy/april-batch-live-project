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
                'accent-blue': '#253F9C',
                'gray-bg-color': '#F4F8FF',
                'pink-bg-color': '#FFEAF1',
                'section-quote': '#272727',
                'section-box-heading-color': '#0B1226',
                'section-box-paragraph-color': '#7B7B7B',
                'paragraph-gray-color': '#696969'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem',
                '6xl': '2.25rem',
                '11xl': '3.50rem'
            },
            width: {
                180: '45rem',
                134: '33.5rem',
                100: '25rem',
                95: '23.75rem'
            },
            fontSize: {
                '11xl': '5rem',
                '10xl': '4.5rem',
                '9xl': '4rem',
                '8xl': '3.5rem',
                '6xl': '2.25rem'
            },
            lineHeight: {
                tighter: '4rem'
            },
            padding: {
                45: '11.25rem',
                90: '22.5rem'
            }
        }
    },
    plugins: []
};
