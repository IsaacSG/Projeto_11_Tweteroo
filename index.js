import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

const user = {
    username: '',
    avatar: ''
};

const tweet = {
    username: '',
    tweet: ''
};

server.post("/sign-up", (req, res) => {

});

server.post("/tweet", (req, res) => {

});

server.get("/tweet", (req, res) => {

});

server.listen(5000);