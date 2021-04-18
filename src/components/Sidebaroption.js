import React from 'react'
import styled from 'styled-components'
//estilos
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
`

const Sidebaroption = ({title, Icon}) => {
    return (
        <H1>
            {
                Icon && <Icon/>
            }
            {
               Icon ? <h2>{title}</h2> : <h3>{title}</h3>
            }
        </H1>
    )
}

export default Sidebaroption
