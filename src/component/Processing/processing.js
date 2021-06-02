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
        <h1>Convert Files from ASCII to CSV</h1>
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
export default Process;
