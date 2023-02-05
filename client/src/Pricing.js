import React, {useEffect} from 'react';
import {Container, Card, Col, Row, Button } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";


export const Pricing = () => {
    const navigate = useNavigate();

    const signPage = () => {
        navigate('/login')
    }
    return(
        <>
        <Container xl={12} style={{justifyContent: 'center', marginTop: '20px'}}>
            <Row xl={12} >
                <Col xl={4}>
                    <Card className="alignCenter">
                        <Card.Title style={{fontSize: '30px', marginTop: '10px' }}>Basic</Card.Title>
                         <Card.Body style={{margin: '5px'}}>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike style={{ color: 'grey'}}>$51</strike></Card.Text>
                        <Card.Text><h2><sup style={{top: '-1.5em', fontSize: '12px' }}>CAD $</sup>38<sub style={{ fontSize: '12px' }}>/mon</sub></h2></Card.Text>
                        <Card.Text style={{marginTop: '-20px'}}>billed yearly</Card.Text>
                        <hr style={{width: '80%', marginLeft: '30px'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.9% + 30¢ CAD online</Card.Text>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.7% + 0¢ CAD in person</Card.Text>
                        <Button onClick={() => navigate("/login")} style={{width: 'max-content', margin: '6px 125px'}}>Try For Free</Button>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="alignCenter">
                        <Card.Title style={{fontSize: '30px', marginTop: '10px' }}>Simple</Card.Title>
                        <Card.Body style={{margin: '5px'}}>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike style={{ color: 'grey'}}>$132</strike></Card.Text>
                        <Card.Text><h2><sup style={{top: '-1.5em', fontSize: '12px' }}>CAD $</sup>99<sub style={{ fontSize: '12px' }}>/mon</sub></h2></Card.Text>
                        <Card.Text style={{marginTop: '-20px'}}>billed yearly</Card.Text>
                        <hr style={{width: '80%', marginLeft: '30px'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.7% + 30¢ CAD online</Card.Text>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.7% + 0¢ CAD in person</Card.Text>
                        <Button onClick={() => navigate("/login")} style={{width: 'max-content', margin: '6px 125px'}}>Try For Free</Button>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="alignCenter">
                        <Card.Title style={{fontSize: '30px', marginTop: '10px' }}>Advanced</Card.Title>
                        <Card.Body style={{margin: '5px'}}>Everything you need to create your store, ship products, and process payments</Card.Body>
                        <Card.Text><strike style={{ color: 'grey'}}>$517</strike></Card.Text>
                        <Card.Text><h2><sup style={{top: '-1.5em', fontSize: '12px' }}>CAD $</sup>389<sub style={{ fontSize: '12px' }}>/mon</sub></h2></Card.Text>
                        <Card.Text style={{marginTop: '-20px'}}>billed yearly</Card.Text>
                        <hr style={{width: '80%', marginLeft: '30px'}}/>
                        <Card.Subtitle>Credit card rates</Card.Subtitle>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.4% + 30¢ CAD online</Card.Text>
                        <Card.Text><CheckCircle style={{ color: 'green', marginRight: '10px' }}/>2.7% + 0¢ CAD in person</Card.Text>
                        <Button onClick={() => navigate("/login")} style={{width: 'max-content', margin: '6px 125px'}}>Try For Free</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pricing;