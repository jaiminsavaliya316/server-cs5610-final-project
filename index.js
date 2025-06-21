import express from 'express'
import "dotenv/config";
import Home from "./Home.js";
import Login from "./Login.js";
import cors from "cors";
import mongoose from 'mongoose';

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/cs5610-final-project');

Home(app);
Login(app);
app.listen(process.env.PORT || 4000)