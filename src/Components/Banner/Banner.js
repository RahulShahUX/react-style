import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import { Container, InputGroup, Form, Button } from "react-bootstrap";

export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button type="button" className="slick-prev"><i className="fi-rs-angle-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i className="fi-rs-angle-right"></i></button>
    };
    return (
        <div className="slider-container">
            <Container fluid>
                <Slider {...settings}>
                    <div>
                        <img src="./images/slider-1.png" alt="slider 1" />
                        <div className="banner-content">
                            <h1 className="banner-title">
                                Don't miss amazing grocery deals
                            </h1>
                            <p className="banner-desc">Sign up for the daily newsletter</p>
                            <InputGroup  className="form-subscribe">
                                <Form.Control
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                    <div>
                        <img src="./images/slider-2.png" alt="slider 2" />
                        <div className="banner-content">
                            <h1 className="banner-title">
                                Fresh Vegetables Big discount
                            </h1>
                            <p className="banner-desc">Save up to 50% off on your first order</p>
                            <InputGroup  className="form-subscribe">
                                <Form.Control
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    )
}