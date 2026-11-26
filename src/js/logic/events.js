import weatherUi from "../ui/staticelm.js";
import { isInputValid } from "./input.js";

const [topBar,content] = weatherUi;

const searchInput = content.querySelector("#search-input");
const searchError = content.querySelector("#search-error");

searchInput.addEventListener("input",()=>{
  if (isInputValid(searchInput.value)){
    searchError.textContent = "";
    searchError.className = "error";
  } else {
    showInputError();
  }
})


function showInputError(){
  searchError.textContent = "Seperate the City from Country/State with a comma";
  searchError.className = "error active";
}

export default weatherUi;