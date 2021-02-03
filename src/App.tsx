import React from "react";
import * as _ from "lodash";
import "./styles.css";
import { Application } from "./Application";
import { BodyWidget } from "./BodyWidget";

const App = () => {
  var app = new Application();
  return (
    <div className="App">
      <div style = {{marginBottom : 20, fontSize : 30 }}>
        FaultRelay
      </div>
      <BodyWidget app={app} />
    </div>
  );
};

export default App;
