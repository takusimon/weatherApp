import "../css/reset.css";
import "../css/style.css";

import uiElements from "./ui/staticelm.js";

(function(){
  const [topBar,content] = uiElements;
  const body = document.querySelector("body");

  body.append(topBar,content);

})();
