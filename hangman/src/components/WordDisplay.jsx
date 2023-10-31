/* eslint-disable react/prop-types */
import { useState } from "react";

function WordDisplay(props) {
  
  let puzzle = props.puzzle.split("")

  return (

      <h1 id="puzzle-word">
        {puzzle.map((letter) => {
          if (props.guesses.includes(letter)) {
            return letter + " ";
          }
          return "_ ";
        })}
      </h1>
    
  );
}

export default WordDisplay;
