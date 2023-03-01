import { randomCity } from "./randomCity";
import { wIO } from "./domItems";
import { makeQuery } from "../index";

wIO.menuSelection.addEventListener("click", () => {
  if (wIO.dataValLangTur.checked === true && languageSelection === 0) {
    languageSelection = 1;
    wIO.humidityText.innerText = "Nem:";
    wIO.feelsLikeText.innerText = "Hissedilen:";
    wIO.tempText.innerText = "Sıcaklık min/max:";
    makeQuery(wIO.cityVal.innerText);
  } else if (wIO.dataValLangEng.checked === true && languageSelection === 1) {
    languageSelection = 0;
    makeQuery(wIO.cityVal.innerText);
    wIO.humidityText.innerText = "Humidity:";
    wIO.feelsLikeText.innerText = "Feels like:";
    wIO.tempText.innerText = "temp Min/Max:";
  }

  if (wIO.dataValFah.checked === true && tempScales === 0) {
    tempScales = 1;
    makeQuery(wIO.cityVal.innerText);
    wIO.tempVal.classList.remove("celsius-selector");
    wIO.feelsLikeVal.classList.remove("celsius-selector");
    wIO.minVal.classList.remove("celsius-selector");
    wIO.maxVal.classList.remove("celsius-selector");
    wIO.tempVal.classList.add("fahrenheit-selector");
    wIO.feelsLikeVal.classList.add("fahrenheit-selector");
    wIO.minVal.classList.add("fahrenheit-selector");
    wIO.maxVal.classList.add("fahrenheit-selector");
  } else if (wIO.dataValCel.checked === true && tempScales === 1) {
    tempScales = 0;
    makeQuery(wIO.cityVal.innerText);
    wIO.tempVal.classList.remove("fahrenheit-selector");
    wIO.feelsLikeVal.classList.remove("fahrenheit-selector");
    wIO.minVal.classList.remove("fahrenheit-selector");
    wIO.maxVal.classList.remove("fahrenheit-selector");
    wIO.tempVal.classList.add("celsius-selector");
    wIO.feelsLikeVal.classList.add("celsius-selector");
    wIO.minVal.classList.add("celsius-selector");
    wIO.maxVal.classList.add("celsius-selector");
  }
});

let languageSelection = 0;
let tempScales = 0;
let API_KEY = "a055a31ad52ff33e427c426d8fe2eacb";
let lang = ["en", "tr"];
let tempUnit = ["metric", "standard"];
async function weatherFetch(cityInput = randomCity()) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=${API_KEY}&lang=${lang[languageSelection]}&units=${tempUnit[tempScales]}`
    );
    let parseJson = await response.json();
    if (parseJson.cod !== "404") {
      console.log(parseJson);
      wIO.cityVal.innerText = parseJson.name;
      wIO.tempVal.innerText = Math.floor(parseJson.main.temp);
      wIO.humidityVal.innerText = parseJson.main.humidity;
      wIO.feelsLikeVal.innerText = Math.floor(parseJson.main.feels_like);
      wIO.minVal.innerText = Math.floor(parseJson.main.temp_min);
      wIO.maxVal.innerText = Math.floor(parseJson.main.temp_max);
      wIO.descriptionVal.innerText = parseJson.weather[0].description;
    } else {
    }
  } catch (error) {
    console.error(error);
    console.log("API düzgün bir şekilde çekilemedi.");
  }
}

export { weatherFetch };
