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

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}

        <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} />
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
