/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '2.5xl': '1.75rem'
            },
            borderRadius: {
                4: '2rem'
            },
            colors: {
                'light-gray': '#828796',
                'dark-gray': '#2f3750'
            },
            height: {
                'navbar-mobile': '97vh',
                'toggle-span': '0.1875rem'
            }
        }
    },
    plugins: []
};
