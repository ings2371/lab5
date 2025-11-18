import React from 'react';

function Projects(){
    return(
        <div className="container text-center">
            <h1 >My Projects</h1>
            <h2><br/>C++ to HTML converter</h2>
            <article>This project makes a C++ file into a HTMLfile, it prints the C++ files code on the HTML file, and the HTML file<br/> when opened on browser will print what was on the C++ It was built using C++ and REGEX.<br/> This program will also validate if you have that file or don't or if the file path is too long</article>

            <h2><br/>Book Full-stack-app</h2>
            <article>This project is a web app where you login or registar into to keep track of my own books, this application keeps<br/> track of your books, and you can add, search and delete books from the application,<br/> and when ever your done you can log out. This full-stack-app was made using NODE, Vite, MongoDB, Express, JS, and HTML. <br/>This web app also has a fully functionable backend which connects to MongoDB for my data. this Project I did was throughout the whole semestar.</article>
        
        </div>
    )
}

export default Projects;