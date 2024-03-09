import express from 'express';
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.js"

const app = express();

const result = dotenv.config({ path: "../.env" });

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const PORT = 8000 || process.env.PORT; //swap when ready

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`The server listening on PORT ${PORT}`)
})