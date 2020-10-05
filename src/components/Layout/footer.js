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
                        <Col md={3}>
                            <div className="title">Sobre Nós</div>
                            <div className="aboutUs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis non lorem in dapibus. Proin et felis fermentum, dapibus ante.
                            </div>   

                        </Col>
                        <Col md={4}>
                            <div className="title">Sobre Nós</div>
                            <div className="bg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis non lorem in dapibus. Proin et felis fermentum, dapibus ante.
                            </div> 

                        </Col>
                        <Col md={2}>
                            <div className="title">Sobre Nós</div>
                            <div className="bg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis non lorem in dapibus. Proin et felis fermentum, dapibus ante.
                            </div> 

                        </Col>
                        <Col md={3}>
                            <div className="title">Sobre Nós</div>
                            <div className="bg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis non lorem in dapibus. Proin et felis fermentum, dapibus ante.
                            </div> 

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
                        All rights reserved
                    </FooterCopy>
                </Row>
            </Container>
        </Footer>
    )
    
}

const Footer = styled.div`
    background: #111;
    padding: 15px 0;
    color: #eee
`



const FooterInfo = styled.div`
    .title{
        font-size: 20px;
        font-weight: 600;
        padding: 5px 0;
        border-bottom: thin solid #8A2BE2;
        color: #8A2BE2

    }
`
const FooterSocial = styled.div`
    width: 800%;
`
const FooterCopy = styled.div`
    width: 800%;

`
