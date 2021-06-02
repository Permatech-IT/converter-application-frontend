import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Fileupload from "./component/Upload/upload";
import Process from "./component/Processing/processing";
import Download from "./component/Download/download";
function App() {
  

    return (
      <div className="App">
        <Router>
    <Route exact path="/" component={Fileupload} />
          <Route exact path="/processing" component={Process} />
          <Route exact path="/download" component={Download} />
          </Router>
       
      </div>
    );
  }

export default App;