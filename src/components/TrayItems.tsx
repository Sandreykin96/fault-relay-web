import { isPropertySignature } from "typescript";

import React from "react";
import { TrayItemWidget } from "./TrayItemWidget";
import {
  Connector,
  GeneratorIcon,
  TransformerIcon,
  ThreeTransformerIcon,
  Switch,
  Reactor,
  DoubleReactor,
  Divider,
  Line,
  Ground,
  Load,
} from "./icons/Icons";
import { TrayItemTypes } from "./TrayItemTypes";

export const TrayItems = () => {
  return (
    <div>
      <TrayItemWidget
        model={{ type: TrayItemTypes.generator }}
        name="Генератор"
        color="#9f1d87"
        icon={GeneratorIcon()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.transformer }}
        name="Двухобмоточный трансформатор"
        color="#9f1d87"
        icon={TransformerIcon()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.transformer3 }}
        name="Трехобмоточный трансформатор"
        color="#9f1d87"
        icon={ThreeTransformerIcon()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.switch }}
        name="Выключатель"
        color="#9f1d87"
        icon={Switch()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.reactor }}
        name="Реактор"
        color="#9f1d87"
        icon={Reactor()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.doublereactor }}
        name="Сдвоенный реактор"
        color="#9f1d87"
        icon={DoubleReactor()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.divider }}
        name="Разъединитель"
        color="#9f1d87"
        icon={Divider()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.line }}
        name="Линия"
        color="#9f1d87"
        icon={Line()}
      />
      <TrayItemWidget
        model={{ type: TrayItemTypes.ground }}
        name="Земля"
        color="#9f1d87"
        icon={Ground()}
      />

      <TrayItemWidget
        model={{ type: TrayItemTypes.connector }}
        name="Шина"
        color="#9f1d87"
        icon={Connector()}
      />

      <TrayItemWidget
        model={{ type: TrayItemTypes.load }}
        name="Нагрузка"
        color="#9f1d87"
        icon={Load()}
      />
    </div>
  );
};
