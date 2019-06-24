import React from "react";
import "./App.css";
import axios from "axios";
import videoImage from "./video-image.png";
import youtubeIcon from "./youtube.svg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(20,20,20,0.7), rgba(9, 93, 225, 0.5)), url(${videoImage})`
      }}
    >
      <img src={youtubeIcon} alt="Youtube Icon" className="youtube" />
      <h1 className="title">Upload Your Video</h1>
      <form>
        <div className="field">
          <input
            autoComplete="off"
            className="input"
            name="title"
            placeholder="Title"
          />
        </div>
        <div className="field">
          <textarea
            autoComplete="off"
            className="textarea"
            name="description"
            placeholder="Description"
          />
        </div>
        <div>
          <input
            className="input"
            name="file"
            type="file"
            accept="video/mp4"
            placeholder="Add Video File"
          />
        </div>
        <button className="is-success button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
