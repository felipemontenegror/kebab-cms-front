import React from 'react'
import styled from 'styled-components'
import TitlePage from '../../../components/titlePage'

export default () => {
    return(

        <Product>
            <TitlePage title="Produtos" sub="Conheça nossos Produtos" />
            Product
        </Product>
    )
}

const Product = styled.div`
display: block;
height:500px;
background: #EEE;
`
