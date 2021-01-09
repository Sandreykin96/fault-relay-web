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

//добавил для трансформатора 3
import { TransformerNodeModel3 } from "./components/transformer-node 3/TransformerNodeModel3";
import { TransformerNodeFactory3 } from "./components/transformer-node 3/TransformerNodeFactory3";
import { TransformerPortFactory3 } from "./components/transformer-node 3/TransformerPortFactory3";
import { TransformerPortModel3 } from "./components/transformer-node 3/TransformerPortModel3";

//Изменения в app.tsx которые нужно сделать указаны в комментраниях на русском. 
//Нужно для каждого из этих элементов сделать наподобие transformer=node или generator-node
//Пока что нужно в папке трансформер ноде 3 измененить все файлы. по факту тебе будет нужно переименовать все файлы а также отредактировать 
//Точно так же импортировать 4 штуки: ТNodeModel, NodeFactory, PortFacrory, PortModel Для каждого элемента


import {Connector, GeneratorIcon, TransformerIcon, 
  ThreeTransformerIcon, Switch, Reactor, 
  DoubleReactor,Divader, Line, Ground, Load} from  "./components/icons/Icons"

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
            model={{ type: "dobulereactor" }}
            name="Сдвоенный реактор"
            color="#9f1d87"
            icon = {DoubleReactor()}
          />
          <TrayItemWidget
            model={{ type: "dobulereactor" }}
            name="Разъединитель"
            color="#9f1d87"
            icon = {Divader()}
          />
           <TrayItemWidget
            model={{ type: "dobulereactor" }}
            name="Линия"
            color="#9f1d87"
            icon = {Line()}
          />
          <TrayItemWidget
            model={{ type: "dobulereactor" }}
            name="Земля"
            color="#9f1d87"
            icon = {Ground()}
          />

          <TrayItemWidget
            model={{ type: "dobulereactor" }}
            name="Шина"
            color="#9f1d87"
            icon = {Connector()}
          />

          <TrayItemWidget
            model={{ type: "dobulereactor" }}
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
            } if (data.type == "transformer") {
              node = new TransformerNodeModel();
            }if (data.type == "transformer3") {
              node = new TransformerNodeModel3();
            }  

            //Тут добавить условия, типа if(data.type=="reactor"{node = new ReactorNodeModel()})
           //Тем самым сработает DrugAndDrop. Больше в этом компоненте ничего не трогать


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
