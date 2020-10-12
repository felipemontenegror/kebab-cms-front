import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return(
        <About>
            <TitlePage title="Sobre" sub="Conheça nossa história" />
        </About>
    )
}


const About = styled.div`
display: block;
height: 500 px;
color: red;

`