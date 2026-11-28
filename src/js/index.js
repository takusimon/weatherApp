import "../css/reset.css";
import "../css/style.css";

import weatherUi from "./logic/events.js";

(function(){
  const {topBar,content,bottomBar} = weatherUi;
  const body = document.querySelector("body");

  body.append(topBar,content,bottomBar);

})();
