import express from 'express'
import "dotenv/config";
import Home from "./Home.js";
import Login from "./Login.js";
import ProfilesRoutes from "./Profiles/routes.js";
import CommentRoutes from "./Comments/routes.js";
import cors from "cors";
import mongoose from 'mongoose';

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5174",
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/cs5610-final-project');

Home(app);
Login(app);
ProfilesRoutes(app);

CommentRoutes(app);
app.listen(process.env.PORT || 4000)