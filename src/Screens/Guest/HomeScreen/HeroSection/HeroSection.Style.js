import styled from "styled-components";
import {
  FlexBox,
  InnerSection,
  FlexColumn,
  FlexRow,
  Typography,
} from "../../../../App.Styles";

export const Container = styled(FlexBox)`
  height: auto;
  padding: 60px;
  width: 100%;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;

  background: #eaeaea;
`;

export const InnerContainer = styled(InnerSection)`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const HeroBox = styled(FlexRow)`
  justify-content: space-around;
  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`;

export const SideBox = styled(FlexColumn)`
  align-items: flex-start;
  width: 400px;
  height: auto;
  @media screen and (max-width: 850px) {
    align-items: center;
    width: auto;
    padding: 20px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 50px;
  min-width: 260px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const HeroTitle = styled(Typography)`
  color: #242424;
  align-items: flex-start;
  font-family: ${(props) => props.fontFamily && `monospace`};
  text-align: start;
  margin-top: 5px;
  @media screen and (max-width: 850px) {
    text-align: center;
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
