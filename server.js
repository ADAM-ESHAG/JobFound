import express from 'express';
const app = express();

// Middleware
notFoundMiddleware
import notFoundMiddleware from './middleware/not-Found.js';

app.get('/', (req, res) => {
    res.send('wellcom!');
})

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`))