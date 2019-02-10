import React from 'react'
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <Card className="text-center">
            <Card.Header>Lotto Rossignol</Card.Header>
            <Card.Body>
                <Card.Title>Version 1.2</Card.Title>
                <Card.Text>
                    Développé en Reactjs
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default About