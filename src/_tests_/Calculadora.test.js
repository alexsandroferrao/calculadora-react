import { render, fireEvent } from "@testing-library/react";
import Calculadora from "../Calculadora";
import '@testing-library/jest-dom/extend-expect';

describe("Renderizando calculadora", () => {
  it("Deve limpa tela de resultado", ()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('9'));
    expect(getByTestId('visorResultados')).toHaveValue('9');
    fireEvent.click(getByText('C'))
    
    expect(getByTestId('visorResultados')).toHaveValue('0');
  })

  it("Deve realizar um calculo de soma", ()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
    
    expect(getByTestId('visorResultados')).toHaveValue('18');
  })


  it("Deve realizar um calculo de divisao", ()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
    
    expect(getByTestId('visorResultados')).toHaveValue('1');
  })

  it("Deve realizar um calculo de multiplicacao", ()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('='));
   
    expect(getByTestId('visorResultados')).toHaveValue('81');
  })

  it("Deve realizar um calculo de subtracao", ()=>{
    const {getByTestId, getByText} = render(<Calculadora/>);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
   
    expect(getByTestId('visorResultados')).toHaveValue('7');
  })

});
