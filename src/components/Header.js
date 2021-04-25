import React,{useState,useEffect, Fragment} from 'react'
import styled from 'styled-components'
import SpotifyWebApi from 'spotify-web-api-node'
//icons
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';




//estilos
const SpotifyHeader = styled.div`
display:flex;
justify-content:space-between;
margin:12px  25px;

`
const HeaderLeft = styled.div`
    display:flex;
    align-items:center;
    flex:0.5;
    min-width:75px;
    background-color:white;
    border-radius:30px;
    padding:10px;
    & input {
        border:0;
        width: 100%;
    }
`
const HeaderRight = styled.div`
display:flex;
align-items:center;
background-color:black;
width:200px;
border-radius:30px;
padding:5px;
& h3 {
    color:white;
    margin-left:15px;
}
`
// spotify api
const spotifyApi = new SpotifyWebApi({
    clientId: "fc93d7f76128405392aed38e5205da57"
})

const Header = ({Buscar,onChange,AccesToken }) => {
    const [user, setuser] = useState('')
    useEffect(() => {
        if(!AccesToken) return
        spotifyApi.setAccessToken(AccesToken)
        spotifyApi.getMe()
        .then(data =>{
            setuser(data.body.display_name)
        }) 
    }, [AccesToken]) 
    

    return (
        <Fragment>
            <SpotifyHeader>
            <HeaderLeft>
                <SearchIcon/>
                <input type="search" 
                placeholder="Artistas, canciones o podcast"
                value={Buscar}
                onChange={onChange}
                />
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h3>{user}</h3>
            </HeaderRight>
        </SpotifyHeader>
        </Fragment>
        
    )
}

export default Header
