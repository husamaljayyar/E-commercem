import styled from "styled-components";
import { FlexRow, FlexColumn } from "../../../../App.Styles";

export const RowContainer = styled(FlexRow)`
  padding: 30px;
`;

export const Container = styled(FlexColumn)`
  margin-top: 32px;
  margin-bottom: 32px;
  align-items: ${(props) =>
    props.startItem ? "start" : props.centerItem && "center"};
  @media screen and (max-width: 1100px) {
    align-items: center;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SliderButton = styled.button`
  border: none;
  outline: none;
  height: 30px;
  cursor: pointer;
`;
