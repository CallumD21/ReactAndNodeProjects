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

    //Keep track of the page index
    const [pageIndex, setPageIndex] = useState(1);

    function NextPage() {
        setPageIndex(pageIndex + 1);
    }

    function PreviousPage() {
        setPageIndex(pageIndex - 1);
    }

    //Get a page of jokes
    const [jokePage, setJokePage] = useState([]);
    useEffect(() => {
        fetch(`/joke/all?page=${pageIndex}`)
            .then((res) => res.json())
            .then((data) => setJokePage(data));
    }, [pageIndex]);


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
            <p>Current Page: {pageIndex}</p>
            <button onClick={PreviousPage} disabled={pageIndex === 1}>Previous Page</button>
            <button onClick={NextPage} disabled={pageIndex === 10}>Next Page</button>
        </div>
    )
}

export default App;