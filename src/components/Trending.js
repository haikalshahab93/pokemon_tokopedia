import React from 'react'
import { Card, Col, Container, Row,Image } from 'react-bootstrap'
import cardImage from "../assets/images/card1.jpeg"

export const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}  className='movieWrapper mt-3 '>
                        <Card className="text dark text-center movieImage">
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

                    <Col md={4}  className='movieWrapper mt-3 '>
                        <Card className="text dark text-center movieImage">
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

                    <Col md={4}  className='movieWrapper mt-3 '>
                        <Card className="text dark text-center movieImage">
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
