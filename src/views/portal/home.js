// Home é a página pública do portal
import React from 'react';
import styled from 'styled-components';
import { BiHome } from 'react-icons/bi';
import Layout from '../../components/Layout/index'

const Home = () => {
  return (
      <Layout>
              <HomeContainer>
              <IconHome /> Pagina Inicial
              </HomeContainer>
      </Layout>
  )
}

export default Home

const HomeContainer = styled.div`
    background: #ccc;
`
const IconHome = styled(BiHome)`
color: red
`


