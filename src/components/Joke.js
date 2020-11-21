import React from "react";
import { useState } from "react";
import axios from "axios";
import "./../styles.css";


function Joke (){
    const  [myjoke,setJoke] = useState("");

    function randomJoke(){
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
        setJoke(response.data.setup + "..." + response.data.punchline);
        console.log(response.data.setup);
        });
    }


  return (
    <div className="Joke">
        <h1>Random Jokes of the Day</h1>
        <button onClick={randomJoke}>Click to get a Joke:</button>
        <p>{myjoke}</p>
    </div>
  );
}

export default Joke;