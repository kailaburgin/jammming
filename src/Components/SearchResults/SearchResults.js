import React from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  return (
    <div className={styles.SearchResults}>
      <TrackList
        userTracklist={props.userSearchResults}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
