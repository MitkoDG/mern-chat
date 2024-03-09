import express from "express";
import dotenv from "dotenv";

const app = express();

const result = dotenv.config({ path: '../.env' });
const PORT = 8000 || process.env.PORT; //swap when ready

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`The server listening on PORT ${PORT}`)
})