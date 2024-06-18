// import React from "react";
import useCounter from './hooks/useCounter'
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({text}) => {
  const [counter, onIncrease, onDecrease] = useCounter();

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={onIncrease}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={onDecrease}>
            <i className="fas fa-thumbs-down" />
          </button>

          {counter}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
}

export default Joke;
