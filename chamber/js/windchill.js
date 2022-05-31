const temperature = document.getElementById("temperature");

const windSpeed = document.getElementById("windSpeed");
const windChill = document.getElementById("windChill");

if (temperature <= 50 || windSpeed > 3) {

    const windChill_f = 35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed**0.16);
    windChill.innerHTML = windChill_f;

}

else {
    windChill.innerHTML = "N/A";
}