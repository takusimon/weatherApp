import {
  brandIcon,
  searchIcon,
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


  content.append(intro, searchWrap, weatherContent);

  return { topBar, content };
})();
