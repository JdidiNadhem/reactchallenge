import React from 'react'
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap';
import "../Navbar/Navbar.css";
function Navba() {
    return (
        <header>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movie List</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </header>
    )
}

export default Navba
