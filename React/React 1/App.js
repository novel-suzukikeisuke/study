import React from 'react';  //Reactをimport

class App extends React.Component {  //React.Componentを継承するクラスの定義
  //JSXを戻り値とするrenderメソッドを定義
  render() {
    const name = "にんじゃわんこ";
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ninjawanko.png";
    //return内に複数の要素があるとエラー(解決策:<div>タグで囲んで1つの要素にまとめる)
    //return内のみJSXで記述する※return外にはJavaScriptを記述できる
    return (
      <div>
        <h1>{name}</h1>  {/*JSXにJavaScriptを埋め込むときは'{}'を使うこと*/}
        <img src={imgUrl}/>  {/* imgタグはタグの終わりに'/'が必要, リンクは''で囲むこと */}
      </div>
    );
  }
}

export default App;  //クラスをexport
