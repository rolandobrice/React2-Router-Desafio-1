import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <>
            <Container className="text-center p-5">
                <Row>
                    <Col className='p-3'>
                        <h1>Bienvenido a <b>Happy Cake</b></h1>
                        <p>El lugar de los pasteles felices</p>
                        <h1>🎂</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home