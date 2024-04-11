import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import linksRouter from "./routers/links";
import config from "./config";


const app = express();
const port  = 8000;


app.use(express.json());
app.use(cors());
app.use('/', linksRouter);

const run  = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();