import express from 'express';
import { summary, chartData1, chartData2, tasks, user, activitiesData } from "./data/data.js";
import connectDB from './config/db.js';
import cors from "cors"


const port = 5000;
connectDB();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hey Ranjith");
});

app.get("/api/summary", (req, res) =>{
    res.json(summary);
})

app.get("/api/chartData1", (req, res) =>{
    res.json(chartData1);
})

app.get("/api/chartData2", (req, res) =>{
    res.json(chartData2);
})

app.get("/api/tasks", (req, res) =>{
    res.json(tasks);
})

app.get("/api/user", (req, res) =>{
    res.json(user);
})

app.get("/api/activitiesData", (req, res) =>{
    res.json(activitiesData);
})

app.listen(port, () => console.log(`My server is running on port ${port}`))