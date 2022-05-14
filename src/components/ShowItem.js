import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Card, Row, Container, Button } from "react-bootstrap";


const ShowItem = () => {
  const location=useLocation();
 const item=location.state




  
  return (
  <>
      <Container>

  <Col key={item.idx}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={require(`${item.url}`)}
                    style={{
                      minWidth: "550px",
                      maxWidth: "500px",
                      maxHeight: "500px",
                      minHeight: "500px",
                    }}
                  />
                  <Card.Body style={{ marginLeft: "17px", marginRight: "25px" }} >
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text style={{textAlign: "center",fontSize: "28px",  fontWeight: "bold", fontFamily: "auto"}} >{item.price} </Card.Text>
              <Button>add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
              </Container>

  </>
  )
}

export default ShowItem
