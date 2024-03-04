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
                100: '25rem',
                137.5: '550px'
            },
            lineHeight: {
                tighter: '4rem',
                12.25: '49px',
                16: '64px',
                18: '72px'
            },
            padding: {
                45: '11.25rem',
                90: '22.5rem'
            },
            fontSize: {
                xxs: '0.625rem',
                '7.5xl': '80px'
            },
            screens: {
                '2xs': '375px',
                xs: '425px',
                '3xl': '1768px'
            },
            spacing: {
                31: '118px',
                33: '132px',
                12.5: '50px',
                16.5: '70px',
                19.5: '78px',
                39.5: '158px',
                34.5: '138px',
                43.5: '174px'
            }
        }
    },
    plugins: []
};
