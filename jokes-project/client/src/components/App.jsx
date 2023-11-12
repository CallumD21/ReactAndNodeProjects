import React, { useState, useEffect } from "react";
import JokeRow from "./JokeRow";

function App() {
    const [joke, setJoke] = useState(null);
    useEffect(() => {
        fetch("/joke/random")
            .then((res) => res.json())
            .then((data) => setJoke(data));
    }, []);

    return (
        <div>
            <h1>Jokes Project</h1>
            <p>Random joke: {!joke ? "Loading..." : joke.jokeText}</p>
            <p>All Jokes</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Text</th>
                </tr>
                <JokeRow />
                <JokeRow />
                <JokeRow />
            </table>
        </div>
    )
}

export default App;