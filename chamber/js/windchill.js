const currentTemp = parseFloat(document.getElementById("currentTemp").innerHTML);

const windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
const windChill = document.getElementById("windChill");

// console.log(currentTemp)
// console.log(windSpeed)

if (currentTemp <= 50 || windSpeed < 3) {

    const windChill_f = 35.74 + (0.6215 * currentTemp) - (35.75 * windSpeed**0.16) + (0.4275 * currentTemp * windSpeed**0.16);
    windChill.innerHTML = Math.round(windChill_f);

}

else {
    windChill.innerHTML = "N/A";
}