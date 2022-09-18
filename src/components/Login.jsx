import { findByLabelText } from '@testing-library/react';
import React from 'react'
import styled from 'styled-components';

export default function Login() {
    const handleClick = () => {
        const clientId = "9ce390907648454eb5c65bd134b38718"; //client id unique to each user
        const redirectUrl = "http://localhost:3000/"; //after authorization, need to be redirected to this URL. Needs to be redirected correctly otherwise won't get access token
        const apiURL = "https://accounts.spotify.com/authorize"; //connect redirect url to api authorization url
        const scope = ['user-read-email','user-read-private','user-modify-playback-state', //various authorization scopes from Spotify dev library
        'user-read-playback-state',
        'user-read-currently-playing','user-read-recently-played',
        'user-read-playback-position',
        'user-top-read'];

        //javascript function to assign authorization url
        window.location.href = `${apiURL}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`; 
    };
    
    return <Container> 
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="spotify" />
        <button onClick={handleClick}>Connect Spotify</button>
        
    </Container>;
    
}


const Container = styled.div`
    //Code below is in CSS!
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #a89b32;
    gap: 5rem;
        img{
            height: 20vh; 
        }
        button{
            padding: 1rem 5rem; 
            border-radius: 5rem; 
            border: none; 
            background-color: black; 
            color: #a89b32; 
            font-size: 1.4rem;
            cursor: pointer;
        }
`;