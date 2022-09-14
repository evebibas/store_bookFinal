import axios from 'axios';


function getStores () {

    return axios.get('https://logical-calf-89.hasura.app/api/rest/stores')
            .then(response => response.data.stores) 
            
}


function getBooks(storeId){

    return axios.get('https://logical-calf-89.hasura.app/api/rest/books')
    .then(response =>  response.data.books)
    .then(books => books.filter(book => book.store_id === storeId) )
      
}


function getBook(bookId){
    return axios.get('https://logical-calf-89.hasura.app/api/rest/books/' + bookId)
    .then(response =>  response.data.books[0]) 
}

export const booksService = {getStores, getBooks, getBook}