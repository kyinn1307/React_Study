import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Menu() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Home</Nav.Link>#{" "}
          <Nav.Link href="detail">Detail</Nav.Link>
          <Nav.Link href="cart">Cart</Nav.Link>
           */}
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail/1");
            }}
          >
            Detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/event/one");
            }}
          >
            Event
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
