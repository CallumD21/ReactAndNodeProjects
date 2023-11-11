import React, { useState, useEffect } from "react";

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
            <p>{!joke ? "Loading..." : joke.jokeText}</p>
        </div>
    )
}

export default App;