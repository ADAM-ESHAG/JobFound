import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/connect.js';

// Middleware
notFoundMiddleware
import notFoundMiddleware from './middleware/not-Found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import { error } from 'console';

app.get('/', (req, res) => {
    res.send('wellcom!');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();