import React from 'react'
import styled from 'styled-components'

//estilos
const DIV = styled.div `
display:flex;
align-items:center;
    img{
        margin-right:1rem;
    }
    div{
    text-align:left;
    h3.activo {
        color:green;
    }
    div{
        display:flex;
        color:#F0F0F0;
        & span {
            margin-right:8px;
            border-radius: 2px;
            color: #121212;
            background-color:hsla(0,0%,100%,.6);
        }
        p {
            margin-left:5px;
            
        }
        
    }
    
}
`
const ResultadoCanciones = ({cancion,cancionSonando}) => {
    

    // ms a minutos
        var minutes = Math.floor(cancion.duration / 60000);
        var seconds = ((cancion.duration % 60000) / 1000).toFixed(0);
        let time = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
   
    // artistas 
    let artistas = cancion.artista

    // funcion
    function play() {
        cancionSonando(cancion)
    }

    return (
                <tr
                onClick={play}
                >
                    <td>{cancion.number}</td>
                    
                    <td>
                        <DIV >
                            <img src={cancion.albumUrl} style={{ height: "45px", width: "45px" }} alt="imaen"/>
                            <div>
                                <h3
                                
                                >{cancion.titulo}</h3>
                                <div>
                                    <span>{cancion.explicit ? 'E ' : null}</span>
                                    {
                                     artistas.map(
                                        artista => <p key={`${artista.id}`}>{artista.name},</p>
                                        )
                                    }
                                </div>
                            </div>
                        </DIV>
                    </td>
                    <td>{cancion.album}</td>
                    <td>{time}</td>
                
                </tr> 
    )
}

export default ResultadoCanciones
