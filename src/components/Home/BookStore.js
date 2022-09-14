import React from 'react';
import styled from 'styled-components';


const StoreDiv = styled.div`
  width:calc(33% - 40px);
  margin:10px 20px;
  text-align: center;

  
  @media screen and (max-width: 1200px ) {
    width:calc(50% - 40px);
    margin:10px 20px;
  }

  @media screen and (max-width: 800px ) {
    width: calc(100% - 40px);
    margin:10px 20px;
  }
`;

const Store = ({ store: bookStore, onStoreSelected }) => {
  console.log("Ce sont les props de bookstore", bookStore)


  const onStoreSelectedHandler = (storeId) => {
    console.log("J'ai cliqué sur un magasin qui a le id suivant:", storeId);
    onStoreSelected(storeId)
  }

  return (
    <StoreDiv

      onClick={() => onStoreSelectedHandler(bookStore.id)}>

      <img style={{ height: 330, marginTop: 40 }} src={'images/bookshopBleuMarron.jpg'} />

      <div style={{ fontWeight: 'bold' }}> {bookStore.name} </div>
      <div style={{ fontWeight: 'bold' }} > {bookStore.address} </div>
      <div style={{ fontWeight: 'bold', fontSize: 22 }}> {bookStore.city} </div>

    </StoreDiv>
  )
}

export default Store
