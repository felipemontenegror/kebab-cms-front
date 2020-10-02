import React from 'react';
import styled from 'styled-components';

const Layout = ({ childern }) => {
    return (
        <>
            <Header />
            <Content>
                {childern}
            </Content>
            <Footer />
        </>
    )
}

const Header = styled.div`
    background: blue;
    height: 200px;
    width: 100%;
    
`
 

const Content = styled.div`
    background: pink;
    min-height: 500px;
`


const Footer = styled.div`
    background: green;
    height: 200px;
    width: 100%
`



export default Layout