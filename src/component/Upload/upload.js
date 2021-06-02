import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import arrow from "./../../assets/Capa_1.png";
import convert from "./../../assets/Group 4.png";
import icon1 from "./../../assets/Group 5.png";
import "./upload.css";
// import download from "downloadjs";

function Fileupload() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [showText, setShowText] = useState(false);
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://ec2-54-93-52-53.eu-central-1.compute.amazonaws.com:8000/upload", formData);
      alert("File Has been Uploaded");
      setShowText(true);
      console.log(res);
    } catch (ex) {
      alert("Please select a valid ascii file !!");
      console.log(ex);
    }
  };

  // const processFile = async (e) => {

  //   try {
  //     const res = await axios.post("http://localhost:8000/process");
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  return (
    <div class="container">
      <h1>Convert Files from ASCII to CSV</h1>
      <div class="frame">
        <div class="brdr">
          <div class="icon1">
            <img class="icon1img" src={icon1} />
          </div>
          <div class="center">
            <div class="dropzone">
              <label>
                <input
                  type="file"
                  className="upload-input one"
                  onChange={saveFile}
                  accept=".asc"
                />
                Choose File
              </label>
            </div>
            <button className="upload-btn" onClick={uploadFile}>
              Upload
            </button>
          </div>
        </div>
      </div>
      <br></br>
      {showText && (
        <div>
          <a class="convert-btn" href="/processing">
            Convert To CSV
          </a>
        </div>
      )}
      <div class="section2">
        <div class="imgsec">
          <img src={convert} />
        </div>
        <div class="listsec">
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

export default Fileupload;
