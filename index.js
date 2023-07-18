import express from "express";
import { getAllPlaylists, addSong, playSong } from "./playlistmodel.js";

const app = express();
app.use(express.json());

// get all playlists
app.get("/playlist", (req, res) => {
    const yourPlaylists = getAllPlaylists();
    res.json({
    your_playlists: yourPlaylists,
    });
});

// add new song to playlist
app.post("/playlist", (req, res) => {
    const { title, artists, url } = req.body;

    if (!title || !artists || !url) {
    return res.json({ 
        message: "incomplete song data"
    });
    }

    const newSong = addSong(title, artists, url);
    res.json({
    added: newSong,
    });
});

// play song using query title
app.put("/playlist", (req, res) => {
    const title = req.query.title;

    if (!title) {
    return res.json({
        message: "please query song by title",
    });
    }

    const song = playSong(title);
    if (!song) {
    return res.json({
        message: "playlist not found",
    });
    }

    res.json({
    playing_song: song,
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
