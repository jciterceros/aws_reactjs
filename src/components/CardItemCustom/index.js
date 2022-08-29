import React from "react";
import * as C from "./styles";

const CardItemCustom = ({ title, Icon, Date, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Date>{Date}</C.Date>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default CardItemCustom;
