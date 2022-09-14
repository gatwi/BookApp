import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from "react-router-dom";
// import Library from '../pages/Library';


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
  const [user, setUser] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user)

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name:  user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password
      }),
    })
      .then((r) => r.json())
      .then((newUser) => {
        setUser("newUser");
      });
  }

  const onChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  };

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="name" name="first_name" onChange={onChange}/>
                <Input placeholder="last name" name="last_name" onChange={onChange}/>
                <Input placeholder="username" name="username" onChange={onChange}/>
                <Input placeholder="email" name="email" onChange={onChange}/>  
                <Input placeholder="password" name="password" onChange={onChange}/>
                <Agreement>
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="submit">CREATE USER</Button>
            </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;