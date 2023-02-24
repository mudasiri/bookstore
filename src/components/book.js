import React from "react";

function Book({title, author}){
    return(
        <div> 
            <h3>{title}</h3>
            <h4>{author}</h4>
            <button>Remove</button>
            <div className="horizontal-divider"></div>
        </div>
    )
}

export default Book;