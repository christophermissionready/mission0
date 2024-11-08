import { useState } from "react";
import "./App.css";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  function toggleMenu() {
    setMenuActive(!menuActive);
    console.log("done");
  }
  return (
    <>
      <div className="navbar">
        <div className="mainname">
          <img src="src/assets/poolballs.png" height="40px"></img>
        </div>
        <div className={`buttonbar ${menuActive ? "active" : ""}`}>
          <button className="button-6">Latest</button>
          <button className="button-6">Featured</button>
          <button className="button-6">Contact Us</button>
          <button className="button-6">Login</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className="card">
        <div className="cardtitle">
          {<br></br>}
          {"GET ALL YOUR LATEST POOL"} {<br></br>}
          {"SNOOKER and BILLIARDS NEWS"}
        </div>
        <div className="searchbar">
          <input className="searchinput"></input>
          <button className="button-6">Search</button>
        </div>
      </div>
      <div className="content">
        <div className="article">
          <img
            src="src/assets/article1.png"
            height={"200px"}
            width={"300px"}
          ></img>
          Top 10 Snooker Players of All Time
        </div>
        <div className="article">
          <img
            src="src/assets/article2.png"
            height={"200px"}
            width={"300px"}
          ></img>
          How to Improve Your Snooker Break Building
        </div>
        <div className="article">
          <img
            src="src/assets/article3.png"
            height={"200px"}
            width={"300px"}
          ></img>
          Understanding Snooker Rules and Scoring
        </div>
        <div className="article">
          <img
            src="src/assets/article1.png"
            height={"200px"}
            width={"300px"}
          ></img>
          Famous Snooker Tournaments to Watch
        </div>
        <div className="article">
          <img
            src="src/assets/article2.png"
            height={"200px"}
            width={"300px"}
          ></img>
          The History Behind Snooker
        </div>
        <div className="article">
          <img
            src="src/assets/article3.png"
            height={"200px"}
            width={"300px"}
          ></img>
          Snooker Tips: Mastering the Art of Positioning
        </div>
      </div>
    </>
  );
}

export default App;
