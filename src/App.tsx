import React from "react";
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

import { GeneratorNodeModel } from "./components/generator-node/GeneratorNodeModel";
import { GeneratorNodeFactory } from "./components/generator-node/GeneratorNodeFactory";
import { GeneratorPortFactory } from "./components/generator-node/GeneratorPortFactory";
import { GeneratorPortModel } from "./components/generator-node/GeneratorPortModel";

import { TransformerNodeModel } from "./components/transformer-node/TransformerNodeModel";
import { TransformerNodeFactory } from "./components/transformer-node/TransformerNodeFactory";
import { TransformerPortFactory } from "./components/transformer-node/TransformerPortFactory";
import { TransformerPortModel } from "./components/transformer-node/TransformerPortModel";

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

    // register some other factories as well
    this.diagramEngine.registerPortFactory(new GeneratorPortFactory("generator", config => new GeneratorPortModel()));
    this.diagramEngine.registerNodeFactory(new GeneratorNodeFactory());
    this.diagramEngine.registerPortFactory(new TransformerPortFactory("transformer", config => new TransformerPortModel()));
    this.diagramEngine.registerNodeFactory(new TransformerNodeFactory());


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
      <div className="Content">
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
          <TrayItemWidget
            model={{ type: "generator" }}
            name="Генератор"
            color="#9f1d87"
          />
          <TrayItemWidget
            model={{ type: "transformer" }}
            name="Трансформатор"
            color="#9f1d87"
          />
        </TrayWidget>
        <div
          className="Layer"
          onDrop={(event: {
            dataTransfer: { getData: (arg0: string) => string };
          }) => {
            var data = JSON.parse(
              event.dataTransfer.getData("storm-diagram-node")
            );
            var nodesCount = _.keys(
              this.props.app.getDiagramEngine().getDiagramModel().getNodes()
            ).length;

            console.log("Data type = " + data.type)

            var node: any = null;
            if (data.type == "in") {
              node = new DefaultNodeModel(
                "Node " + (nodesCount + 1),
                "rgb(192,255,0)"
              );
              node.addInPort("In");
            }
            if (data.type == "generator") {
              node = new GeneratorNodeModel();
            } if (data.type == "transformer") {
              node = new TransformerNodeModel();
            } 
            
            if(data.type =="out") {
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
          onDragOver={(event: { preventDefault: () => void }) => {
            event.preventDefault();
          }}
        >
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
      <div style = {{marginBottom : 20, fontSize : 30 }}>
        FaultRelay
      </div>
      <BodyWidget app={app} />
    </div>
  );
};

export default App;
