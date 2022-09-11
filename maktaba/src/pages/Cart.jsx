import styled from "styled-components";
import React, { useContext, useEffect, useRef } from 'react';
import { popularProducts, sliderItems } from "../data";
import Catalog from "./Catalog";



const Container = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  box-sizing: border-box;
  position: absolute;
  /* display: flex; */
  flex-direction: column;
  /* width: 15vw; */
  min-width: fit-content;
  padding: 1em;
  top: ${(props) => (props.id === "hero" ? "-1em" : "6em")};
  right: 3em;
  background-color: white;
  box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
  z-index: 1;
  border-radius: 0.3em;
  & button:hover {
    color: white;
    box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
  }
  & p {
    margin: 0;
  }
  & h6 {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  & hr {
    margin: 0.8em 0;
  }
  @media (max-width: 525px) {
    width: 90vw;
    right: 1em;
    /* left: 0; */
  }
`;

const CartBtn = styled.button`
  width: 12em;
  min-width: 100%;
  background-color: hsl(26, 100%, 55%);
  color: hsl(0, 0%, 100%);
  border-radius: 0.4em;
`;

const Content = styled.div`
  display: ${(props) => (props.cartItems ? "flex" : "none")};
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;
  & img {
    width: 2.5em;
    padding-bottom: 10px;
  }
  & #bin {
    width: 1.5em;
  }
  & #bin:hover {
    cursor: pointer;
    padding-top: 4px;
  }
`;

function Cart(){
  const show = useContext
  

  const cartRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        sliderItems(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [sliderItems]);

  return(
    <Container show={show} ref={cartRef}>
      <h6>Cart</h6>
      <hr />
      {Catalog > 0 ? (
        <>
          <Content cartItems={Catalog}>
            <img src={popularProducts} alt="product" />
            <p>
              {Catalog}
            </p>
            <img src={popularProducts} alt="" id="bin" onClick={Catalog} />
          </Content>
          <div>
            <CartBtn className="btn">Checkout</CartBtn>
          </div>
          <Content>
            <p>Your cart is empty</p>
          </Content>
        </>
      ) : (
        <>
          <p>Your cart is empty</p>
        </>
      )}
    </Container>
  );
}

export default Cart;