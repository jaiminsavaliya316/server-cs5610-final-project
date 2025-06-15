import express from 'express'
import "dotenv/config";
import Home from "./Home.js";
import cors from "cors";

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
}));

Home(app);
app.listen(process.env.PORT || 4000)