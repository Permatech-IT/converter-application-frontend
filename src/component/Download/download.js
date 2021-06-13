import React from "react";
import axios from "axios";
import arrow from "./../../assets/Capa_1.png";
import convert from "./../../assets/Group 4.png";
import csv from "./../../assets/Group6.png";
import "./download.css";

class Download extends React.Component {
  render() {
    // if (window.performance) {
    //     console.info("window.performance works fine on this browser");
    //   }
    //   console.info(performance.type);
    // if (performance.type == performance.TYPE_RELOAD) {
    //     axios.get('http://localhost:8000/delete')
    // }
    return (
      <div class="container">
        <h1>Converter: ASCII zu CSV</h1>
        <div class="frame3">
          <div class="center3">
            <img src={csv} />
            <p>Converted</p>
            <a class="dwnld-btn" href="http://converterapp.s3-website.eu-central-1.amazonaws.com:5000/download">
              {" "}
              Download CSV
            </a>
            <a class="dwnld-btn" href="/">
            Neue Conversion
            </a>
          </div>
        </div>
        <div class="section4">
          <div class="imgsec3">
            <img src={convert} />
          </div>
          <div class="listsec4">
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
export default Download;
