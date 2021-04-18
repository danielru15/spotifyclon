import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    background-color:#000;
    & img {
        width:100%;
    }
`
const LoginButton = styled.a`
    padding:20px;
    background-color:#1db954;
    border-radius:90px;
    color:white;
    text-decoration:none;
    text-transform:uppercase;
    font-weight:bolder;
`

// endpoint
const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "fc93d7f76128405392aed38e5205da57"
const redirectUri="http://localhost:3000/"
const scopes=["user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"]
const loginUrl = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`
const Login = () => {
    return (
        <LoginContainer>
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" className="logo"/>
            <LoginButton href={loginUrl}>Continuar con spotify </LoginButton>
        </LoginContainer>
    )
}

export default Login
