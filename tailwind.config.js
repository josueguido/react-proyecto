/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            height: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
                principal: "64px",
            },
        },
    },
    plugins: [require("tailwindcss-neumorphism")],
};
