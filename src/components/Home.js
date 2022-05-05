import React from 'react'
import data from './data.json'
import {Col,Card,Row, Container} from 'react-bootstrap'
import Navb from './Navb'

const Home = () => {
  return (
    <>
      <Navb />
    <Container>
      <Row  md={2} xs={2}  className="g-4">

     {data.map((item, id)=>{return(
  <Col key={id}>
      <Card >
        <Card.Img variant="top" src={require(`${item.url}`)} style={{minWidth:"550px",maxWidth:"500px",maxHeight:"500px",minHeight:"500px"}} />
        <Card.Body  style={{marginLeft:"17px", marginRight:"25px"}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>  {item.description} </Card.Text>
          <Card.Text style={{float:"right"}}>  <h3>{item.price}</h3></Card.Text>
        </Card.Body>
      </Card>
    </Col>  
     )      
    })}
        </Row>   

    </Container>
    </>
  );
}

export default Home
