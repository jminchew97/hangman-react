import { useEffect, useState } from "react";
import "./App.css";
import wordsJson from "./words.json";
import WordDisplay from "./components/WordDisplay";
// import GuessLetter from "./components/GuessLetter";

// Generate random num
const randomNum = Math.floor(Math.random() * wordsJson.length);
// Select random word
const puzzle = wordsJson[randomNum];

function App() {
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [guessCount, setGuessCount] = useState(0);

  function updateInputValue(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function makeGuess(e) {
    e.preventDefault();
    //Already guessed this letter
    if (guesses.includes(input) || wrongGuesses.includes(input)) {
      alert(`You already tried ${input}`);
    
    //Wrong guess
    } else if (!puzzle.includes(input)) {
      setWrongGuesses([...wrongGuesses, input]);
      setGuessCount(guessCount+1)

    //Right guess
    } else if (puzzle.includes(input)) {
      setGuesses([...guesses, input]);
    }
    if (guessCount == 6){
      alert("You lose!")
      window.location.reload()
    }
    setInput("");
  }

  return (
    <>
    <h1>Wrong Guesses:{guessCount}</h1>
      {/* Display the puzzled word and format it */}
      <WordDisplay guesses={guesses} puzzle={puzzle} />

      <div className="container">
        <div className="interaction-box">
          <input
            type="text"
            value={input}
            onChange={(e) => updateInputValue(e)}
            maxLength={1}
          ></input>
          <button onClick={(e) => makeGuess(e)}>Guess</button>
        </div>

        {/* Display wrong guesses */}
        <div className="wrong-letters-box">
          {wrongGuesses.map((wrongGuess, index) => (
            <p key={index}>{wrongGuess}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
