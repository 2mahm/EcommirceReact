import SearchBar from "../components/Searchbar";
import Store from "../components/Store";
import { Container } from "react-bootstrap";
function Storepage(params) {
  return (
    <>
      <SearchBar />
      <Container className="mb-4">
        <Store />
      </Container>
    </>
  );
}

export default Storepage;
