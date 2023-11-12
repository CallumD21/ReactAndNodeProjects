import React, { useState, useEffect } from "react";
import JokeRow from "./JokeRow";

function CreateJokeRow(joke) {
    return (<JokeRow key={joke.id} joke={joke} />);
}

function App() {

    //Get a random joke
    const [joke, setJoke] = useState(null);
    useEffect(() => {
        fetch("/joke/random")
            .then((res) => res.json())
            .then((data) => setJoke(data));
    }, []);

    //Get a page of jokes
    const [jokePage, setJokePage] = useState([]);
    useEffect(() => {
        fetch("/joke/all?page=1")
            .then((res) => res.json())
            .then((data) => setJokePage(data));
    }, []);

    return (
        <div>
            <h1>Jokes Project</h1>
            <p>Random joke: {!joke ? "Loading..." : joke.jokeText}</p>
            <p>All Jokes</p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {jokePage && jokePage.map(CreateJokeRow)}
                </tbody>
            </table>
        </div>
    )
}

export default App;