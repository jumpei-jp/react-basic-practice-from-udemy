import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1); //初期値0に対して1を足していく
  }
  const [num, setNum] = useState(0); //0はステートの変数 1はステートを更新する関数名 初期値は0
  return (
    //jsx記法は1つのタグで囲わないといけない
    <>
      <h1 style={{ color: 'red'}}>Hello World!</h1> {/* {{}} ←みたいに2つあれば一つはjsを書くことを表していて、2つ目はjsのオブジェクトを表している */}
      {/* コンポーネントに対してpropsを渡す */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>

      <p>{num}</p>
    </>
  );
};

export default App;