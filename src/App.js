import React from "react";
import SearchPhotos from "./SearchPhotos";

function App() {
  return (
    <>
      <div>
        <h1>Unsplash</h1>
      </div>
      <div>
        <span>The internet’s source of </span>
        <a href="/license">freely-usable images</a>
        <p>Powered by creators everywhere.</p>
        <SearchPhotos />
      </div>
    </>
  );
}

export default App;
