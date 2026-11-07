const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/Binayak")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});

// Serve CSS and JS files
app.use(express.static(__dirname));

// Express GET method
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "bina.html"));
});

// Express POST method
app.post("/submit", (req, res) => {
    res.send("POST Method Called");
});

// Express PUT method
app.put("/update", (req, res) => {
    res.send("PUT Method Called");
});

// Express DELETE method
app.delete("/delete", (req, res) => {
    res.send("DELETE Method Called");
});

// Create HTTP server using Express
const myServer = http.createServer(app);

const Port = 5000;

myServer.listen(Port, () => {
    console.log(`Server running at http://localhost:${Port}`);
});