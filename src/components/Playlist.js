import React from 'react'
import styled from 'styled-components'

const Playlists = styled.div`
  display:flex;
  align-items:center;
  color:gray;
  cursor:pointer;
  margin:7px 2rem;
  transition:300ms ease-in;
  &:hover {
      color:white;
  }
  p{
      font-size:1.3em;
      margin-left:3px;
  }
`

const Playlist = ({dato,MandarPlaylist}) => {
    function EMandarPlaylist() {
        MandarPlaylist(dato)
    }
    return (
        <Playlists
        onClick={EMandarPlaylist}
        >
            <p>{dato.nombre}</p>
        </Playlists>
    )
}

export default Playlist
