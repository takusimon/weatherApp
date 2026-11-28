import {
  brandIcon,
  searchIcon,
  locationIcon,
  humidityIcon,
  windIcon,
  waterIcon,
  sunsetIcon
} from "./svgIcons.js";

export default (function () {
  //Begin Header Section
  const topBar = document.createElement("header");
  topBar.id = "topbar";

  const brand = document.createElement("a");
  brand.id = "brand";
  brand.textContent = "Weather";
  const brandMark = document.createElement("span");
  brandMark.id = "brand-mark";

  brandMark.append(brandIcon);

  brand.prepend(brandMark);

  const tagLine = document.createElement("p");
  tagLine.id = "tag-line";
  tagLine.textContent = "Your day,beautifully forcasted";

  topBar.append(brand, tagLine);

  // Begin Content Section
  const content = document.createElement("section");
  content.id = "content";

  const intro = document.createElement("div");
  intro.id = "intro";

  const eyebrow = document.createElement("p");
  eyebrow.id = "eyebrow";
  eyebrow.textContent = "Local Weather";

  const heading = document.createElement("h1");
  heading.id = "heading";
  heading.textContent = "What's the weather like?";

  const introCopy = document.createElement("p");
  introCopy.id = "intro-copy";
  introCopy.textContent =
    "Search Any City in the world for a clear simple forecast.";

  intro.append(eyebrow, heading, introCopy);

  const searchWrap = document.createElement("div");
  searchWrap.id = "search-wrap";

  const searchForm = document.createElement("form");
  searchForm.id = "search-form";
  searchForm.noValidate = true;

  const searchLabel = document.createElement("label");
  searchLabel.id = "search-label";
  searchLabel.htmlFor = "search-input";
  searchLabel.append(searchIcon);

  const searchInput = document.createElement("input");
  searchInput.id = "search-input";
  searchInput.type = "search";
  searchInput.placeholder =
    "City,Country/State e.g. Paris,France or Frisco,Texas";

  const SearchButton = document.createElement("button");
  SearchButton.id = "search-button";
  SearchButton.textContent = "Search";

  const SearchErr = document.createElement("span");
  SearchErr.id = "search-error";
  SearchErr.textContent = "";

  searchForm.append(searchLabel, searchInput, SearchButton);
  searchWrap.append(searchForm, SearchErr);

  //weather Content Section
  const weatherContent = document.createElement("div");
  weatherContent.id = "weather-content";

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
  heroLocation.textContent = "Bulawayo,Zimbabwe";

  const heroCity = document.createElement("h2");
  heroCity.id = "hero-city";
  heroCity.textContent = "Bulawayo";

  const heroDate = document.createElement("p");
  heroDate.id = "hero-date";
  heroDate.textContent = "Thursday,November 26";

  const temperatureRow = document.createElement("div");
  temperatureRow.id = "temperature-row";

  const temperature = document.createElement("span");
  temperature.id = "temperature";
  temperature.textContent = `68°`;

  const conditionsContainer = document.createElement("div");
  conditionsContainer.id = "conditions-container";

  const heroConditions = document.createElement("p");
  heroConditions.id = "hero-conditions";
  heroConditions.textContent = "Overcast";

  const heroFeels = document.createElement("p");
  heroFeels.id = "hero-feels";
  heroFeels.textContent = `Feels like ${51}°`;

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
  humidityValue.textContent = "84%";

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
  windValue.textContent = "84%";
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
  precipValue.textContent = "84%";
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
  sunsetValue.textContent = "84%";
  sunsetDetailsCont.append(sunsetLabel, sunsetValue);
  sunsetCard.append(sunsetIconCont, sunsetDetailsCont);

  detailsGrid.append(humidityCard, windCard,precipCard,sunsetCard);

  conditionsContainer.append(heroConditions, heroFeels);
  temperatureRow.append(temperature, conditionsContainer);
  placeRow.append(locationMark, heroLocation);
  heroCopy.append(placeRow, heroCity, heroDate, temperatureRow);
  heroCard.append(heroCopy, heroWeatherImg);

  weatherContent.append(heroCard, detailsGrid);

  content.append(intro, searchWrap, weatherContent);

  return { topBar, content };
})();
