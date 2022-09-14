import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Books from '../components/TheBooks/Books';
import { booksService } from '../services/booksService';
import styled, { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fceabb;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 30px;
`;


const DontFindBookMessage = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: palevioletred;
`;


const StoreDetails = (props) => {



  console.log("Voila mon StoreDetails ", props.match.match.params.id)
  const [books, setBooks] = useState([]) 


  useEffect(() => {
    booksService.getBooks(props.match.match.params.id)
      .then(books => setBooks(books))
  }, [])

  console.log("Tous les livres:", books);

  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Title>
        Now, tell us what book are you looking for?
      </Title>

      <DontFindBookMessage>If you don't find it, don't worry! On September 22 we will receive more than 400 other books.</DontFindBookMessage>
      <Books books={books} store_id={props.match.match.params.id} > </Books>
    </div>

  )
}

export default StoreDetails;
