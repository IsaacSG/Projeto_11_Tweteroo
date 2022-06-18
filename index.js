import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let ID_tweet = 1;
let ID_user = 1;

const user = [];

const tweet = [];

server.post("/sign-up", (req, res) => {
    const use = {...req.body};
    user.push(use);

    ID_user++;

    res.send("OK");
});

server.post("/tweets", (req, res) => {
    const useravatar = user.find(use => use.username === req.body.username);
    tweet.push({ID_tweet, ...req.body, avatar: useravatar.avatar});

    ID_tweet++;

    res.send("OK");

});

server.get("/tweets", (req, res) => {
    const lastTweets = tweet.sort((a, b) => b.ID_tweet - a.ID_tweet).filter((post, i) => i < 10);

    res.send(lastTweets);
});

server.listen(6000);