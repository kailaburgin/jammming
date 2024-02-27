import React, { useState } from "react";
import styles from "./Playlist.module.css";

export default function Playlist() {
  const [playList, setPlaylist] = useState([]);
    
  return (
    <div
      style={{
        border: "1px solid black",
        marginLeft: "2em",
      }}
    >
      <input
        type="playlist-name"
        placeholder="Playlist Name..."
        className={styles.inputStyle}
      />
      <p style={{ border: "1px solid black", marginRight: "2em", marginLeft: '2em'}}>Track</p>
      <button>Add to Spotify</button>
    </div>
  );
}
