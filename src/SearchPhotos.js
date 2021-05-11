import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "_G4QpgXkhWAdDgdP4rjOHD1v_Xd3eQB_1iIMyu6b37Y",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  console.log(unsplash);
  const searchPhotos = (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <>
      <form className="form">
        <label className="label" htmlFor="query"></label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search free high-resolution photos`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchPhotos}
        />
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.small}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
