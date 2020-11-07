import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Form,FormControl,Button} from 'react-bootstrap';
import '../Navigate.css';



function Navigate (){ 
  return (
<Navbar className="color-nav"
 variant="light">
    <Navbar.Brand href="#home">O-zone</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/login">Sign in</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
  );

}
export default Navigate;