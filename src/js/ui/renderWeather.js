import { cleanUserInput } from "../logic/input.js";
import {format} from "date-fns";
import {locationIcon} from "./svgIcons.js";

export function renderWeather (unitData){
   //weather Content Section
  const weatherContent = document.querySelector("#weather-content");
  weatherContent.textContent = "";
  

  const [city,countryOrState] = cleanUserInput(unitData.address)
  const today = unitData.days[0];

  const heroCard = document.createElement("section");
  heroCard.id = "hero-card";

  const heroCopy = document.createElement("div");
  heroCopy.id = "hero-copy";
  
  const placeRow = document.createElement("div");
  placeRow.id = "place-row";

  const locationMark = document.createElement("span");
  locationMark.id = "location-mark";
  locationMark.append(locationIcon);

  const heroLocation = document.createElement("span");
  heroLocation.id = "hero-location";
  heroLocation.textContent = countryOrState;

  const heroCity = document.createElement("h2");
  heroCity.id = "hero-city";
  heroCity.textContent = city;

  const heroDate = document.createElement("p");
  heroDate.id = "hero-date";
  heroDate.textContent = getDate(today.datetime,"full");

  const temperatureRow = document.createElement("div");
  temperatureRow.id = "temperature-row";

  const temperature = document.createElement("span");
  temperature.id = "temperature";
  temperature.textContent = `${today.temp}°`;

  const conditionsContainer = document.createElement("div");
  conditionsContainer.id = "conditions-container";

  const heroConditions = document.createElement("p");
  heroConditions.id = "hero-conditions";
  heroConditions.textContent = today.conditions;

  const heroFeels = document.createElement("p");
  heroFeels.id = "hero-feels";
  heroFeels.textContent = `Feels like ${today.feelslike}°`;

  const heroWeatherImg = document.createElement("div");
  heroWeatherImg.id = "hero-weather-img-cont";

  

  conditionsContainer.append(heroConditions,heroFeels);
  temperatureRow.append(temperature, conditionsContainer)
  placeRow.append(locationMark,heroLocation);
  heroCopy.append(placeRow,heroCity,heroDate, temperatureRow);
  heroCard.append(heroCopy,heroWeatherImg);


  weatherContent.append(heroCard);
  
}

function getDate (dateString,dateAppearence){
  console.log(dateString);
  const slashDateFormat = dateString.split("-").join("/");
  const weatherDate = new Date(slashDateFormat);
  console.log(weatherDate);
  if (dateAppearence === "day") {
    return format(weatherDate,"EEE");
  } else if (dateAppearence === "full") {
    console.log(weatherDate,weatherDate.getTime())
    return format(weatherDate,"EEEE MMMM d");
  }
}