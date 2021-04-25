import React from 'react'
import styled from 'styled-components'

const DivBody = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
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
        width:14vw;
        height:28vh;
        border-radius:.20rem;
        box-shadow: 0 10px 30px 0 rgba(0,0,0,.3), 0 1px 2px 0 rgba(0,0,0,.2);
    }
    h3{
        margin-top:16px;
        color:white;
    }
`


const Main = ({datos}) => {
    return (
        <DivBody>
            <img src={datos.album} alt="imagen"/>
            <h3>{datos.titulo}</h3>
        </DivBody>
    )
}

export default Main
