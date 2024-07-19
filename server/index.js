import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/imageGenerationRouter.js';

dotenv.config()

const app = express()
app.use(cors())

// the weight of payload that can be sent, which is limited to 50mb
app.use(express.json({ limig: "500mb" }))

app.use("/api/v1/dalle", dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))