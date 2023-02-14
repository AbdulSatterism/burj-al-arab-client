import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='header-image'>
            <Navbar className='text' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/booking/id">Book</Nav.Link>
                            {user?.uid ?

                                <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                                :
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                                </>
                            }
                            <Nav.Link>@{user?.email}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='name'>
                <h1>Burj Al Arab </h1>
            </div>
        </div>
    );
};

export default Header;