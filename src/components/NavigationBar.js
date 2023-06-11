import React from 'react'
import { Container, Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant='light'>
                <Container>
                    <NavbarBrand>FILM</NavbarBrand>
                    <Nav>
                        <NavLink>
                            Trending
                        </NavLink>
                        <NavLink>
                            Superhero
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar