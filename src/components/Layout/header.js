import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'

export default () => {

    const menu = [
        {
            title: "Home",
            link: '',
            icon: ''

        },
        {
            title: "Sobre",
            link: '',
            icon: ''

        },
        {
            title: "Produtos",
            link: '',
            icon: ''

        },
        {
            title: "Serviços",
            link: '',
            icon: ''

        },
        {
            title: "Contato",
            link: '',
            icon: ''

        },

    ]
    return (
        <Header>
            <Container>
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="#home">
                    <Logo>
                    <img className="logo" src={logo} alt="Logo" />
                    <span>Cozinha Mandala - O Original Kebab</span>
                    </Logo>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {menu.map((item, i) => ( 
                                <Nav.Link key={i} href="#home">{item.title}</Nav.Link> 
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Header>
    )
    
}



const Header = styled.div`
    background-color: #111;

`

const Logo = styled.div`
font-size: 20px;
font-Weight: 500;
margin:0;
font-family: 'Garamond';

img {
    width: 90px;
    margin: -5px;
    }

    span {
        color: white;
        margin-left: 15px;
        font-size: 20px;
        text-align: center;
        letter-spacing: 3px;
    }

`
