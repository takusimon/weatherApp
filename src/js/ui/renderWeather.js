import { cleanUserInput } from "../logic/input.js";
import {format} from "date-fns";
import {locationIcon,humidityIcon,windIcon,waterIcon,sunsetIcon} from "./svgIcons.js";

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

  //Details
  const detailsGrid = document.createElement("section");
  detailsGrid.id = "details-grid";

  const humidityCard = document.createElement("div");
  humidityCard.className = "detail-card";
  const humidityIconCont = document.createElement("span");
  humidityIconCont.className = "detail-icon";
  humidityIconCont.append(humidityIcon);
  const detailsCont = document.createElement("div");
  detailsCont.id = "details-cont";
  const humidityLabel = document.createElement("p");
  humidityLabel.className = "detail-label";
  humidityLabel.textContent = "HUMIDITY";
  const humidityValue = document.createElement("p");
  humidityValue.className = "detail-value";
  humidityValue.textContent = `${today.humidity}%`;
  detailsCont.append(humidityLabel, humidityValue);
  humidityCard.append(humidityIconCont, detailsCont);

  const windCard = document.createElement("div");
  windCard.className = "detail-card";
  const windIconCont = document.createElement("span");
  windIconCont.className = "detail-icon";
  windIconCont.append(windIcon);
  const windDetailsCont = document.createElement("div");
  windDetailsCont.id = "details-cont";
  const windLabel = document.createElement("p");
  windLabel.className = "detail-label";
  windLabel.textContent = "WIND";
  const windValue = document.createElement("p");
  windValue.className = "detail-value";
  windValue.textContent = today.windspeed;
  windDetailsCont.append(windLabel, windValue);
  windCard.append(windIconCont, windDetailsCont);

  const precipCard = document.createElement("div");
  precipCard.className = "detail-card";
  const precipIconCont = document.createElement("span");
  precipIconCont.className = "detail-icon";
  precipIconCont.append(waterIcon);
  const precipDetailsCont = document.createElement("div");
  precipDetailsCont.id = "details-cont";
  const precipLabel = document.createElement("p");
  precipLabel.className = "detail-label";
  precipLabel.textContent = "PRECIPITATION";
  const precipValue = document.createElement("p");
  precipValue.className = "detail-value";
  precipValue.textContent = today.precip;
  precipDetailsCont.append(precipLabel, precipValue);
  precipCard.append(precipIconCont, precipDetailsCont);

  const sunsetCard = document.createElement("div");
  sunsetCard.className = "detail-card";
  const sunsetIconCont = document.createElement("span");
  sunsetIconCont.className = "detail-icon";
  sunsetIconCont.append(sunsetIcon);
  const sunsetDetailsCont = document.createElement("div");
  sunsetDetailsCont.id = "details-cont";
  const sunsetLabel = document.createElement("p");
  sunsetLabel.className = "detail-label";
  sunsetLabel.textContent = "SUNSET";
  const sunsetValue = document.createElement("p");
  sunsetValue.className = "detail-value";
  sunsetValue.textContent = today.sunset;
  sunsetDetailsCont.append(sunsetLabel, sunsetValue);
  sunsetCard.append(sunsetIconCont, sunsetDetailsCont);

  detailsGrid.append(humidityCard, windCard,precipCard,sunsetCard);


  conditionsContainer.append(heroConditions,heroFeels);
  temperatureRow.append(temperature, conditionsContainer)
  placeRow.append(locationMark,heroLocation);
  heroCopy.append(placeRow,heroCity,heroDate, temperatureRow);
  heroCard.append(heroCopy,heroWeatherImg);


  weatherContent.append(heroCard,detailsGrid);
  
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