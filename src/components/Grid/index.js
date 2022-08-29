import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  const sortedAsc = itens.sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
  );
  itens = sortedAsc;
  // console.log(sortedAsc);
  // console.log(itens.map((item) => item.timestamp).sort());
  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={15}>Data</C.Th>
          <C.Th width={60}>Descrição</C.Th>
          <C.Th width={20}>Valor</C.Th>
          <C.Th width={15} alignCenter>
            Tipo
          </C.Th>
          <C.Th width={15}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
