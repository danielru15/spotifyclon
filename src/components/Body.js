import React,{useState,useEffect, Fragment} from 'react'
import styled from 'styled-components'
import Header from './Header'
import SpotifyWebApi from 'spotify-web-api-node'
import ResultadoCanciones from './ResultadoCanciones'
import Main from './Main'
import Recentlisten from './Recentlisten'


//estilos
const BodyContainer = styled.div`
    width: 100vw;
    background-color: #1B1B1B;
    
`
const BUSCAR = styled.h1`
    color:white;
    margin-left:25px;
    margin-right:25px;
    margin-top:50px;
    margin-bottom:20px;
`

const Table = styled.table `
width:77vw;
margin:5rem 2rem;
margin-bottom:7rem;
color:white;
border-collapse: collapse;

thead th{
    border-bottom: 1px solid white;
     padding: 10px;
  text-align: left;
   }

   tbody tr:hover {
       background-color:#575757; }
   tbody  td {
       padding:7px;
       text-align:left;
   }
`
const BodyMain = styled.div`
    width:80vw;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:20px;
    margin-bottom:90px;
`
// spotify api
const spotifyApi = new SpotifyWebApi({
    clientId: "fc93d7f76128405392aed38e5205da57"
})

const Body = ({AccesToken,Play}) => {
    const [Buscar, setBuscar] = useState('')
    const [ResultadosBuscar, setResultadosBuscar] = useState([])
    const [Inicio, setInicio] = useState([])
    const [escureciente, setescureciente] = useState([])
    //  manda la cancion al reproductor
    function cancionSonando(cancion) {
        Play(cancion)
    }
     useEffect(() => {
         if(!AccesToken) return
         spotifyApi.setAccessToken(AccesToken)
     }, [AccesToken]) 

      useEffect(() => {
         if(!Buscar) return setResultadosBuscar([])
        if(!AccesToken) return
        let cancel = false
        spotifyApi.searchTracks(Buscar,{ limit : 50}).then(res => {
            //console.log(res)
            if(cancel) return
            setResultadosBuscar( res.body.tracks.items.map((cancion,item) =>{
                const smallestAlbumImage = cancion.album.images.reduce(
                    (smallest, image) => {
                      if (image.height < smallest.height) return image
                      return smallest
                    },
                    cancion.album.images[0]
                  )
                return {
                    number:[item + 1],
                    id:cancion.id,
                    artista:cancion.artists,
                    titulo: cancion.name,
                    uri: cancion.uri,
                    album: cancion.album.name,
                    duration:cancion.duration_ms,
                    explicit:cancion.explicit,
                    albumUrl:smallestAlbumImage.url,
                }
            }))
        })
        return ()=> cancel= true
    }, [Buscar, AccesToken]) 
    let resbusqueda = ResultadosBuscar.length 

    //Home
    useEffect(() => {
        if(!AccesToken) return
        spotifyApi.getCategories({
            limit : 16,
            offset: 0,
            country: 'CO',
            locale: 'CO'
        })
        .then(data => {
            setInicio( data.body.categories.items.map((datos) =>{
                return {
                    titulo:datos.name,
                    album:datos.icons[0].url,
                    uri:datos.href
                }
            }))
            
        }) 
    }, [AccesToken])
    
    // escuchadas recientemente
    useEffect(() => {
        let arr = []
        if(!AccesToken) return// Get Current User's Recently Played Tracks
        spotifyApi.getMyRecentlyPlayedTracks({
          limit : 4
        }).then(function(data) {
            // Output items
            let datas = data.body.items
            datas.forEach(item => {
                if(!arr.includes(item)){
                    arr.push(item.track);
                }
                //console.log(arr)
            });
            setescureciente(arr)
          });
    }, [AccesToken])
   console.log(escureciente)
    return (
        <BodyContainer>
            <Header 
                     AccesToken={AccesToken } 
                    value={Buscar} 
                    onChange={(e) => setBuscar(e.target.value)} 
            />
            { 
               Buscar ? 
               <>
                   <BUSCAR>{resbusqueda >= 1 ? ' Todas las canciones de ' + (Buscar) : ' No se ha encontrado ningún resultado para ' + (Buscar) }</BUSCAR>
                   <Table>
                       <thead>
                           <tr>
                               <th>#</th>
                               <th>TITULO</th>
                               <th>ALBUM</th>
                               <th>time</th>
                           </tr>
                          
                       </thead>
                       <tbody>
                       { 
                       ResultadosBuscar.map(cancion =>(

                            <ResultadoCanciones 
                                cancion={cancion} 
                                key={cancion.uri}
                                a={resbusqueda}
                                cancionSonando={cancionSonando}
                            />
                        ))
                        
                    }
                       </tbody>
                 </Table> 
               </>
               : <>
                    <BUSCAR>Escuchados recientemente</BUSCAR>
                    <BodyMain>
                        {
                        
                        
                        }
                    </BodyMain>
                    <BUSCAR>Categorias Colombia.</BUSCAR>
                    <BodyMain>
                        {
                            Inicio.map(datos => (
                                <Main 
                                   datos={datos}
                                   key={datos.uri}
                                />
                            ))
                        }
                    </BodyMain>
               </>
            }
        </BodyContainer>
    )
}

export default Body
