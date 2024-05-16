import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'にんじゃわんこ'}; //右辺のオブジェクトを左辺に代入
    }
    //メソッド名(){処理}でメソッドを定義
    handleClick(name) {
        this.setState({name: name});  //引数nameを使って、stateのnameプロパティの値を変更
    }

  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1> {/*this.state.プロパティ名で対応する値を取得できる */}
          {/*タグ内に イベント名 = {() => {処理}}と書くと指定したタイミングで処理を実行できる */}
    	  <button onClick={() => {this.handleClick('ひつじ仙人')}}>ひつじ仙人</button>  {/*onClick={()=>{this.メソッド名()})でクリックされたときにApp.js内の指定したメソッドを実行できる */}
    	  <button onClick={() => {this.handleClick('にんじゃわんこ')}}>にんじゃわんこ</button> {/*onClick: クリックされた時に処理を実行する */}
    	</div>
    );
  }
}

export default App;