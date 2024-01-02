import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes'

const app = express();

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(express.json())

app.listen(3000, () => console.log('server running'))

const MONGO_URL = 'mongodb+srv://admin-user:8899fifafa@cluster0.bwrba.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router());