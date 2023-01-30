import React from 'react';
import {Card, Col, Row , Container} from 'react-bootstrap';

export const Template = () => {

    
   return (
       <div>
    <Container style={{margin: '40px 40px', display: 'flex', justifyContent: 'space-between' }}> 
    <Row lg={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
    {    
    [...Array(5)].map(function(element,i){
        return(
        <Col>
            <Card id={i} style={{margin: '15px 0px'}}>
                <Card.Img  variant="top" src={`/assets/${i+1}.jpg`} />
            </Card>
            <div style={{marginTop: '-15px'}}>Template-{i+1}</div>
        </Col>
        )    
        })
    }
    </Row>
    </Container>
    </div>
    )
}

export default Template;