import brandIcon from "./brandIcon.js";

export default (function () {
  const body = document.querySelector("body");

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

  const content = document.createElement("section");
  content.id = "content";

  body.append(topBar,content);
})();
