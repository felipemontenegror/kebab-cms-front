import React from 'react'
import styled from 'styled-components'
//import {  } from '../../assets/styles/globalStyle'

import Header from './header'
import Footer from './footer'


const Layout = ({children}) => {
    return(
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
                <Content>
                    {children}
                </Content>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}


const HeaderContainer =styled.div`

`
const Content = styled.div`
    background: #8A2BE2;
    min-height: 400px;
`

const FooterContainer = styled.div`
    background: #000000;
    height: 200px;
    width: 100%;
`

export default Layout
