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
        <h1>Convert Files from ASCII to CSV</h1>
        <div class="frame3">
          <div class="center3">
            <img src={csv} />
            <p>Converted</p>
            <a class="dwnld-btn" href="http://localhost:8000/download">
              {" "}
              download
            </a>
            <a class="dwnld-btn" href="/">
              Convert Again
            </a>
          </div>
        </div>
        <div class="section4">
          <div class="imgsec3">
            <img src={convert} />
          </div>
          <div class="listsec4">
            <ol>
              <li>Upload your ASCII file to the online converter.</li>
              <li> It will instantly start the extraction process.</li>
              <li>
                {" "}
                Wait for the converter to finish and download your CSV file.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default Download;
