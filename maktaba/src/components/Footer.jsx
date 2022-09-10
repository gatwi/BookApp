import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>KARIBU MAKTABA.</Logo>
            <Desc>Maktaba.org is an online library and free education tool to connect learners and mentors around the world to read together, discuss books, and teach each other. Launched in late 2021, the bilingual website already has almost 500 free ebooks and OERs in English and Swahili. Content ranges from classic literature to technical resources with curated collections for teachers, health workers, farmers, parents and youth.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem><Link to="/catalog">Catalog</Link></ListItem>
                <ListItem><Link to="/lib">Library</Link></ListItem>
                <ListItem><Link to="/orders">Order Tracking</Link></ListItem>
                <ListItem><Link to="/santa">Wishlist</Link></ListItem>
                <ListItem><Link to="/tnc">Terms and Conditions</Link></ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <PinDropIcon style={{marginRight:"10px"}} /> 1880, 001000 Greenfield Mall, Westlands.
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}} /> +254 701 234 567
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight: "10px"}} /> info@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  );
};

export default Footer;