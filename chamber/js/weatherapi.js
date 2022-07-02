
// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');


const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=def28b87d1cd75a04386f35482347259"

//  api.openweathermap.org/data/2.5/forecast/daily?lat=39.2502&lon=-111.751&cnt=7&appid=a1cdf4d637caf46a9288686067728afa&units=imperial


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
  
}



