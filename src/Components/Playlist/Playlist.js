import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <Tracklist userTracklist={props.userPlaylistTracks} />
      <button className={styles["Playlist-save"]}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
