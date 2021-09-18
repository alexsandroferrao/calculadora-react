import "./Calculadora.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import CalculadoraService from "./Calculadora.service";

function Calculadora() {
  const [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] =
    CalculadoraService();

  const [telaResultado, setTelaResultado] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState('0');
  const [segundoNumero, setSegundoNumero] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionarNumero(numero) {
    if (operacao === null) {

      setPrimeiroNumero(numero);
    } else{
      setSegundoNumero(numero)
    }
   
    setTelaResultado(numero);
  }

  function definirOperacao(operacao) {
    setOperacao(operacao);
    setTelaResultado(operacao);
  }

  function limpaTela() {
    setPrimeiroNumero('0');
    setSegundoNumero(null);
    setOperacao(null);
    setTelaResultado(0);
  }

  function realizaCalculo(){
    let resultado = calcular(primeiroNumero, segundoNumero, operacao);
    setTelaResultado(resultado);
  }

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "blue",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={limpaTela}>
              C
            </Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              data-testid="visorResultados"
              name="visorResultados"
              className="text-right"
              readOnly="readonly"
              value={telaResultado}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(7)}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(8)}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(9)}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(DIVISAO)}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(4)}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(5)}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(6)}>
              6
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              onClick={() => definirOperacao(MULTIPLICACAO)}
            >
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(1)}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(2)}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(3)}>
              3
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              onClick={() => definirOperacao(SUBTRACAO)}
            >
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(0)}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(".")}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={realizaCalculo}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SOMA)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
