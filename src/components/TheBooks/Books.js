import React from 'react';
import { withRouter } from "react-router-dom";
import Loading from '../Loading';
import Book from './Book';
import styled from 'styled-components';


const BooksDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Books = ({ books, history }) => {
    console.log("Mes books sont :", books);

    const bookSelected = (bookId) => {
        console.log("Call back for the bookId = ", bookId);
        history.push('/productdetails/' + bookId);
    }

    return (
        <BooksDiv>
            {
                books.length == 0 ?
                    <Loading></Loading>
                    :
                    books.map((book) =>(
                       <Book
                             key={book.id}  
                             book={book}
                            onBookSelected={bookSelected}
                         />
                    ))
            }
        </BooksDiv>


    )
}

export default withRouter(Books);
