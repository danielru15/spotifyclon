import React, {useState, Fragment } from 'react'
import useAuth from './useAuth'
import styled from 'styled-components'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'


//estilos
const Spotifybody = styled.div`
    display:flex;
    
`

const Player = ({code}) => {
const AccesToken = useAuth(code)
const [playera, setplayera] = useState({})
const Play = (cancion) => {
    setplayera(cancion)
}
    return (
    <Fragment>
        <Spotifybody>
            <Sidebar AccesToken={AccesToken}/>
            <Body AccesToken={AccesToken}
                Play={Play}
            />
        </Spotifybody>
        <Footer  AccesToken={AccesToken}
                 playuri={playera?.uri}
        />
    </Fragment>
    )
}

export default Player
