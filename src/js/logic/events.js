import weatherUi from "../ui/staticelm.js";
import { cleanUserInput, isInputValid } from "./input.js";
import { fetchTempData, parseFetchedData } from "./data.js";
import { renderWeather } from "../ui/renderWeather.js";
const {content} = weatherUi;

const searchInput = content.querySelector("#search-input");
const searchError = content.querySelector("#search-error");
const searchButton = content.querySelector("#search-button");
const form = content.querySelector("#search-form");
const circle = content.querySelector("#loading-circle");

let parsedWeatherData;

searchInput.addEventListener("input",()=>{
  if (isInputValid(searchInput.value)){
    searchError.textContent = "";
  } else {
    showInputError();
  }
})

searchButton.addEventListener("click",async (event)=> {
  event.preventDefault();
  
  if(isInputValid(searchInput.value)){
    const cleanedInput = cleanUserInput(searchInput.value);
    let weatherData;
    searchError.textContent = "";
    form.reset();
    circle.classList.add("visible");

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      
      weatherData = await fetchTempData(cleanedInput);
    } catch (error) {
      searchError.textContent = error.message;
      return;
    }
    
    parsedWeatherData = await parseFetchedData(weatherData);
    
    circle.classList.remove("visible");
    
    renderWeather(parsedWeatherData[1]);
  } else {
    showInputError();
  }
})

function showInputError(){
  if (searchInput.value.length===0){
    searchError.textContent = "Input is Empty!";
  } else if (!isInputValid(searchInput.value)){
    searchError.textContent = "Seperate the City from Country/State with a comma";
  }
}

export default weatherUi;