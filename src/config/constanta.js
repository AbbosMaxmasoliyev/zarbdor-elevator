// src/config/config.js
const dev = {
    baseURL: "http://localhost:5000/",
};

const prod = {
    baseURL: "https://donargos-backend.onrender.com/",
};

const staging = {
    baseURL: "https://donargos-backend.onrender.com/",
};

const config =
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === "production"
        ? prod
        // eslint-disable-next-line no-undef
        : process.env.NODE_ENV === "staging"
            ? staging
            : dev;

export default config;
