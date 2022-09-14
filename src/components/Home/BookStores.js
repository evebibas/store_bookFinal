import React from 'react';
import BookStore from './BookStore';
import { Link, Redirect, withRouter } from "react-router-dom";
import Loading from '../Loading';
import styled from 'styled-components';


const BookStoresDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const BookStores = (props) => {

    const stores = props.stores

    console.log(" mes props ", props);
    console.log(" BookStore ", stores);

    const storeSelected = (storeId) => {
        console.log("Call back for the storeId = ", storeId);  
        //Here it's for specific traitment (log, calculation, call API, statistics, ...)

        //Now, we root to the store details page
        props.history.push('/storedetails/'+ storeId);
    }


    
    return (
        <BookStoresDiv>
            {
                stores.length == 0 ?

                       <Loading></Loading>
                            
                        : stores.map((store, key) =>
                    (
                        <BookStore
                         key={store.id}
                         store={store}
                         onStoreSelected={ storeSelected } 


                        />
                    ))
            }


        </BookStoresDiv>

    )
}

export default withRouter(BookStores);