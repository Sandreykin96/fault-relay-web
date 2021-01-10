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
//Изменения в app.tsx которые нужно сделать указаны в комментраниях на русском. 
//Нужно для каждого из этих элементов сделать наподобие transformer=node или generator-node
//Пока что нужно в папке трансформер ноде 3 измененить все файлы. по факту тебе будет нужно переименовать все файлы а также отредактировать 
//Точно так же импортировать 4 штуки: ТNodeModel, NodeFactory, PortFacrory, PortModel Для каждого элемента


import {Connector, GeneratorIcon, TransformerIcon, 
  ThreeTransformerIcon, Switch, Reactor, 
  DoubleReactor, Divider, Line, Ground, Load} from  "./components/icons/Icons"

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
    //Тут добавить по образу и подобию  PortFactory и NodeFactory


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
        <div style = {{marginLeft : 10, marginRight : 10, height: 680, overflowY:'scroll'}}>
        <TrayWidget>
          <TrayItemWidget
            model={{ type: "generator" }}
            name="Генератор"
            color="#9f1d87"
            icon = {GeneratorIcon()}
          />
          <TrayItemWidget
            model={{ type: "transformer" }}
            name="Двухобмоточный трансформатор"
            color="#9f1d87"
            icon = {TransformerIcon()}
          />
           <TrayItemWidget
            model={{ type: "transformer3" }}
            name="Трехобмоточный трансформатор"
            color="#9f1d87"
            icon = {ThreeTransformerIcon()}
          />
           <TrayItemWidget
            model={{ type: "switch" }}
            name="Выключатель"
            color="#9f1d87"
            icon = {Switch()}
          />
          <TrayItemWidget
            model={{ type: "reactor" }}
            name="Реактор"
            color="#9f1d87"
            icon = {Reactor()}
          />
          <TrayItemWidget
            model={{ type: "doublereactor" }}
            name="Сдвоенный реактор"
            color="#9f1d87"
            icon = {DoubleReactor()}
          />
          <TrayItemWidget
            model={{ type: "divider" }}
            name="Разъединитель"
            color="#9f1d87"
            icon = {Divider()}
          />
           <TrayItemWidget
            model={{ type: "line" }}
            name="Линия"
            color="#9f1d87"
            icon = {Line()}
          />
          <TrayItemWidget
            model={{ type: "ground" }}
            name="Земля"
            color="#9f1d87"
            icon = {Ground()}
          />

          <TrayItemWidget
            model={{ type: "connector" }}
            name="Шина"
            color="#9f1d87"
            icon = {Connector()}
          />

          <TrayItemWidget
            model={{ type: "load" }}
            name="Нагрузка"
            color="#9f1d87"
            icon = {Load()}
          />
        </TrayWidget>
        
        </div>
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
           
            if (data.type == "generator") {
              node = new GeneratorNodeModel();
            } 
            if (data.type == "transformer") {
              node = new TransformerNodeModel();
            }
            if (data.type == "transformer3") {
              node = new TransformerNodeModel3();
            }  
            if (data.type == "switch") {
              node = new SwitchNodeModel();
            }
            if (data.type == "reactor") {
              node = new ReactorNodeModel();
            }
            if (data.type == "doublereactor") {
              node = new DoubleReactorNodeModel();
            }
            if (data.type == "divider") {
              node = new DividerNodeModel();
            }
            if (data.type == "line") {
              node = new LineNodeModel();
            }
            if (data.type == "ground") {
              node = new GroundNodeModel();
            }
            if (data.type == "connector") {
              node = new ConnectorNodeModel();
            }
            if (data.type == "load") {
              node = new LoadNodeModel();
            }
            //Тут добавить условия, типа if(data.type=="reactor"{node = new ReactorNodeModel()})
           //Тем самым сработает DrugAndDrop. Больше в этом компоненте ничего не трогать


           var point = this.props.app
           .getDiagramEngine()
           .getRelativeMousePoint(event);
         node.setPosition(point.x, point.y);
         this.props.app.getDiagramEngine().getDiagramModel().addNode(node);
         this.forceUpdate()
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
