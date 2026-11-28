const svgNS = "http://www.w3.org/2000/svg";

const brandIcon = document.createElementNS(svgNS, "svg");
brandIcon.id = "brand-icon";
brandIcon.viewBox.baseVal.x = 0;
brandIcon.viewBox.baseVal.y = 0;
brandIcon.viewBox.baseVal.width = 24;
brandIcon.viewBox.baseVal.height = 24;
brandIcon.setAttribute("height", "2rem");
brandIcon.setAttribute("width", "2rem");

const brandIconPath = document.createElementNS(svgNS, "path");

const brandD =
  "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";

brandIconPath.setAttribute("d", brandD);

brandIcon.append(brandIconPath);

const searchIcon = document.createElementNS(svgNS, "svg");
searchIcon.id = "search-icon";
searchIcon.viewBox.baseVal.x = 0;
searchIcon.viewBox.baseVal.y = 0;
searchIcon.viewBox.baseVal.width = 24;
searchIcon.viewBox.baseVal.height = 24;
searchIcon.setAttribute("height", "1.5rem");
searchIcon.setAttribute("width", "1.5rem");
searchIcon.setAttribute("fill", "black");

const searchIconPath = document.createElementNS(svgNS, "path");

const searchD =
  "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";

searchIconPath.setAttribute("d", searchD);

searchIcon.append(searchIconPath);

const locationIcon = document.createElementNS(svgNS, "svg");
locationIcon.id = "location-icon";
locationIcon.setAttribute("viewBox", "0 0 24 24");
locationIcon.setAttribute("width", "1rem");
locationIcon.setAttribute("height", "1rem");

const locationIconPath = document.createElementNS(svgNS, "path");

const locationD =
  "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z";

locationIconPath.setAttribute("d", locationD);

locationIcon.append(locationIconPath);

const humidityIcon = document.createElementNS(svgNS,"svg");
humidityIcon.id = "humidity-icon";
humidityIcon.setAttribute("viewBox", "0 0 24 24");
humidityIcon.setAttribute("width", "2rem");
humidityIcon.setAttribute("height", "2rem");

const humidityIconPath = document.createElementNS(svgNS, "path");

const humidityD = "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z";

humidityIconPath.setAttribute("d",humidityD);

humidityIcon.append(humidityIconPath);


const windIcon = document.createElementNS(svgNS,"svg");
windIcon.id = "wind-icon";
windIcon.setAttribute("viewBox", "0 0 24 24");
windIcon.setAttribute("width", "2rem");
windIcon.setAttribute("height", "2rem");

const windIconPath = document.createElementNS(svgNS, "path");

const windD ="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" ;

windIconPath.setAttribute("d",windD);

windIcon.append(windIconPath);


const waterIcon = document.createElementNS(svgNS,"svg");
waterIcon.id = "water-icon";
waterIcon.setAttribute("viewBox", "0 0 24 24");
waterIcon.setAttribute("width", "2rem");
waterIcon.setAttribute("height", "2rem");

const waterIconPath = document.createElementNS(svgNS, "path");

const waterD ="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";

waterIconPath.setAttribute("d",waterD);

waterIcon.append(waterIconPath);


const sunsetIcon = document.createElementNS(svgNS,"svg");
sunsetIcon.id = "sunset-icon";
sunsetIcon.setAttribute("viewBox", "0 0 24 24");
sunsetIcon.setAttribute("width", "2rem");
sunsetIcon.setAttribute("height", "2rem");

const sunsetIconPath = document.createElementNS(svgNS, "path");

const sunsetD ="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z";

sunsetIconPath.setAttribute("d",sunsetD);

sunsetIcon.append(sunsetIconPath);


const loadingCircle = document.createElementNS(svgNS,"svg");
loadingCircle.setAttribute("width","280");
loadingCircle.setAttribute("height","280");

const circle = document.createElementNS(svgNS,"circle");
circle.id = "loading-circle";
circle.setAttribute("cx","140");
circle.setAttribute("cy","140");
circle.setAttribute("r","70");
circle.classList.add("spinning");

loadingCircle.appendChild(circle)

export {brandIcon,searchIcon,locationIcon,humidityIcon,windIcon,waterIcon,sunsetIcon,loadingCircle}

