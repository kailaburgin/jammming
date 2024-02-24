import React from "react";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  return (
    <div style={{ border: "1px solid black", marginRight: "2em" }}>
      <h1>
        Test Song Result
        {/* <ResultName /> */}
      </h1>
      <div className={styles.btntest}>
        <button className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}
