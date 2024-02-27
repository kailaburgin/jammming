import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Track 1",
      artist: "Artist 1",
      album: "Album 1",
      id: 1,
    },
    {
      name: "Track 2",
      artist: "Artist 2",
      album: "Album 2",
      id: 2,
    },
    {
      name: "Track 3",
      artist: "Artist 3",
      album: "Album 3",
      id: 3,
    },
  ]);

  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 11,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 22,
    },
    {
      name: "Example Playlist Name 3",
      artist: "Example Playlist Artist 3",
      album: "Example Playlist Album 3",
      id: 33,
    },
  ]);

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}

        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} />
          <Playlist
            userPlaylistName={playlistName}
            userPlaylistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
