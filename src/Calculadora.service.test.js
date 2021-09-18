import CalculadoraService from "./Calculadora.service";

describe("Validando calculadora service", () => {
  const [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] =CalculadoraService();

  it("deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, SOMA);
    expect(soma).toEqual(5);
  });

  it("deve garantir que 10-4= 6", () => {
    let subtracao = calcular(10, 4, SUBTRACAO);
    expect(subtracao).toEqual(6);
  });

  it("deve garantir que 10/2= 5", () => {
    let divisao = calcular(10, 2, DIVISAO);
    expect(divisao).toEqual(5);
  });

  it("deve garantir que 10*2= 20", () => {
    let multiplicacao = calcular(10, 2, MULTIPLICACAO);
    expect(multiplicacao).toEqual(20);
  });

  it("deve garantir que irá zerar para caso não identifique a operação 10%2= 0", () => {
    let multiplicacao = calcular(10, 2, "%");
    expect(multiplicacao).toEqual(0);
  });
});
