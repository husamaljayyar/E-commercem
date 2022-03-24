import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../../App.Styles";
import { ColumnContainer, BorderText } from "../HomeScreen.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";
import Rating from "@material-ui/lab/Rating";
import Button from "../../../../Components/Button/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonContent from "../../../../Components/ButtonContant/ButtonContent";
import Carousel, { consts } from "react-elastic-carousel";
import {
  ContainerButton,
  SliderButton,
} from "./FeaturedProductsSection.Styles";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function FeaturedProductsSection({ products }) {
  return (
    <FlexBox background={"#F7F8FC"}>
      <InnerSection>
        <ColumnContainer centerItem>
          <Typography fontWeight={700} fontSize={25}>
            Featured Products
          </Typography>
          <BorderText />
        </ColumnContainer>

        <FlexRow>
          <Carousel
            breakPoints={breakPoints}
            style={{ paddingBottom: "20px" }}
            renderArrow={({ type, onClick }) => {
              const pointer =
                type === consts.PREV ? (
                  null
                ) : (
                  null
                );
              return (
                <ContainerButton>
                  <SliderButton onClick={onClick}>{pointer}</SliderButton>
                </ContainerButton>
              );
            }}
          >
            {products.map((item) => (
              <ProductCard
                backgroundCard="true"
                key={item._id}
                id={item._id}
                image={"https://proshop-ms.herokuapp.com/" + item.image}
                name={item.name}
                discount={0}
                price={item.price}
                radius="true"
              >
                <Rating
                  style={{ color: "#ff8c00", margin: "10px" }}
                  name="simple-controlled"
                  value={item.rating}
                />

                {item.discount > 0 && (
                  <Typography color={"#FC4059"} fontSize={25}>
                    $ {item.discount}
                  </Typography>
                )}

                <Typography
                  fontSize={20}
                  fontWeight={700}
                  style={{
                    textDecoration: item.discount && "line-through",
                    marginBottom: "10px",
                  }}
                >
                  ${item.price}
                </Typography>
                <Button
                  text={
                    <ButtonContent>
                      <ShoppingCartIcon />
                    </ButtonContent>
                  }
                  width={"100%"}
                  height={"40px"}
                  radius={"0 0 10px 10px"}
                  isgray={"true"}
                  style={{ background: "#f99838", fontSize: "20px" }}
                />
              </ProductCard>
            ))}
          </Carousel>
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
export default FeaturedProductsSection;
