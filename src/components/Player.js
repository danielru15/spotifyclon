import React, { Fragment } from 'react'
import styled from 'styled-components'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'


//estilos
const Spotifybody = styled.div`
    display:flex;
    
`

const Player = () => {

    return (
    <Fragment>
        <Spotifybody>
            <Sidebar/>
            <Body/>
        </Spotifybody>
        <Footer/>
    </Fragment>
    )
}

export default Player
