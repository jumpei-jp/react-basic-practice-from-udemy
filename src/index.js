import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    //jsx記法は1つのタグで囲わないといけない
    <>
      <h1>Hello World!</h1>
      <p>元気ですか</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));