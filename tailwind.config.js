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
                'light-gray':'#0B1226',
                'brand-blue': '#0A66EC',
                'dark-blue':'#253F9C',
                'brand-pink': '#F46997',
                'fade-orange':'#E5C090',
                'accent-blue': '#253F9C',
                'light-pink':'#F7F7F7',
                'red-gray':'#696969',   
                'brand-blue': '#0A66EC',
                'brand-pink': '#F46997',
                'accent-blue': '#253F9C'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem'
            }
        }
    },
    plugins: []
};
