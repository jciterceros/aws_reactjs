import React from "react";
import * as C from "./styles";

const Header = ({ clock }) => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle de Caixa Pessoal</C.Title>
      </C.Header>
      <C.Content>{clock}</C.Content>
    </C.Container>
  );
};

export default Header;
