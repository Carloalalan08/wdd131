// place.js - Updates footer and calculates wind chill

document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set last modified date in footer
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Wind chill calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
        } else {
            return "N/A";
        }
    }

    // Get static temperature and wind speed
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

    // Display wind chill
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed) + "°C";
});
