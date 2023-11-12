import React from "react";

function JokeRow(props) {
    return (
        <tr>
            <td>{props.joke.id}</td>
            <td>{props.joke.jokeType}</td>
            <td>{props.joke.jokeText}</td>
        </tr>
    );
}

export default JokeRow;