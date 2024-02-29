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
                'fade-blue-white':'#F4F8FF',
                'light-gray': '#ddd',
                'light-brown':'#696969'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem'
            },
            fontSize: {
                xxs: '0.625rem'
            },
            spacing :{
                '26.75':'6.668rem',
                '29':'-7.25rem',
                '17.5':'4.375rem',
                '215.25':'53.813rem',
                '21':'-5.25rem',
                '25':'-6.25rem',
                '62.5':'15.625rem',
                '31.25':'7.813rem',
                '37.25':'9.313rem'
            }
        }
    },
    plugins: []
};
