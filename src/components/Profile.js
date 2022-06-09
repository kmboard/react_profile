import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectCards () {
    return (
<div className="products">
        <section className="card">
          <header>Work</header>
          <a href={"https://github.com/kmboard/notes"}>  <img src={require("./images/notes.png")} alt={"note_taker"} /></a>
          <p> <a href={"https://github.com/kmboard/notes"}> Note Taker </a> </p>
        </section>
        <section className="card">
          <header> Code Quiz</header>
          
          <a href={"hhttps://github.com/kmboard/quizlet"}>  <img src={require("./images/Quiz1-1.png")} alt={"Quiz"} />  </a>
          <p> <a href={"https://github.com/kmboard/quizlet"}> Coding Quiz </a> </p>
        </section>
   
          <section className="card">
            <header>Redit! Data Dive</header>
            <a href={"hhttps://amywilhoite.github.io/reddit-data-dive/"}>  <img src={require("./images/RedditDataDive.png")} alt={"Reddit_dive"} />  </a>
            <p> <a href={"hhttps://amywilhoite.github.io/reddit-data-dive/"}> Redit! Data Dive  </a> </p>
            
             
            
          </section>

        <section className="card">
          <header>Onlydocs </header>
          <a href={"https://github.com/kmboard/README"}>  <img src={require("./images/ReadMe.png")} alt={"README"} />  </a>
          <p> <a href={"https://github.com/kmboard/README"}> README Generator </a> </p>
          
           
          
        </section>
      </div>

    );
}

export default ProjectCards;    