import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0); //0はステートの変数 1はステートを更新する関数名 初期値は0
  const [faceShowFlag, setFaceShowFlag] = useState(true);//表示、非表示用のステート

  const onClickCountUp = () => {
    setNum(num + 1); //初期値0に対して1を足していく
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag); //true,falseを反転させる
  }

  //useEffectの第2引数に配列を空で入れることで最初の１回だけ通したい処理を書くことができる
  //stateが変わるたびに変更されない
  //第2引数の配列の中に変数を入れるとその変数に変化があった時だけ動く
  useEffect(() => {
    //3の倍数の時だけ顔文字を表示する
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true); //左がfalseだと
    } else {
      faceShowFlag && setFaceShowFlag(false); //左がtrueだと
    }
  }, [num]);



  return (
    //jsx記法は1つのタグで囲わないといけない
    <>
      <h1 style={{ color: 'red'}}>Hello World!</h1> {/* {{}} ←みたいに2つあれば一つはjsを書くことを表していて、2つ目はjsのオブジェクトを表している */}
      {/* コンポーネントに対してpropsを渡す */}
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>

      <br />
      <button onClick={onClickSwitchShowFlag}>表示/非表示</button>
      {faceShowFlag && <p>(^ ^)</p>}
    </>
  );
};

export default App;