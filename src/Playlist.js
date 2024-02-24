import React from "react";
import styles from "./Playlist.module.css";

export default function Playlist() {
  return (
    <div style={{ border: "1px solid black", marginLeft: "2em" }}>
      <input
        type="playlist-name"
        placeholder="Playlist Name..."
        className={styles.inputStyle}
      />
      <p>
        Track
      </p>
      <button>Add to Spotify</button>
    </div>
  );
}
