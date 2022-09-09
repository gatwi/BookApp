import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import BooksList from '../components/BooksList';
import Substack from "../components/Substack";
import Footer from "../components/Footer";
import Announcements from '../components/Announcements';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;


const Catalog = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Goodies!</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Books
                </Option>
                <Option>YA Fiction</Option>
                <Option>Children's Books</Option>
                <Option>Memoris</Option>
                <Option>African Lit</Option>
                <Option>Humor and Comedy</Option>
                <Option>Fantasy</Option>
                <Option>LGBTQ Theme</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Accessories
                </Option>
                <Option>Stationery</Option>
                <Option>Tote Bags</Option>
                <Option>Bookmarks</Option>
                <Option>Mugs and Bottles</Option>
                <Option>Beanbags</Option>
                <Option>Gift Vouchers</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Original</Option>
                <Option>Pre-Loved</Option>
                <Option>New Paperbacks</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <BooksList />
      <Substack />
      <Footer />
    </Container>
  );
};

export default Catalog;