import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';

export const GeneratorData = () => {
  return (
      //Заполни данные полностью для генератора, а потом приступай к тому чтобы заполнить данные для других элементов схемы. 
      <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
        <div style = {{marginTop : '10px'}}>Задайте параметры генератора</div>
        <TextField id="Name" label="Название" />
        <Box />
        <TextField id="FullPower" label="Полная мощность" />
        <Box />
        <TextField id="Voltage" label="Напряжение" />
      </form>
  );
};

export const TransformerData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры двухобмоточного трансформатора</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="Loss" label="Потери" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
          <Box />
          <TextField id="NoLoadCurrent" label="Ток холостого хода" />
        </form>
    );
  };

  
  
  export const Transformer3Data = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры трёхобмоточного трансформатора</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="Loss" label="Потери" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
          <Box />
          <TextField id="NoLoadCurrent" label="Ток холостого хода" />
        </form>
    );
  };

  export const AutoTransformerData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры автотрансформатора</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="Loss" label="Потери" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
          <Box />
          <TextField id="NoLoadCurrent" label="Ток холостого хода" />
        </form>
    );
  };

  export const SwitchData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметр выключателя</div>
          <TextField id="Name" label="Название" />
          <Box />
        </form>
    );
  };

  export const ReactorData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры реактора</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="Current" label="Сила тока" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
          <Box />
          <TextField id="RatedInductiveResistance" label="Номинальное индуктивное сопротивление" />
        </form>
    );
  };

  export const DoubleReactorData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры сдвоенного реактора</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="RatedInductiveResistance" label="Номинальное индуктивное сопротивление" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
        </form>
    );
  };

  export const ConnectorData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры разъединителя</div>
          <TextField id="Name" label="Название" />
          <Box />
        </form>
    );
  };

  export const LineData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры линии</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="SpecificResistance" label="Удельное актвное сопротивление" />
          <Box />
          <TextField id="SpecificInductiveResistance" label="Удельное индуктивное сопротивление" />
        </form>
    );
  };

  export const GroundData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры заземления</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="Сonductivity" label="Проводимость" />
          <Box />
          
        </form>
    );
  };

  export const LoadData = () => {
    return (
        <form style = {{flexDirection : 'row', marginLeft : '15px', marginTop : '20px'}} noValidate autoComplete="off">
          <div style = {{marginTop : '10px'}}>Задайте параметры нагрузки</div>
          <TextField id="Name" label="Название" />
          <Box />
          <TextField id="FullPower" label="Полная мощность" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
        </form>
    );
  };
  