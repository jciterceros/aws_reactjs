import React from "react";
import CardItem from "../CardItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Card = ({ income, expense, total }) => {
  return (
    <C.Container>
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <CardItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <CardItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Card;
