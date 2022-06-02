import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props; //毎回propsを指定しないで良いように分割代入する 本来ならprops.colorみたいな感じで呼び出す
  const contentStyle = {
    color, //オブジェクトとプロパティ名が同じなら一緒にして良い color: color
    fontSize: '18px'
  };

  return (
    <p style={contentStyle}>{children}</p>
  );
}

export default ColorfulMessage;