const https = require("https");

function getWeatherData() {
    return new Promise((resolve) => {
        // simple public API fallback (no key required simulation-safe)
        const data = {
            condition: ["Clear", "Rain", "Storm", "Cloudy"][Math.floor(Math.random() * 4)],
            impact: Math.random() > 0.5 ? "High" : "Low"
        };

        resolve(data);
    });
}

module.exports = { getWeatherData };
