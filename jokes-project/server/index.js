import express from "express";
import jokes from "./jokes.js";

const app = express();
const port = 3001;

app.get("/joke/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});