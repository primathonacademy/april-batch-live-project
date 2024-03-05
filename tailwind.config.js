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
                'dark-blue': '#253F9C',
                'brand-pink': '#F46997',
                'accent-blue': '#253F9C',
                'gray-bg-color': '#F4F8FF',
                'pink-bg-color': '#FFEAF1',
                'portfolio-button-color': '#253F9C',
                'section-quote': '#272727',
                'section-box-heading-color': '#0B1226',
                'section-box-paragraph-color': '#7B7B7B',
                'fade-orange': '#E5C090',
                'fade-white': '#F7F7F7',
                'fade-blue-white': '#F4F8FF'
            },
            borderRadius: {
                '4xl': '1.75rem',
                '5xl': '2rem',
                '6xl': '2.25rem',
                '11xl': '3.50rem'
            },
            width: {
                180: '45rem',
                95: '23.75rem',
                100: '25rem'
            },

            padding: {
                45: '11.25rem',
                90: '22.5rem'
            },
            fontSize: {
                xxs: '0.625rem',
                '7.5xl': '5rem',
                '4.5xl': '2.875rem'
            },
            height: {
                212: '53.125rem',
                159: '39.875rem'
            },
            lineHeight: {
                15: '3.75rem',
                22.5: '5.625rem',
                tighter: '4rem'
            },
            backgroundImage: {
                'gradient-linear':
                    'linear-gradient(hsl(282, 33%, 88%), hsl(277, 41%, 88%), hsl(273, 48%, 87%), hsl(268, 55%, 87%), hsl(263, 63%, 86%), hsl(259, 70%, 86%), hsl(254, 77%, 86%), hsl(250, 85%, 86%), hsl(245, 92%, 86%), hsl(240, 100%, 86%))'
            },
            spacing :{
                '17.5':'4.375rem',
                '215.25':'53.813rem',
                '62.5':'15.625rem',
                '31.25':'7.813rem',
                '37.25':'9.313rem',
                '169':'42.25rem'
            }
        }
    },
    plugins: []
};
