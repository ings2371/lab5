import React from "react";
import { Link } from "react-router-dom";

function header(){
    return(
        <header className="bg-info">
      
      {/* Container to handle centering of the nav bar */}
      <div className="d-flex justify-content-center">
        
        {/* Navigation links with gap utility for spacing */}
        <nav className="nav gap-4">
          <Link className="nav-link text-black" to="/">Home</Link>
          <Link className="nav-link text-black" to="/about">About</Link>
          <Link className="nav-link text-black" to="/projects">Projects</Link>
        </nav>
        
      </div>
    </header>
    )
}
export default header;