import React from 'react';
import styled from 'styled-components';

const BookDiv = styled.div`
    width: calc(30% - 40px);
    height: auto;
    margin: 10px 20px;
    text-align: center;

    @media screen and (max-width: 1000px ) {
      width:calc(50% - 40px);
      margin:10px 20px;
    }

    @media screen and (max-width: 600px ) {
      width: calc(100% - 40px);
      margin:10px 20px;
    }
`;


const Book = (props) => {

  console.log("BOOKS propss", props.book)

  const { book } = props;
  const { id: bookId } = book; 

  const onBookSelectedHandler = (bookId) => {

    console.log("J'ai cliqué sur livre qui a le id suivant:", bookId);
    props.onBookSelected(bookId);

  }


  return (
    <BookDiv className="block"
      onClick={() => onBookSelectedHandler(bookId)}
    >
      <img className='small' src={'/images/livreanglais.jpg'} />

      <div style={{ fontWeight: 'bold' }}> Name of book : {book.name} </div>
      <div style={{ fontWeight: 'bold' }}> By the author : {book.author} </div>
      <div style={{ fontWeight: 'bold' }}> Type : {book.type} </div>
      <div style={{ fontWeight: 'bold' }}> Price : {book.price} € </div>

    </BookDiv>
  )
}

export default Book
