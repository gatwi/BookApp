import React, { useState } from 'react';
import styled from 'styled-components';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn4.vectorstock.com/i/1000x1000/46/68/a-pile-of-books-vector-4014668.jpg")
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



const Wishlist = () => {
  // const [state, setState] = useState("")
  const [book, setBook] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(book)

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:  book.title,
        author: book.author,
        publication: book.publication,
        genre: book.genre
      }),
    })
      .then((r) => r.json())
      .then((newBook) => {
        setBook("newBook");
      });
  }

  const onChange = (e) => {
    setBook({...book, [e.target.name]:e.target.value})
  };

  return (
    <Container>
        <Wrapper>
            <Title>ADD NEW BOOK</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="title" name="title" onChange={onChange}/>
                <Input placeholder="author" name="author" onChange={onChange}/>
                <Input placeholder="publication" name="publication" onChange={onChange}/>
                <Input placeholder="genre" name="genre" onChange={onChange}/>  
                <Button type="submit">ADD BOOK</Button>
            </Form>
      </Wrapper>
    </Container>
  );
};

export default Wishlist;