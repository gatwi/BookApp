import styled from "styled-components";
import React, { useEffect, useState } from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/736x/14/3e/67/143e67e346da0b1b23553dbf0199f514.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Library = () => {
  const [booksList, setBooksList] = useState({})
  useEffect (() => {
    fetch("http://localhost:9292/books")
      .then(r=>r.json())
      .then(books=>setBooksList(books))
      }, {}
  )

  const myBooks = Array.from(booksList).map((book) => {
    <h1>{book.title}</h1>
  })
  
  return (
    <Container>
      <Wrapper>
        <Title>MY LIBRARY</Title>
        {myBooks}
      </Wrapper>
    </Container>
  );
};

export default Library;