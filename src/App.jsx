import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    //jsx記法は1つのタグで囲わないといけない
    <>
      <h1 style={{ color: 'red'}}>Hello World!</h1> {/* {{}} ←みたいに2つあれば一つはjsを書くことを表していて、2つ目はjsのオブジェクトを表している */}
      {/* コンポーネントに対してpropsを渡す */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;