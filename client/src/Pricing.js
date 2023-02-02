import React from 'react';
import {Container, Card, Col, Row, Button } from 'react-bootstrap'

export const Pricing = () => {

    return(
        <>
        <Container xl={12} style={{justifyContent: 'center'}}>
            <Row xl={12} >
                <Col xl={4}>
                    <Card>
                        <Card.Title>Basic</Card.Title>
                         <Card.Body>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike>$51</strike></Card.Text>
                        <Card.Text><h2><sup>CAD $</sup>38<sub>/mon</sub></h2></Card.Text>
                        <Card.Text>billed yearly</Card.Text>
                        <hr style={{width: '80%'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text>2.9% + 30¢ CAD online</Card.Text>
                        <Card.Text>2.7% + 0¢ CAD in person</Card.Text>
                        <Button>Try For Free</Button>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Title>Simple</Card.Title>
                        <Card.Body>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike>$132</strike></Card.Text>
                        <Card.Text><h2><sup>CAD $</sup>99<sub>/mon</sub></h2></Card.Text>
                        <Card.Text>billed yearly</Card.Text>
                        <hr style={{width: '80%'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text>2.7% + 30¢ CAD online</Card.Text>
                        <Card.Text>2.7% + 0¢ CAD in person</Card.Text>
                        <Button>Try For Free</Button>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Title>Advanced</Card.Title>
                        <Card.Body>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike>$517</strike></Card.Text>
                        <Card.Text><h2><sup>CAD $</sup>389<sub>/mon</sub></h2></Card.Text>
                        <Card.Text>billed yearly</Card.Text>
                        <hr style={{width: '80%'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text>2.4% + 30¢ CAD online</Card.Text>
                        <Card.Text>2.7% + 0¢ CAD in person</Card.Text>
                        <Button>Try For Free</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pricing;