function CalculadoraService() {
  const SOMA = "+";
  const SUBTRACAO = "-";
  const MULTIPLICACAO = "*";
  const DIVISAO = "/";

  function calcular(primeiroNumero, segundoNumero, operacao) {
    let resultado;

    switch (operacao) {
      case SOMA:
        resultado = primeiroNumero + segundoNumero;
        break;
      case SUBTRACAO:
        resultado = primeiroNumero - segundoNumero;
        break;
      case MULTIPLICACAO:
        resultado = primeiroNumero * segundoNumero;
        break;
      case DIVISAO:
        resultado = Math.round(primeiroNumero / segundoNumero);
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }

  return [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO];
}

export default CalculadoraService;
