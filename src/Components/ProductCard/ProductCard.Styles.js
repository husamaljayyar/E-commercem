import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexRow, Typography } from "../../App.Styles";

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 300px;
  height: auto;
  min-height: 350px;
  border-radius: ${(props) => (props.radius ? "16px" : "0")};
  opacity: 1;
  margin: 15px;
  color: #000000;
  ${(props) =>
    props.backgroundCard ? `background: #fff;` : `background: #FFFFFF;`};
  ${(props) => (props.widthborder ? `box-shadow: 0px 2px 20px #08091E1A;` : ``)}
`;

export const CardImage = styled("img")`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 34px;
  border-radius: ${(props) => (props.radius ? "16px 16px 0 0" : "0")};
`;

export const RowContainer = styled(FlexRow)`
  margin: 20px;
  justify-content: space-between;
  width: 90%;
`;

export const Text = styled(Typography)`
  height: 40px;
`;
