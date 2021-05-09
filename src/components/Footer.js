import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import SpotifyPlayer from 'react-spotify-web-playback';


//estilos
const FooterContainer = styled.div`
    position:fixed;
    bottom:0;
    height:90px;
    width:100vw;
    background-color: #181818;
    
`

const Footer = ({AccesToken,playuri,playlista}) => {
  
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [playuri,playlista])
    if (!AccesToken) return null
    return (
        
       <FooterContainer>
            <SpotifyPlayer
             styles={{
                height:'70px',
                activeColor: '#fff',
                bgColor: '#181818',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                sliderTrackColor: 'gray',
                sliderHandleColor: 'white',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
            token={AccesToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
              }}
              play={play}
              uris={playuri ? [playuri] : playlista ? [playlista] : []}
            />
       </FooterContainer>
      
    )
}

export default Footer
