import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"
import Playlist from "./Playlist"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <body className="App-body">
        <SearchResults />
        <Playlist />
      </body>
    </div>
  );
}

export default App;
