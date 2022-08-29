import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;
