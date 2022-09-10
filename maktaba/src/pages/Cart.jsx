import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcements from '../components/Announcements';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
 
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR ORDER</Title>
        <Top>
          <TopButton>KEEP BROWSING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (4)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b> AMERICANAH
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon />
                <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                  <Image src="https://highlyunique.com/wp-content/uploads/2022/03/15-So-Many-Books-So-Little-Time-Reading-Mug.webp" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> COFFEE MUG
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718293
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon />
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon />
                  </ProductAmountContainer>
                  <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;