import { Navbar, Container, Nav, Row, Col } from "react-bootstrap"
import "./HeaderMini.css"
import SelectBox from "../../SelectBox/SelectBox"

export default function HeaderMini() {
  const optionsLanguages = [
    { value: 'English', label: 'English' },
    { value: 'Français', label: 'Français' },
    { value: 'Deutsch', label: 'Deutsch' },
    { value: 'Pусский', label: 'Pусский' }
  ];
  const optionsCurrency = [
    { value: 'USD', label: 'USD' },
    { value: 'INR', label: 'INR' },
    { value: 'MBP', label: 'MBP' },
    { value: 'EU', label: 'EU' }
  ];

  return (
    <div className="header-mini">
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="header-mini-links"
            >
              <Nav.Item>
                <Nav.Link href="#home">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#features">My Account</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#pricing">Wishlist</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#pricing">Order Tracking</Nav.Link>
              </Nav.Item>
            </Nav>

          </Col>
          <Col xs={6} className="text-center flash-text">
            100% Secure delivery without contacting the courier
          </Col>
          <Col xs={3}>
            <Nav
              className="header-mini-links d-flex justify-content-end"
            >
              <Nav.Item>
                Need help? Call Us:
                <strong className="text-green">+ 1800 900</strong>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="javascript:void(0)">
                  <SelectBox options={optionsLanguages} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="javascript:void(0)">
                  <SelectBox options={optionsCurrency} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}