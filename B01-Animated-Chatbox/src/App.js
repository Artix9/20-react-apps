import React from "react";
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
  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          return (
            <div key={index} className="message">
              {message.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
