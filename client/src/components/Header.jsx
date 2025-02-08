
import React from 'react';
import { Navbar, Nav, Container, Button, Form, NavLink } from 'react-bootstrap';
import { SlBasket } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../features/auth/authSlice'; // Import logOut action

const Header = ({ showLogin }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logout button clicked"); // Check if this logs when clicked
    dispatch(logOut());
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand to="/">
            <img
              src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-food-logo-png-image_5762315.png"
              width="80"
              className="d-inline-block align-top"
              alt="Food Delivery Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto list fw-medium gap-5">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#menu">Menu</NavLink>
              <NavLink href="#download">Mobile-app</NavLink>
              <NavLink href="#footer">Contact Us</NavLink>
            </Nav>
            <Form className="d-flex">
              <FiSearch className='search fs-3 text-success' />
            </Form>

            <Nav className="ms-lg-3 align-items-center gap-3">
              <div className='icon'>
                <NavLink href='/Cart'>
                  <SlBasket style={{ color: 'green', fontSize: '28px', marginRight: '15px' }} />
                </NavLink>
                <span className='dot'></span>
              </div>

              {user ? (
                <>
                  <span className="me-3">Welcome, {user.name || user.email}!</span>
                  <Button onClick={handleLogout} className='btn rounded-pill px-4 p-2'>Log out</Button>
                </>
              ) : (
                <Button onClick={() => showLogin(true)} className='btn rounded-pill px-4 p-2'>Log in</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
