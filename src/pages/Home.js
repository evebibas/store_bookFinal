
import React, { useEffect, useState } from 'react';
import BookStores from '../components/Home/BookStores';
import { booksService } from '../services/booksService';
import styled, { createGlobalStyle } from 'styled-components';



const Home = () => {
    const GlobalStyle = createGlobalStyle`
    html {
      height: 100%
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #C9D6FF;
      height: 100%;
      margin: 0;
      color: #555;
    }
  `;
    const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: palevioletred;
  `;

 

    const [stores, setStores] = useState([])

    useEffect(() => {
       
            booksService.getStores()
            .then(stores => setStores(stores)) 
    }, [])






    return (
        <div>
        <GlobalStyle ></GlobalStyle>

            <Title>
                What Store Are You Looking For?
            </Title>

            <BookStores stores={stores} > </BookStores>

            </div>

    )
}

export default Home;



