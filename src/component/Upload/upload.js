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
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://ec2-3-123-189-165.eu-central-1.compute.amazonaws.com:5000/upload", formData);
      alert("Die Datei wurde erfolgreich hochgeladen.");
      setShowText(true);
      console.log(res);
    } catch (ex) {
      alert("Bitte eine gültige ASCII-Datei auswählen!");
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
      <h1>Converter: ASCII zu CSV</h1>
      <div class="frame">
        <div class="brdr">
          <div class="icon1">
            <img class="icon1img" src={icon1} />
          </div>
          <div class="center">
            <div class="dropzone">
              <label>
                 <label htmlFor="filePicker" style={{ background:"#F5F5F5", padding:"5px 10px" }}>
              Datei auswählen
             </label>
                <input
                  type="file"
                  className="upload-input one"
                  onChange={saveFile}
                  accept=".asc"
                  id="filePicker" 
                  style={{visibility:"hidden"}}

                />
<p><b>
  {fileName}
  </b>
</p>

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
            Convert zu CSV
          </a>
        </div>
      )}
      <div class="section2">
        <div class="imgsec">
          <img src={convert} />
        </div>
        <div class="listsec">
          <ol>
            <li>ASCII-Datei auswählen und auf Upload klicken.</li>
            <li>Conversion zu CSV per Klick starten.</li>
            <li>
              {" "}
              Nach Ende des Conversion-Vorgangs steht die CSV-Datei zum Download
              bereit.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Fileupload;
