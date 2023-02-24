import React from "react";
import Book from "./book";
import Form from "./form";

function Books(){
    const books = [
        {
            title:'Alidu in the Forest',
            author: 'Mudasir Issah'
        },
        {
            title:'Alidu in the Forest',
            author: 'Mudasir Issah'
        },
        {
            title:'Alidu in the Forest',
            author: 'Mudasir Issah'
        }
    ]
    return(
       <div className="container">
        {books.map((book) => (
        <Book title={book.title} author={book.author} />
       ))}
       <Form />
       </div>
    )
};

export default Books;