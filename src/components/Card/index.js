import React from "react";
import CardItem from "../CardItem";
import CardItemCustom from "../CardItemCustom";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
  FaCalculator,
} from "react-icons/fa";

const Card = ({ cotacao, income, expense, total, Date }) => {
  return (
    <C.Container>
      <CardItemCustom
        title="Cotação Dólar"
        Icon={FaDollarSign}
        Date={Date}
        value={cotacao}
      />
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <CardItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <CardItem title="Total" Icon={FaCalculator} value={total} />
    </C.Container>
  );
};

export default Card;
