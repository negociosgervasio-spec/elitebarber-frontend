// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // ajuste conforme sua estrutura
    ],
    theme: {
        extend: {
            colors: {
                brand: "#1E40AF", // azul principal
            },
        },
    },
    plugins: [],
}
