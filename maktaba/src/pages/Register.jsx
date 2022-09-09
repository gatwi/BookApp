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



const Register = ({ currentUser, onAddUser }) => {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        user: user,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => {
        onAddUser(newUser);
        setUser("");
      });
  }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" onChange={(e) => setBody(e.target.value)}/>
                <Input placeholder="last name" onChange={(e) => setBody(e.target.value)}/>
                <Input placeholder="username" onChange={(e) => setBody(e.target.value)}/>
                <Input placeholder="email" onChange={(e) => setBody(e.target.value)}/>  
                <Input placeholder="password" onChange={(e) => setBody(e.target.value)}/>
                <Input placeholder="confirm password" onChange={(e) => setBody(e.target.value)}/>
                <Agreement>
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit">CREATE</Button>
            </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;