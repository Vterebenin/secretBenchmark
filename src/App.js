import React from 'react';
import './App.css';

window.onkeypress = handle;

let lastTime = Date.now();
let phrase = "";

function handle(e) {
  // let text = e.type +
  //   ' key=' + e.key +
  //   ' code=' + e.code +
  //   (e.shiftKey ? ' shiftKey' : '') +
  //   (e.ctrlKey ? ' ctrlKey' : '') +
  //   (e.altKey ? ' altKey' : '') +
  //   (e.metaKey ? ' metaKey' : '') +
  //   (e.repeat ? ' (repeat)' : '') +
  //   "\n";

  let text = e.key;

    
  if (Date.now() - lastTime > 400) {
    phrase = ""
    // phrase += new Array(81).join('-') + '\n';
  }
  lastTime = Date.now();

  phrase += text;
  if (phrase === "ternow1308") {
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent); 
    document.body.appendChild(newDiv)
    console.log("URA !!", phrase)
  }
}

function App() {
  return (
    <div>
      123qwe
    </div>

  );
}

export default App;
