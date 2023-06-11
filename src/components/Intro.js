import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className=' intro' >
            <Container className=
                'text-white d-flex justify-content-center align-items-center    '>
                <Row>
                    <Col>
                        <div className='title'>Nonton Gratis Mantap  </div>
                        <div className='title'>Ngak Pake Karcis</div>
                        <div className='introButton mt-4 text-center dark'>
                            <Button variant='dark'>Lihat Semua Button</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro