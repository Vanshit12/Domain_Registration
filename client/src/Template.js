import React from 'react';
import {Card, Col, Row , Container, Button} from 'react-bootstrap';

export const Template = () => {

    
   return (
       <div>
    <Container style={{margin: '40px 40px', display: 'flex', justifyContent: 'space-between' }}> 
    <Row lg={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
    {    
    [...Array(5)].map(function(element,i){
        return(
        <Col>
            <Card id={i} style={{margin: '15px 0px', position: 'relative'}}>
                <a href={`/template_${i+1}`} target="_blank">
                    <Button className="button" style={{zIndex: 1, position: 'absolute', top: '50%', left: '40%'}}>Preview</Button>
                    <Card.Img  className="image" variant="top" src={`/assets/${i+1}.jpg`} />
                </a>
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