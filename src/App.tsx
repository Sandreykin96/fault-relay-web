import React from "react";
import * as _ from "lodash";
import "./styles.css";
import { Application } from "./Application";
import { BodyWidget } from "./BodyWidget";

const App = () => {
  var app = new Application();
  return (
    <div className="App">
      <BodyWidget app={app} />
    </div>
  );
};

export default App;
