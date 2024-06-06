import { useRef } from "react";
import { Col, Row, Button, Container, Nav } from "react-bootstrap";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import "./Category.css"

const CategoryList = [
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png", title: "Cake & Milk", count: "26", bgColor: "#F2FCE4" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png", title: "Oganic Kiwi", count: "28", bgColor: "#FFFCEB" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png", title: "Peach", count: "14", bgColor: "#ECFFEC" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png", title: "Red Apple", count: "54", bgColor: "#FEEFEA" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png", title: "Snack", count: "56", bgColor: "#FFF3EB" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png", title: "Vegetables", count: "72", bgColor: "#FFF3FF" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png", title: "Strawberry", count: "36", bgColor: "#F2FCE4" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png", title: "Black plum", count: "123", bgColor: "#FEEFEA" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png", title: "Custard apple", count: "34", bgColor: "#FFFCEB" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-14.png", title: "Coffe & Tea", count: "89", bgColor: "#FEEFEA" },
    { image: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png", title: "Headphone", count: "87", bgColor: "#ECFFEC" },
]

export default function Category() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <section className="section-banner">
            <Container fluid>
                <Row className="cat-header">
                    <Col className="d-flex col-8 align-items-end">
                        <h3>Featured Categories</h3>
                        <Nav
                            className="cat-header-links"
                        >
                            <Nav.Item>
                                <Nav.Link href="#cake">Cake & Milk</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#coffee">Coffes & Teas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#petfoods">Pet Foods</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#vegetables">Vegetables</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {/* <ul class="list-inline nav nav-tabs links">
                        <li class="list-inline-item nav-item"><a class="nav-link" href="/shop-grid-right">Cake &amp; Milk</a></li>
                        <li class="list-inline-item nav-item"><a class="nav-link" href="/shop-grid-right">Coffes &amp; Teas</a></li>
                        <li class="list-inline-item nav-item"><a class="nav-link active" href="/shop-grid-right">Pet Foods</a></li>
                        <li class="list-inline-item nav-item"><a class="nav-link" href="/shop-grid-right">Vegetables</a></li>
                    </ul> */}
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button onClick={previous} className="slider-prev slick-arrow"><i className="fi-rs-arrow-small-left"></i></Button>
                        <Button onClick={next} className="slider-next slick-arrow"><i className="fi-rs-arrow-small-right"></i></Button>
                    </Col>
                </Row>
                <div>
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {
                            CategoryList.map((cat, index) => {
                                return <CategoryCard key={index} cat={cat} />
                            })
                        }
                    </Slider>
                </div>
            </Container>
        </section>
    )
}