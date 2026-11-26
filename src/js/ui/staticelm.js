import brandIcon from "./brandIcon.js";

export default (function () {
  const body = document.querySelector("body");

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
  introCopy.textContent = "Search Any City in the world for a clear simple forecast.";
  
  intro.append(eyebrow,heading,introCopy);

  content.append(intro)

  body.append(topBar,content);
})();
