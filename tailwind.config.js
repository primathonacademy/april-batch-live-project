/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                7: '28px'
            },
            borderRadius: {
                4: '32px'
            },
            colors: {
                normal: '#828796',
                hover: '#2f3750'
            }
        }
    },
    plugins: []
};
