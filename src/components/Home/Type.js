import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "HTML, CSS, JS, LUA, REACT.JS",
          "Fun Person",
          "Love Cat's",
          "I Love Coding",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
