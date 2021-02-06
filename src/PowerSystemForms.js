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
          <TextField id="FullPower" label="Полная мощность" />
          <Box />
          <TextField id="Voltage" label="Напряжение" />
        </form>
    );
  };