import React from 'react'
import styled from 'styled-components'

const DivBody = styled.div`
    margin:16px  16px;
    background-color:#181818;
    width:15vw;
    height:36vh;
    border-radius: .50rem;
    padding: 1em;
    &:hover {
        background-color: rgb(38, 38, 38);
    }
    img {
        margin:0 auto;
        width:15vw;
        height:26vh;
        border-radius:.20rem;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    }
    h3{
        text-align:left;
        margin-top:16px;
        color:white;
    }
    p{
        color:white;
        span{
        margin-left:5px;}
    }
`

const Recentlisten = ({item}) => {
   
    return (
        <DivBody>
            <img src={item.album} alt="imagen"/>
            <h3>{item.nombre}</h3>
            <p>{item.artistas.map(
                    artista => <span>{artista.name }, </span>
                    )
            } </p>
        </DivBody>
    )
}

export default Recentlisten
