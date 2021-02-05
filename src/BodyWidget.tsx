import React, {useEffect, useState} from "react";
import * as _ from "lodash";
import * as SRD from "@projectstorm/react-diagrams";
import "./styles.css";
import { TrayWidget } from "./components/TrayWidget";
import { GeneratorNodeModel } from "./components/generator-node/GeneratorNodeModel";
import { TransformerNodeModel } from "./components/transformer-node/TransformerNodeModel";
import { TransformerNodeModel3 } from "./components/transformer-node 3/TransformerNodeModel3";
import { SwitchNodeModel } from "./components/switch-node/SwitchNodeModel";
import { ReactorNodeModel } from "./components/reactor-node/ReactorNodeModel";
import { DoubleReactorNodeModel } from "./components/doublereactor-node/DoubleReactorNodeModel";
import { DividerNodeModel } from "./components/divider-node/DividerNodeModel";
import { LineNodeModel } from "./components/line-node/LineNodeModel";
import { GroundNodeModel } from "./components/ground-node/GroundNodeModel";
import { ConnectorNodeModel } from "./components/connector-node/ConnectorNodeModel";
import { LoadNodeModel } from "./components/load-node/LoadNodeModel";
import { TrayItems } from "./components/TrayItems";
import { TrayItemTypes } from "./components/TrayItemTypes";
import { Application } from "./Application";

export interface BodyWidgetProps {
  app: Application;
}

export const BodyWidget : React.FC<BodyWidgetProps> = ({app}) => {
    const [generatorsCount, setGeneratorsCount] = useState(1);
    const [transformersCount, setTransformersCount] = useState(1);
    const [switchCount, setSwitchCount] = useState(1);
    const [reactorsCount, setReactorsCount] = useState(1);
    const [dividersCount, setDividersCount] = useState(1);
    const [linesCount, setLinesCount] = useState(1);
    const [groundCount, setGroundCount] = useState(1);
    const [connectorsCount, setConnectorsCount] = useState(1);
    const [loadsCount, setLoadsCount] = useState(1);

    const onItemDrop = (event: {
      dataTransfer: { getData: (arg0: string) => string };
    }) => {
      var data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));

      var nodesCount = _.keys(
        app.getDiagramEngine().getDiagramModel().getNodes()
      ).length;

      var node: any = null;

      switch(data.type){
          case TrayItemTypes.generator : {
            setGeneratorsCount(prev => prev + 1);
            node = new GeneratorNodeModel("Г" + generatorsCount);
            break;
          }
          case TrayItemTypes.transformer : {
            setTransformersCount(prev => prev + 1);
            node = new TransformerNodeModel("T" + transformersCount);
            break;
          }
          case TrayItemTypes.transformer3 : {
            setTransformersCount(prev => prev + 1);
            node = new TransformerNodeModel3("T" + transformersCount);
            break;
          }
          case TrayItemTypes.switch : {
            setSwitchCount(prev => prev + 1);
            node = new SwitchNodeModel("В" + switchCount);
            break;
          }
          case TrayItemTypes.reactor : {
            setReactorsCount(prev => prev + 1);
            node = new ReactorNodeModel("Р" + reactorsCount);
            break;
          }
          case TrayItemTypes.doublereactor : {
            setReactorsCount(prev => prev + 1);
            node = new DoubleReactorNodeModel("Р" + reactorsCount);
            break;
          }
          case TrayItemTypes.divider : {
            setDividersCount(prev => prev + 1);
            node = new DividerNodeModel("Рз" + dividersCount);
            break;
          }
          case TrayItemTypes.line : {
            setLinesCount(prev => prev + 1);
            node = new LineNodeModel("Л" + linesCount);
            break;
          }
          case TrayItemTypes.ground : {
            setGroundCount(prev => prev + 1);
            node = new GroundNodeModel();
            break;
          }
          case TrayItemTypes.connector : {
            setConnectorsCount(prev => prev + 1);
             node = new ConnectorNodeModel();
             break;
           }
          case TrayItemTypes.load : {
            setLoadsCount(prev => prev + 1);
            node = new LoadNodeModel("Н" + loadsCount);
            break;
          }
      }

      var point = app.getDiagramEngine().getRelativeMousePoint(event);
      node.setPosition(point.x, point.y);
      app.getDiagramEngine().getDiagramModel().addNode(node);
    };

    const onItemDrugOver = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };

    useEffect(() => {
        
    });

    return (
      <div className="Content">
        <div style={{ marginLeft: 10, marginRight: 4, height: window.innerHeight - 70 + 'px', overflowY: "scroll",}} >
          <TrayWidget>
            <TrayItems />
          </TrayWidget>
        </div>
        
        <div style = {{width : window.innerWidth -500 + 'px'}} onDrop={onItemDrop} onDragOver={onItemDrugOver}>
          <SRD.DiagramWidget
            className="srd-demo-canvas"
            smartRouting={true}
            diagramEngine={app.getDiagramEngine()}
          />
        </div>
        
      </div>
    );
}
