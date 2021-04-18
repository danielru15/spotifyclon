import React from 'react'
import styled from 'styled-components'

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
& h4 {
    color:white;
    margin-left:15px;
}
`

const Header = () => {
  
      

    return (
        <SpotifyHeader>
            <HeaderLeft>
                <SearchIcon/>
                <input type="text" 
                placeholder="Artistas, canciones o podcast"
                
                />
            </HeaderLeft>
            <HeaderRight>
                <Avatar/>
                <h4>daniel</h4>
            </HeaderRight>
        </SpotifyHeader>
    )
}

export default Header
