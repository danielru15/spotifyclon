import React from 'react'
import styled from 'styled-components'
import Sidebaroption from './Sidebaroption'
// icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

//estilos
const SidebarContainer = styled.div`
 flex:0.2;
 height:100vh;
 background-color:black;
 min-width:245px;
 color:white;
   & img{
       height:75px;
       padding:10px;
       margin-top:1rem;
       margin-right:auto;

   }
   & hr {
       border: 1px solid smokegray;
       width:90%;
       margin:12px auto;
   }
    
`
const Playlist = styled.h2`
 margin:12px 2rem;
`
const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" className="logo"/>
            <Sidebaroption title="Inicio" Icon={HomeIcon}/>
            <Sidebaroption title="Buscar" Icon={SearchIcon}/>
            <Sidebaroption title="Tu biblioteca" Icon={LibraryMusicIcon}/>
            <Playlist>Playlist</Playlist>
            <hr/>
            <Sidebaroption title="Buscar"/>
            <Sidebaroption title="Tu biblioteca" />
        </SidebarContainer>
    )
}

export default Sidebar
