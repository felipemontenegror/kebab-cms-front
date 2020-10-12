import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'

export default () => {

    const menu = [
        {
            title: "Home",
            link: '',
 

        },
        {
            title: "Sobre",
            link: 'sobre',


        },
        {
            title: "Produtos",
            link: '/produtos',
 

        },
        {
            title: "Serviços",
            link: 'servicos',


        },
        {
            title: "Contato",
            link: 'contato',


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
                                <NavLink to={item.link} key={i}>
                                    <Nav.Link href="#home">{item.title}</Nav.Link> 
                                </NavLink>
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

    .nav-link:hover{  
        color: #8A2BE2 !important; 
        font-weight: 500;
    }

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
        font-size: 30px;
        text-align: center;
        letter-spacing: 3px;
    }

`
// <NavLink exact={true} to={item.link} key={i}>
//<Nav.Link as="div">{item.title}</Nav.Link>
// </NavLink>
