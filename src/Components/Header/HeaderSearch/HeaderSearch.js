import { Navbar, Container, Form, Button, Nav } from "react-bootstrap";
import "./HeaderSearch.css";
import SelectBox from "../../SelectBox/SelectBox";

export default function HeaderSearch() {
    const options = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Milks and Dairies', label: 'Milks and Dairies' },
        { value: 'Wines & Alcohol', label: 'Wines & Alcohol' },
        { value: 'Clothing & Beauty', label: 'Clothing & Beauty' },
        { value: 'Pet Foods & Toy', label: 'Pet Foods & Toy' },
        { value: 'Fast food', label: 'Fast food' },
        { value: 'Baking material', label: 'Baking material' },
        { value: 'Vegetables', label: 'Vegetables' },
        { value: 'Fresh Seafood', label: 'Fresh Seafood' },
        { value: 'Noodles & Rice', label: 'Noodles & Rice' },
        { value: 'Ice cream', label: 'Ice cream' }
    ]
    return (
        <Navbar className="header-search">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="./images/logo.svg" alt="logo" />
                </Navbar.Brand>

                <Form className="d-flex header-search-form">
                    <SelectBox boxClass={`select2-search`} options={options}/>
                    <Form.Control
                        type="text"
                        placeholder="Search for items..."
                        aria-label="Search for items..."
                    />
                </Form>


                <Nav className="justify-content-end flex-grow-1 nav-icon-links">
                    <Nav.Link href="#action1">
                        <div className="nav-icon-wrapper">
                            <img src="./images/icon-compare.svg" />
                            <span className="count">3</span>
                        </div>
                        <div className="nav-icon-text">Compare</div>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                        <div className="nav-icon-wrapper">
                            <img src="./images/icon-heart.svg" />
                            <span className="count">6</span>
                        </div>
                        <div className="nav-icon-text">Wishlist</div>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                        <div className="nav-icon-wrapper">
                            <img src="./images/icon-cart.svg" />
                            <span className="count">2</span>
                        </div>
                        <div className="nav-icon-text">Cart</div>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                        <div className="nav-icon-wrapper">
                            <img src="./images/icon-user.svg" />
                        </div>
                        <div className="nav-icon-text">Account</div>
                    </Nav.Link>

                </Nav>



            </Container>
        </Navbar>
    )
}