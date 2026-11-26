import weatherUi from "../ui/staticelm.js";
import { cleanUserInput, isInputValid } from "./input.js";

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

searchButton.addEventListener("click",(event)=> {
  event.preventDefault();
  let cleanedInput;

  if(isInputValid(searchInput)){
    searchError.textContent = "";
    cleanedInput = cleanUserInput(searchInput.value);
  }
})
function showInputError(){
  searchError.textContent = "Seperate the City from Country/State with a comma";
}

export default weatherUi;