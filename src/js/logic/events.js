import weatherUi from "../ui/staticelm.js";
import { cleanUserInput, isInputValid } from "./input.js";
import { fetchTempData, parseFetchedData } from "./data.js";
const [topBar,content] = weatherUi;

const searchInput = content.querySelector("#search-input");
const searchError = content.querySelector("#search-error");
const searchButton = content.querySelector("#search-button");

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
    //loading animation
    try {
      console.log("Fetching Data...");
      weatherData = await fetchTempData(cleanedInput);
    } catch (error) {
      searchError.textContent = error.message;
      return;
    }
    console.log("Parsing Data...")
    const parsedWeatherData = await parseFetchedData(weatherData);

    console.log(parsedWeatherData);
  }
})

function showInputError(){
  searchError.textContent = "Seperate the City from Country/State with a comma";
}

export default weatherUi;