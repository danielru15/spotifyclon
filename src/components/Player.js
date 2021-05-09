import React, {useState, Fragment } from 'react'
import useAuth from './useAuth'
import styled from 'styled-components'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { tokenState } from '../Features/tokenSlice'

//estilos
const Spotifybody = styled.div`
    display:flex;
    
`

const Player = ({code}) => {
    let {token} = useSelector(tokenState)
const AccesToken = useAuth(code)
const [playera, setplayera] = useState({})
const [playPlaylist, setplayPlaylist] = useState([])
const Play = (cancion) => {
    setplayera(cancion)
}
const MostrarPlaylist = (dato) => {
    setplayPlaylist(dato)
}
    return (
    <Fragment>
        <Spotifybody>
            <Sidebar 
                AccesToken={AccesToken}
                MostrarPlaylist ={MostrarPlaylist}
            />
            <Body 
                AccesToken={AccesToken}
                Play={Play}
            /> 
        </Spotifybody>
        <Footer  
                AccesToken={AccesToken}
                playuri={playera?.uri}
                playlista={playPlaylist?.uri}
        />
    </Fragment>
    )
}

export default Player
