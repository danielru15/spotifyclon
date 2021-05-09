import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Sidebaroption from './Sidebaroption'
import CreatePlaylist from './Createplaylist'
import Playlist from './Playlist'
import SpotifyWebApi from 'spotify-web-api-node'
// icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddBoxIcon from '@material-ui/icons/AddBox';
//estilos
const SidebarContainer = styled.div`
 flex:0.2;
 min-height:100vh;
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

// spotify api
const spotifyApi = new SpotifyWebApi({
    clientId: "fc93d7f76128405392aed38e5205da57"
})

const Sidebar = ({AccesToken,MostrarPlaylist}) => {
    // Estados
    const [crear, setcrear] = useState('')
    const [Resultplaylist, setResultplaylist] = useState([])
   function MandarPlaylist(dato) {
    MostrarPlaylist(dato) 
   }
    useEffect(() => {
        if(!AccesToken) return
        spotifyApi.setAccessToken(AccesToken)
    }, [AccesToken]) 

    // crea la playlist
    const Crearplaylists =  () => {
        if(!AccesToken) return
        spotifyApi.setAccessToken(AccesToken)
        spotifyApi.createPlaylist(prompt(), { 'description': 'My description', 'public': true })
        .then(dato => { 
            setcrear(dato.body.name)    
        }) 
    }
    // muestra la playlist
    useEffect( () => {
        if(!AccesToken) return
        spotifyApi.setAccessToken(AccesToken)
        spotifyApi.getUserPlaylists()
        .then(data => {
            console.log(data)
            setResultplaylist(data.body.items.map(dato =>{
                return {
                    nombre:dato.name,
                    uri:dato.uri,
                    description:dato.description,
                    canciones:dato.tracks,
                    propietario:dato.owner.display_name,
                    imagen:dato.images[0]?.url
                }
            }))
        })
    }, [AccesToken,crear])
    return (
        <SidebarContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" className="logo"/>
            <Sidebaroption title="Inicio" Icon={HomeIcon}/>
            <Sidebaroption title="Buscar" Icon={SearchIcon}/>
            <Sidebaroption title="Tu biblioteca" Icon={LibraryMusicIcon}/>
            <CreatePlaylist 
                title="Crear playlist"
                Icon={AddBoxIcon} 
                AccesToken={AccesToken } 
                onClick={(e) => Crearplaylists(e.preventDefault()) }
            />
            <hr/>
            { 
                Resultplaylist.map(dato =>(
                    <Playlist
                        dato={dato}
                        key={dato.uri}
                        MandarPlaylist={MandarPlaylist}
                    />
                ))  
            }

        </SidebarContainer>
    )
}

export default Sidebar
