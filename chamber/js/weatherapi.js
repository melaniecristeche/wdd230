
// select HTML elements in the document
const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const windSpeed = document.querySelector('#windSpeed');
// const speedType = document.querySelector('#speed-type');
// const cf = document.querySelector("#tempType");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Argentina,AR&appid=f2f2ad01b4c35a18e025d561569710c4";


async function apiFetch(apiURL) {
    
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();

      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } 
  apiFetch(url);

function displayResults(weatherData){

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    // captionDesc.textContent = desc.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    // if (cf.textContent == "°C" | cf.textContent == ""){
    //   windSpeed.textContent = weatherData.wind.speed.toFixed(1);
    //   speedType.textContent = "mph"
    // } else{
    //   speedType.textContent = "km/h"
    //   windSpeed.textContent = (weatherData.wind.speed * 1.60934).toFixed(1);
    // };
  
}
