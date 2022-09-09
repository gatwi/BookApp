import styled from "styled-components";
import { popularProducts } from "../data";
import Books from "./Books";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const BooksList = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Books item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default BooksList;