import React, {useEffect } from "react";
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

    const onItemDrop = (event: {
      dataTransfer: { getData: (arg0: string) => string };
    }) => {
      var data = JSON.parse(event.dataTransfer.getData("storm-diagram-node"));

      var nodesCount = _.keys(
        app.getDiagramEngine().getDiagramModel().getNodes()
      ).length;

      var node: any = null;

      if (data.type == TrayItemTypes.generator) {
        node = new GeneratorNodeModel("Г" + nodesCount);
      }
      if (data.type == TrayItemTypes.transformer) {
        node = new TransformerNodeModel("T" + nodesCount);
      }
      if (data.type == TrayItemTypes.transformer3) {
        node = new TransformerNodeModel3();
      }
      if (data.type == TrayItemTypes.switch) {
        node = new SwitchNodeModel();
      }
      if (data.type == TrayItemTypes.reactor) {
        node = new ReactorNodeModel();
      }
      if (data.type == TrayItemTypes.doublereactor) {
        node = new DoubleReactorNodeModel();
      }
      if (data.type == TrayItemTypes.divider) {
        node = new DividerNodeModel();
      }
      if (data.type == TrayItemTypes.line) {
        node = new LineNodeModel();
      }
      if (data.type == TrayItemTypes.ground) {
        node = new GroundNodeModel();
      }
      if (data.type == TrayItemTypes.connector) {
        node = new ConnectorNodeModel();
      }
      if (data.type == TrayItemTypes.load) {
        node = new LoadNodeModel();
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
        <div style={{ marginLeft: 10, marginRight: 10, height: 680, overflowY: "scroll",}} >
          <TrayWidget>
            <TrayItems />
          </TrayWidget>
        </div>
        
        <div className="Layer" onDrop={onItemDrop} onDragOver={onItemDrugOver}>
          <SRD.DiagramWidget
            className="srd-demo-canvas"
            smartRouting={true}
            diagramEngine={app.getDiagramEngine()}
          />
        </div>
      </div>
    );
}
