import express from "express";
import jokes from "./jokes.js";

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});