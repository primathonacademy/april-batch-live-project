/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
            }
        }
    },
    plugins: []
};
