import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem, Navbar, Nav, NavItem, NavDropdown, Grid } from 'react-bootstrap';


export default class Header extends React.Component {

    render() {
        return (
            <Navbar inverse fluid staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a href="#">Home</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/products">
                            <NavItem eventKey={1} href="#">Products</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <NavItem eventKey={2} href="#">Projects</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <LinkContainer to="/products">
                                <MenuItem eventKey={3.3} href="#">Products</MenuItem>
                            </LinkContainer>
                            <MenuItem divider/>
                            <LinkContainer to="/projects">
                                <MenuItem eventKey={3.3} href="#">Projects</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}