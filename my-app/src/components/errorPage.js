import React from 'react';
import { Link } from "react-router-dom";


function errorPage(){
    return(
        <div>
            <h1>404: page doesn't exist</h1>
            <p>This page does not exist at all</p>
            <p>This will redirect you back</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default errorPage;