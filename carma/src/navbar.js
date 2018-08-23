import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">CRMP</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}>
                  <Link to='/'>Home</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Drivers
                </NavItem>
                {/* <NavDropdown eventKey={3} title="Finances" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown> */}
              </Nav>
              <Nav pullRight>
                {/* <NavItem eventKey={1} href="#">
                  Settings
                </NavItem> */}
                <NavItem eventKey={2} href="#">
                  Settings
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            </div>
        )
    }

export default Header;