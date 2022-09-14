import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Loading from '../components/Loading';
import { booksService } from '../services/booksService';


const ProductDetails = (props) => {
    console.log("The propss", props)

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item);

        console.log("voila le contenant du panier", cart);

    }






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
    font-size: 3em;
    text-align: center;
    color: palevioletred;
  `;

    const BookDescription = styled.p`
    
    color: darkslateblue;
    margin-bottom:2rem;
    font-size: 1.4em;
    `;


    const Titles = styled.div`
        font-family: "EB Garamond",serif ;
        color: #29293d;
        font-size: 2rem;
    `
    const Author = styled.div`
    font-family: "EB Garamond",serif ;
    color: #29293d;
    font-size: 2.8rem;
    `

    const Li = styled.li`
        color : purple;
        font-size : 1.6em;
        margin-bottom:1rem;
    `
    const Price = styled.div`
        color : red;
        font-size: 2.5em;
        margin-bottom:2rem;
    `

    const KindleAlt = styled.h1`
    font-size: 1.5em;
    color: indigo;
    margin-top:4rem;
    `;

    const Shipping = styled.h1`
    font-size: 1.5em;
    color: black;
    `;

    const SecuredInfo = styled.h1`
    font-size: 1.5em;
    color: black;
    `;

    const ButtonAddToCart = styled.button`
    font-size: 1.6rem;
    padding: 0.25em 1em;
    margin: 0 1em;margin: 0.1rem;
    border-radius: 11px;
    border: 2px solid palevioletred;
    background-color: #C71585;
    height: 100px;
    width: 16%;
    cursor: pointer;
    color : papayawhip;
        `;

    const [selectedBook, setSelectedBook] = useState();

    useEffect(() => {

        booksService.getBook(props.match.match.params.id)
            .then(book => setSelectedBook(book))

    }, [])


   


    return (

        selectedBook === undefined ?

            <Loading />

            :
            <div>
                <GlobalStyle></GlobalStyle>
                <div>
                    <div>

                        <Title> -{selectedBook.name}-  </Title>
                        <Author> By {selectedBook.author} </Author>
                        <Li> ({selectedBook.ratings} ratings) </Li>
                        <Li> ({selectedBook.stars} stars) </Li>




                        <BookDescription> {selectedBook.description} </BookDescription>
                        <Titles>
                            Product Details :
                        </Titles>

                        <Li> Publisher: {selectedBook.publisher} </Li>
                        <Li> Language: {selectedBook.language} </Li>
                        <Li> Paperback: {selectedBook.paperback}</Li>
                        <Li>{selectedBook.type}</Li>


                    </div>



                    <div>

                        <Price>Price: {selectedBook.price}€</Price>
                        <ButtonAddToCart onClick={() => props.onAdd(selectedBook)}>Add To Cart</ButtonAddToCart>
                       
                        <KindleAlt>As an alternative, the Kindle eBook is available now and can be read on any device with the free Kindle app.</KindleAlt>
                        <Shipping>This item ships to Israel</Shipping>
                        <SecuredInfo>Secure transaction</SecuredInfo>

                    </div>
                </div>
            </div>
    )
}

export default ProductDetails
