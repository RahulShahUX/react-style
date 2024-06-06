import { Container, Nav, NavDropdown } from "react-bootstrap";
import "./HeaderMenu.css";
export default function HeaderMenu() {
    return (
        <Nav className="header-menu">
            <Container fluid className="d-flex justify-content-between">
                <div className="d-flex">
                    <NavDropdown className="has-browse" title="Browse All Categories" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Pages</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Pages</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Pages</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="/deals">
                            <img src="./images/icon-hot.svg" alt="deals" />
                            Deals
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Home" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Home1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Home2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Home3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="/about">
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Shop" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Shop1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Shop2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Shop3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Vendors" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Vendor1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Vendor2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Vendor3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mega menu" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Menu1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Menu2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Menu3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Blog" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Blog1</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Blog2</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Blog3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Pages" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Pages</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Pages</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Pages</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href="/contact">
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </div>
                <div className="hotline d-flex align-items-center">
                    <img src="./images/icon-headphone.svg" alt="hotline" />
                    <p>
                        1900 - 888
                        <span>24/7 Support Center</span>
                    </p>
                </div>
            </Container>
        </Nav>
    )
}