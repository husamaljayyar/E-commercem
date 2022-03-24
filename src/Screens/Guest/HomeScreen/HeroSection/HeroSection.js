import {
  Container,
  InnerContainer,
  SideBox,
  HeroBox,
  Image,
  HeroTitle,
  SliderButton,
  ContainerButton,
} from "./HeroSection.Style";
import { InnerSection } from "../../../../App.Styles";
import Button from "../../../../Components/Button/Button";
import cart_image from "../../../../Assets/BackgroundImage.png";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const IconStyles = {
  fontSize: "large",
  height: "20px",
};

function HeroSection({ sliderProducts }) {
  return (
    <Container>
      <InnerContainer>
        <InnerSection>
          <Carousel
            style={{ paddingBottom: "20px" }}
            renderArrow={({ type, onClick }) => {
              const pointer =
                type === consts.PREV ? (
                  <ArrowBackIcon {...IconStyles} />
                ) : (
                  <ArrowForwardIcon {...IconStyles} />
                );
              return (
                <ContainerButton>
                  <SliderButton onClick={onClick}>{pointer}</SliderButton>
                </ContainerButton>
              );
            }}
          >
            {sliderProducts.map((item) => (
              <HeroBox key={item._id}>
                <SideBox>
                  <HeroTitle fontSize={22} color={"#242424"}>
                    Save up to ${item.price}
                  </HeroTitle>
                  <HeroTitle fontSize={35} fontWeight={700} fontFamily="true">
                    {item.name.substring(0, 15)}
                  </HeroTitle>
                  <HeroTitle fontSize={22} color={"#242424"}>
                    {item.description.substring(0, 58)}...
                  </HeroTitle>
                  <Button
                    link={`/product/${item._id}/${item.name}`}
                    text="Shop Now"
                    width={"150px"}
                    height={"45px"}
                    radius={"20px"}
                    isorange={"true"}
                    style={{
                      marginTop: "20px",
                      fontWeight: 500,
                      color: "#000",
                      fontFamily: "monospace",
                    }}
                  />
                </SideBox>
                <Image src={cart_image} />
              </HeroBox>
            ))}
          </Carousel>
        </InnerSection>
      </InnerContainer>
    </Container>
  );
}

export default HeroSection;
