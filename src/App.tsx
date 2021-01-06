import React from 'react';
import logo from './logo.svg';
import './App.css';
import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';
import * as SRD from "@projectstorm/react-diagrams";
import "./styles.css";

const ElmArchitecture = () => {
// create an instance of the engine with all the defaults
var engine = new SRD.DiagramEngine();

engine.installDefaultFactories();
// create a default node
var node1 = new DefaultNodeModel("Model", "rgb(0,192,255)");
let port1 = node1.addOutPort(" ");
node1.setPosition(100, 100);

//3-B) create another default node
var node2 = new DefaultNodeModel("view", "rgb(192,255,0)");
let port2 = node2.addInPort("Model");
let port3 = node2.addOutPort("Html");
node2.setPosition(400, 100);

// link the ports
let link1 = port1.link(port2);

const model = new DiagramModel();
model.addAll(node1, node2, link1);

engine.setDiagramModel(model);

return <SRD.DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
}

function App() {
  return (
    <div className="App">
      <h1>FaultRelay</h1>
      <h2>Расчеты уставок РЗА</h2>
      <ElmArchitecture />
    </div>
  );
}

export default App;
