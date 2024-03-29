import express from 'express';
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.js"
import connectToMongoDB from './db/connectToMondoDB.js';

const app = express();
const PORT = 8000 || process.env.PORT; //swap when ready

dotenv.config();

app.use(express.json()); // to parse the data from req.body

app.use("/api/auth", authRoutes);

// const result = dotenv.config({ path: ".env" }); // need to be fixed

// if (result.error) {
//     console.error("Error loading .env file:", result.error);
// }


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`The server listening on PORT ${PORT}`)
})