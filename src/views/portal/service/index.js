import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return(

        <Service>
            <TitlePage title="Serviços" sub="Informaçoes Sobre Nossos Serviços" />
            Services
        </Service>
    )
}

const Service = styled.div`
display: block;
height:500px;
background: #EEE;
`
