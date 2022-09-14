import React, { useState } from 'react';
import styled from 'styled-components';



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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;



const Register = () => {
  // const [state, setState] = useState("")
  const [book, setBook] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user)

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
      .then((newUser) => {
        setBook("newBook");
      });
  }

  const onChange = (e) => {
    setBook({...book, [e.target.book]:e.target.book})
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

export default Register;