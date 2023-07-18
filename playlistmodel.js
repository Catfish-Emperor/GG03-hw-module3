import playlists from "./playlists.json" assert { type: "json" };

export function getAllPlaylists() {
    return playlists.sort((a, b) => b.count - a.count);
}

export function addSong(title, artists, url) {
    const newSong = { title, artists, url, count: 0 };
    playlists.push(newSong);
    return newSong;
}

export function playSong(title) {
    const song = playlists.find((playlist) => playlist.title.includes(title));
    if (!song) {
    return null;
    }
    song.count += 1;
    return song;
}

