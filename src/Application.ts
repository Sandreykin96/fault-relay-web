import { GeneratorNodeModel } from "./components/generator-node/GeneratorNodeModel";
import { GeneratorNodeFactory } from "./components/generator-node/GeneratorNodeFactory";
import { GeneratorPortFactory } from "./components/generator-node/GeneratorPortFactory";
import { GeneratorPortModel } from "./components/generator-node/GeneratorPortModel";

import { TransformerNodeModel } from "./components/transformer-node/TransformerNodeModel";
import { TransformerNodeFactory } from "./components/transformer-node/TransformerNodeFactory";
import { TransformerPortFactory } from "./components/transformer-node/TransformerPortFactory";
import { TransformerPortModel } from "./components/transformer-node/TransformerPortModel";

import { TransformerNodeModel3 } from "./components/transformer-node 3/TransformerNodeModel3";
import { TransformerNodeFactory3 } from "./components/transformer-node 3/TransformerNodeFactory3";
import { TransformerPortFactory3 } from "./components/transformer-node 3/TransformerPortFactory3";
import { TransformerPortModel3 } from "./components/transformer-node 3/TransformerPortModel3";

import { SwitchNodeModel } from "./components/switch-node/SwitchNodeModel";
import { SwitchNodeFactory } from "./components/switch-node/SwitchNodeFactory";
import { SwitchPortFactory } from "./components/switch-node/SwitchPortFactory";
import { SwitchPortModel } from "./components/switch-node/SwitchPortModel";

import { ReactorNodeModel } from "./components/reactor-node/ReactorNodeModel";
import { ReactorNodeFactory } from "./components/reactor-node/ReactorNodeFactory";
import { ReactorPortFactory } from "./components/reactor-node/ReactorPortFactory";
import { ReactorPortModel } from "./components/reactor-node/ReactorPortModel";

import { DoubleReactorNodeModel } from "./components/doublereactor-node/DoubleReactorNodeModel";
import { DoubleReactorNodeFactory } from "./components/doublereactor-node/DoubleReactorNodeFactory";
import { DoubleReactorPortFactory } from "./components/doublereactor-node/DoubleReactorPortFactory";
import { DoubleReactorPortModel } from "./components/doublereactor-node/DoubleReactorPortModel";

import { DividerNodeModel } from "./components/divider-node/DividerNodeModel";
import { DividerNodeFactory } from "./components/divider-node/DividerNodeFactory";
import { DividerPortFactory } from "./components/divider-node/DividerPortFactory";
import { DividerPortModel } from "./components/divider-node/DividerPortModel";

import { LineNodeModel } from "./components/line-node/LineNodeModel";
import { LineNodeFactory } from "./components/line-node/LineNodeFactory";
import { LinePortFactory } from "./components/line-node/LinePortFactory";
import { LinePortModel } from "./components/line-node/LinePortModel";

import { GroundNodeModel } from "./components/ground-node/GroundNodeModel";
import { GroundNodeFactory } from "./components/ground-node/GroundNodeFactory";
import { GroundPortFactory } from "./components/ground-node/GroundPortFactory";
import { GroundPortModel } from "./components/ground-node/GroundPortModel";

import { ConnectorNodeModel } from "./components/connector-node/ConnectorNodeModel";
import { ConnectorNodeFactory } from "./components/connector-node/ConnectorNodeFactory";
import { ConnectorPortFactory } from "./components/connector-node/ConnectorPortFactory";
import { ConnectorPortModel } from "./components/connector-node/ConnectorPortModel";

import { LoadNodeModel } from "./components/load-node/LoadNodeModel";
import { LoadNodeFactory } from "./components/load-node/LoadNodeFactory";
import { LoadPortFactory } from "./components/load-node/LoadPortFactory";
import { LoadPortModel } from "./components/load-node/LoadPortModel";

import * as SRD from "@projectstorm/react-diagrams";

export class Application {
    protected activeModel: SRD.DiagramModel;
    protected diagramEngine: SRD.DiagramEngine;
  
    constructor() {
      this.diagramEngine = new SRD.DiagramEngine();
      this.diagramEngine.installDefaultFactories();
  
      this.diagramEngine.registerPortFactory(new GeneratorPortFactory("generator", config => new GeneratorPortModel()));
      this.diagramEngine.registerNodeFactory(new GeneratorNodeFactory());
  
      this.diagramEngine.registerPortFactory(new TransformerPortFactory("transformer", config => new TransformerPortModel()));
      this.diagramEngine.registerNodeFactory(new TransformerNodeFactory());
  
      this.diagramEngine.registerPortFactory(new TransformerPortFactory3("transformer3", config => new TransformerPortModel3()));
      this.diagramEngine.registerNodeFactory(new TransformerNodeFactory3());
  
      this.diagramEngine.registerPortFactory(new SwitchPortFactory("switch", config => new SwitchPortModel()));
      this.diagramEngine.registerNodeFactory(new SwitchNodeFactory());
  
      this.diagramEngine.registerPortFactory(new ReactorPortFactory("reactor", config => new ReactorPortModel()));
      this.diagramEngine.registerNodeFactory(new ReactorNodeFactory());
  
      this.diagramEngine.registerPortFactory(new DoubleReactorPortFactory("doublereactor", config => new DoubleReactorPortModel()));
      this.diagramEngine.registerNodeFactory(new DoubleReactorNodeFactory());
  
      this.diagramEngine.registerPortFactory(new DividerPortFactory("divider", config => new DividerPortModel()));
      this.diagramEngine.registerNodeFactory(new DividerNodeFactory());
  
      this.diagramEngine.registerPortFactory(new LinePortFactory("line", config => new LinePortModel()));
      this.diagramEngine.registerNodeFactory(new LineNodeFactory());
  
      this.diagramEngine.registerPortFactory(new GroundPortFactory("ground", config => new GroundPortModel()));
      this.diagramEngine.registerNodeFactory(new GroundNodeFactory());
      
      this.diagramEngine.registerPortFactory(new ConnectorPortFactory("connector", config => new ConnectorPortModel()));
      this.diagramEngine.registerNodeFactory(new ConnectorNodeFactory());
  
      this.diagramEngine.registerPortFactory(new LoadPortFactory("load", config => new LoadPortModel()));
      this.diagramEngine.registerNodeFactory(new LoadNodeFactory());
  
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