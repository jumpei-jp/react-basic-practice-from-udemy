import React from "react";

const App = () => {
  const onClickButton = () => alert();

  //スタイルを書く
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  };

  return (
    //jsx記法は1つのタグで囲わないといけない
    <>
      {/* {{}} ←みたいに2つあれば一つはjsを書くことを表していて、2つ目はjsのオブジェクトを表している */}
      <h1 style={{ color: 'red'}}>Hello World!</h1>
      <p style={contentStyle}>元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;