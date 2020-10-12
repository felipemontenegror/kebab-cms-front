import React from 'react'
import styled from 'styled-components'
// import { BiHome } from 'react-icons/bi'

import Banner from './banner'
import Info from './info'
import About from './about'
import Menu from './menu'
import Products from './products'


const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Info />
            <About />
            <Menu />
            <Products />
        </HomeContainer>
    )
}
export default Home

const HomeContainer = styled.div`
    background: #ccc;

`