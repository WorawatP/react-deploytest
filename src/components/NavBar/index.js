import React, { Component } from 'react'
import {
    Button,
    Navbar,
    NavDropdown,
    FormControl,
    Form,
    Nav,
    Card,
    ListGroup
} from 'react-bootstrap';
export default class NavBar extends Component {
    render() {
        return (
            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <Navbar fixed="top" bg="dark" expand="lg">
                    <Navbar.Brand style={{ color: 'white' }} href="/">FastFood</Navbar.Brand>
                    <Navbar.Toggle style={{ color: 'white' }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={{ color: 'white' }} href="/information">Information</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} href="/menu">Menu</Nav.Link>
                        </Nav>
                        {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    </Navbar.Collapse>
                </Navbar>

            </div>

        )
    }
}
