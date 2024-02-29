import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  return (
    <div className={styles.TrackList}>
      {props.userTracklist.map((track) => (
        <Track
          track={track}
          key={track.id}
          isRemoval={props.isRemoval}
          onAdd={props.onAdd}
        />
      ))}
    </div>
  );
}

export default Tracklist;
