import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "./Tracks";

// const tracks = [
//   {
//     trackName: "Track1",
//     trackArtist: "Artist1",
//     trackAlbum: "Album1",
//     trackID: "id1",
//   },
//   {
//     trackName: "Track2",
//     trackArtist: "Artist2",
//     trackAlbum: "Album2",
//     trackID: "id2",
//   },
//   {
//     trackName: "Track3",
//     trackArtist: "Artist3",
//     songAtrackAlbumlbum: "Album3",
//     trackID: "id3",
//   },
// ];

// const Track = ({ trackName, trackArtist, trackAlbum, trackID }) => (
//   <div style={{ border: "1px solid black", marginRight: "2em" }}>
//     <li key={trackID} style={{ listStyle: "none" }}>
//       <h2>{trackName}</h2>
//       <h3>
//         {trackArtist},{trackAlbum}
//       </h3>
//     </li>
//     <button>Add to playlist</button>
//   </div>
// );

// const Tracklist = tracks.map(Track);

export default function SearchResults() {
  return (
    <div
      className="SearchResults-header"
      style={{
        border: "1px solid black",
        marginRight: "2em",
        marginLeft: "2em",
      }}
    >
      <h1>Results</h1>
      <div
        style={{
          border: "1px solid black",
          marginRight: "2em",
          marginLeft: "2em",
        }}
      >
        <ul>{Tracklist}</ul>
      </div>
    </div>
  );
}
