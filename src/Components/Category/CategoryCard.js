import { Card, Col, NavLink } from "react-bootstrap"

export default function CategoryCard(props) {
    return (
        <Card className="cat-card" style={{ background: `${props.cat.bgColor}`, borderColor: `${props.cat.bgColor}` }}>
            <NavLink>
                <figure>
                    <Card.Img variant="top" src={props.cat.image} alt={props.cat.title} />
                </figure>
                <Card.Body>
                    <Card.Title>{props.cat.title}</Card.Title>
                    <Card.Text>
                        {props.cat.count} items
                    </Card.Text>
                </Card.Body>
            </NavLink>
        </Card>
    )
}