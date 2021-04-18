import React from 'react'
import styled from 'styled-components'
import Header from './Header'

//estilos
const BodyContainer = styled.div`
flex:0.8;
background-color: #1B1B1B;

`


const Body = () => {
    return (
        <BodyContainer>
            <Header/>
        </BodyContainer>
    )
}

export default Body
