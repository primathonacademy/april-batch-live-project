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
                'dark-blue':'#253F9C',
                'brand-pink': '#F46997',
                'accent-blue': '#253F9C',
                'fade-orange':'#E5C090',
                'fade-white': "#F7F7F7",
                'fade-blue-white':'#F4F8FF'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem'
            },
            fontSize: {
                xxs: '0.625rem'
            },
            lineHeight: {
                15: '3.75rem'
            }
        }
    },
    plugins: []
};
