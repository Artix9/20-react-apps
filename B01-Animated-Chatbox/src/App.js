import React, { useState } from "react";
import useInterval from "@use-it/interval";
import "./App.css";

const messages = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "I dunno. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?!" },
  { text: "reactjs.org" },
];

export default function App() {
  const [messageToshow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow((messageToshow) => messageToshow + 1);
  }, 2000);

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          // logic goes here
          const even = index % 2 === 0;

          // are we supposed to show a typing indicator?
          if (messageToshow + 1 === index) {
            return <Typing key={index} even={even} />;
          }

          // are we supposed to show this message?
          if (index > messageToshow) return <div key={index} />;

          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <div className="message">
      <div className="avatar">🐶</div>
      <div className="text">{message.text}</div>
      <div className="avatar">🐱</div>
    </div>
  );
}

function Typing({ even }) {
  return (
    <div className={`typing ${even ? "is-right" : "is-left"}`}>
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
