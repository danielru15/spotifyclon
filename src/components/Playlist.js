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
  h3{
      font-size:1.3em;
      margin-left:3px;
  }
`

const Playlist = ({dato}) => {

    return (
        <Playlists>
            <h3>{dato.nombre}</h3>
        </Playlists>
    )
}

export default Playlist
