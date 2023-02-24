import React from "react";

function Form(){
    return(
        <>
        <form className="form">
            <input type='text' placeholder="Enter book title"></input>
            <input type='text' placeholder="Enter book Author"></input>
            <button>Add Book</button>
        </form>
        </>
    )
}

export default Form;