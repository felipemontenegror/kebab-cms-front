import React from 'react'
import styled from 'styled-components'
import { Container, Col, Row } from 'react-bootstrap'
import {AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp, AiFillTwitterSquare} from 'react-icons/ai'

export default () => {
    return (
        <Footer>
            <Container>
                <FooterInfo>
                    <Row>
                        <Col md={5}>
                            <div className="title">Sobre Nós</div>
                            <div className="aboutUs">
                                <p>Dürum kebabs no pão saj feito na hora, chips, laricas e viagens degustativas na caixinha.</p>
                            </div>   

                        </Col>
                        <Col md={4}>
                            <div className="title">Funcionamento</div>
                            <div className="open">
                                <div>Rua Capitão Salmão, 48 - Humaitá, RJ</div>
                                <div>De Terça à domingo, das 19:00 às 02:00</div>
                            </div> 

                        </Col>
                        <Col md={3}>
                            <div className="title">Área de entrega</div>
                            <div className="delivery">
                                <div className ="block-23 mb-2"></div>
                                <div>Zona Sul</div>
                                <div>Centro</div>
                                <div>Grande Tijuca</div>
                            </div> 
                        <br></br>
                        </Col>
                    </Row>
                </FooterInfo>
                <Row>
                    <FooterSocial>
                        <AiFillFacebook />
                        <AiFillInstagram />
                        <AiOutlineWhatsApp />
                        <AiFillTwitterSquare />
                    </FooterSocial>
                    <FooterCopy>
                        Visite nosas Redes Sociais - All rights reserved
                    </FooterCopy>
                </Row>
            </Container>
        </Footer>
    )
    
}

const Footer = styled.div`
    background: #111;
    padding: 15px 0;
    color: #eee;
    border-top: 1px solid #eee
`



const FooterInfo = styled.div`
    .title{
        font-size: 18px;
        font-weight: 500;
        padding: 8px 0;
        border-bottom: thin solid #8A2BE2;
        margin-bottom: 10px;
        color: #eee;

    }
`
const FooterSocial = styled.div`
    cursor: pointer;    
    width: 100%;
    border-bottom: 1px dotted #8A2BE2;
    padding: 5px;
    svg {
        margin: 2px;
        font-size: 22px;
        :hover{
        color: #8A2BE2;
    }

    }
`
const FooterCopy = styled.div`
    width: 100%;
    padding: 10px;

`
