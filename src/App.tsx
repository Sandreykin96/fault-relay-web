import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as _ from "lodash";
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
  
} from "@projectstorm/react-diagrams";
import * as SRD from "@projectstorm/react-diagrams";
import "./styles.css";
import { TrayWidget } from "./components/TrayWidget";
import { TrayItemWidget } from "./components/TrayItemWidget";

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

  return (
    <SRD.DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />
  );
};

export class Application {
  protected activeModel: SRD.DiagramModel;
  protected diagramEngine: SRD.DiagramEngine;

  constructor() {
    this.diagramEngine = new SRD.DiagramEngine();
    this.diagramEngine.installDefaultFactories();
    this.activeModel = new SRD.DiagramModel();
  }

  public newModel() {
    this.activeModel = new SRD.DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeModel);
  }

  public getActiveDiagram(): SRD.DiagramModel {
    return this.activeModel;
  }

  public getDiagramEngine(): SRD.DiagramEngine {
    return this.diagramEngine;
  }
}

export interface BodyWidgetProps {
  app: Application;
}

export class BodyWidget extends React.Component<BodyWidgetProps> {
  render() {
    return (
      <div className = "Content">
        <TrayWidget>
          <TrayItemWidget
            model={{ type: "in" }}
            name="In Node"
            color="rgb(192,255,0)"
          />
          <TrayItemWidget
            model={{ type: "out" }}
            name="Out Node"
            color="rgb(0,192,255)"
          />
        </TrayWidget>
        <div className = "Layer"
          onDrop=
          {(event: { dataTransfer: { getData: (arg0: string) => string } }) => {
            var data = JSON.parse(
              event.dataTransfer.getData("storm-diagram-node")
            );
            var nodesCount = _.keys(
              this.props.app.getDiagramEngine().getDiagramModel().getNodes()
            ).length;

            var node: DefaultNodeModel = new DefaultNodeModel();
            if (data.type === "in") {
              node = new DefaultNodeModel(
                "Node " + (nodesCount + 1),
                "rgb(192,255,0)"
              );
              node.addInPort("In");
            } else {
              node = new DefaultNodeModel(
                "Node " + (nodesCount + 1),
                "rgb(0,192,255)"
              );
              node.addOutPort("Out");
            }
            var point = this.props.app
              .getDiagramEngine()
              .getRelativeMousePoint(event);
            node.setPosition(point.x, point.y);
            this.props.app.getDiagramEngine().getDiagramModel().addNode(node);
            this.forceUpdate();
          }}
          onDragOver=
          {(event: { preventDefault: () => void }) => {
            event.preventDefault();
          }}>
          <SRD.DiagramWidget
            className="srd-demo-canvas"
            smartRouting={true}           
            diagramEngine={this.props.app.getDiagramEngine()}
          />
        </div>
      </div>
    );
  }
}

const App = () => {
  var app = new Application();

  return (
    <div className="App">
      <h2>FaultRelay</h2>
      <BodyWidget app={app} />;
    </div>
  );
};

export default App;
