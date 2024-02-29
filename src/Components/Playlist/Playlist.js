import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/TrackList";

function Playlist(props) {
  function handleNameChange(event) {
    props.nameOnChange(event.target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <Tracklist
        userTracklist={props.userPlaylistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className={styles["Playlist-save"]} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
