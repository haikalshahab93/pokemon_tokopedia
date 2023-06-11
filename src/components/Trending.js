import React from 'react'
import { Card, Col, Container, Row,Image } from 'react-bootstrap'
import cardImage from "../assets/images/card.jpg"

export const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='movieWrapper'>
                        <Card className="movieImage">
                            <Image 
                                src={cardImage} 
                                alt="card Image"  
                    
                            />
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    
                    
                </Row>
                
            </Container>

        </div>
    )
}
