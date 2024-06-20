/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.jsx",
    ],
    theme: {
       
        extend: { colors: {
            'text': '#090101',
            'background': '#fffafb',
            'primary': '#cf444e',
            'secondary': '#f7d378',
            'accent': '#f4e948',
        },},
    },
    plugins: [],
}

