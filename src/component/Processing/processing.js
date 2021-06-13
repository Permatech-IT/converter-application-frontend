import React from "react";
import arrow from "./../../assets/Capa_1.png";
import convert from "./../../assets/Group 4.png";
import icon1 from "./../../assets/Group 5.png";
import "./processing.css";
class Process extends React.Component {
  render() {
    window.setTimeout(function () {
      window.location.href = "/download";
    }, 15000);

    return (
      <div class="container">
        <h1>Converter: ASCII zu CSV</h1>
        <div class="frame1">
          <div class="center1">
            <img src={convert} />
            <p>Converting...</p>
          </div>
        </div>
        <div class="section3">
          <div class="imgsec1">
            <img src={convert} />
          </div>
          <div class="listsec1">
            <ol>
            <li>ASCII-Datei auswählen und auf Upload klicken.

</li>
            <li>Conversion zu CSV per Klick starten.</li>
            <li>
              {" "}
              Nach Ende des Conversion-Vorgangs steht die CSV-Datei zum Download bereit.
            </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Process;
