import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return(

        <Contact>
            <TitlePage title="Contato" sub="Entre em Contato Conosco" />
            Contact
        </Contact>
    )
}

const Contact = styled.div`
display: block;
height:500px;
background: red;
`
