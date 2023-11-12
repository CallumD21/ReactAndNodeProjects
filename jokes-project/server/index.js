import express from "express";
import jokes from "./jokes.js";

const app = express();
const port = 3001;

app.get("/joke/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

app.get("/joke/all?", (req, res) => {
    const pageIndex = parseInt(req.query.page);
    const startIndex = (pageIndex - 1) * 10;
    var jokePage = jokes.slice(startIndex, startIndex + 10);
    res.json(jokePage);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});