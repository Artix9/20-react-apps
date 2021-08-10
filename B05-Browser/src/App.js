import React, { useState } from "react";
import Tabs from "./components/Tabs";
import AddressBar from "./components/AddressBar";
import "./App.css";

export default function App() {
  const [browsers, setBrowsers] = useState([
    "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
    "https://en.wikipedia.org/wiki/Main_Page",
  ]);

  const [activeBrowser, setActiveBrowser] = useState(0);

  const url = browsers[activeBrowser];

  return (
    <div className="app">
      <div className="browser">
        <Tabs browsers={browsers} active={activeBrowser} />

        <AddressBar />

        <div className="viewport">
          {url ? <iframe src={url} title="Stuff" /> : <>New Tab Page</>}
        </div>
      </div>
    </div>
  );
}
