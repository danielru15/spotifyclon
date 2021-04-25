import React from 'react'
import styled from 'styled-components'

// estilos
const H1 = styled.div`
  display:flex;
  align-items:center;
  color:gray;
  height:40px;
  cursor:pointer;
  margin:10px 2rem;
  transition:300ms ease-in;
  &:hover {
      color:white;
  }
  h2{
      margin-left:3px;
  }
  `

const CreatePlaylist = ({title, Icon,onClick}) => {
    return (
        <H1>
            <Icon/>
            <h2
            onClick={onClick}
            >{title}</h2>
        </H1>
    )
}

export default CreatePlaylist
