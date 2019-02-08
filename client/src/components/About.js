import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Navb from './Navb'

const About = () => {
    return (
        <Container fluid="true">
        <Navb/>
        <Card className="text-center">
            <Card.Header>Lotto Rossignol</Card.Header>
            <Card.Body>
                <Card.Title>Version 1.2</Card.Title>
                <Card.Text>
                    Développé en Reactjs
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default About