import React from 'react'
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';

const movieCard = (props) => {
    let showname=()=>{
        alert(props.name)
    }
    let starsrc="https://www.flaticon.com/svg/vstatic/svg/2052/2052751.svg?token=exp=1612814085~hmac=847b881e015aa10a2cf44eaeaaea1e32";
    return (
        <Card style={{ width: '18rem' }} onClick={showname}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.type}</ListGroupItem>
    <ListGroupItem>{props.date}</ListGroupItem>
    <ListGroupItem>{props.rating} <img src={starsrc} alt="star" style={{width:"40px" , height:"20px" }}></img></ListGroupItem>
  </ListGroup>
</Card>
    )
}

export default movieCard
