const express = require('express');  //expressの読み込み
const mysql = require('mysql');  //mysqlの読み込み
const app = express(); //expressを使用するための準備

app.use(express.static('public')); //publicフォルダ内のファイルを読み込めるようにする

app.use(express.urlencoded({extended: false})); //フォームの値を受け取るために必要な定型文

//mysqlの接続情報を定数connectionに代入
const connection = mysql.createConnection({ 
host: 'localhost',
  user: 'root',
  password: 'Keikei0813#',
  database: 'list_app'
});

//ルーティング
app.get('/', (req, res) => {
    res.render('top.ejs'); //指定したファイルを画面に表示
  });
  
  app.get('/index', (req, res) => {
    //connection.query('クエリ', クエリ実行後の処理)を記述するとデータベースに対して指示を出せる
    connection.query( 
      'SELECT * FROM items', //クエリ
      //クエリ実行後の処理
      (error, results) => {  //error:クエリが失敗した時のエラー情報 results:クエリの実行結果
        if(error) {
          console.log(error);
        }
        res.render('index.ejs', {items: results});  //renderメソッドの第2引数に{プロパティ: 値}を書くことでEJS側に値を引き渡せる
      }
    );
  });
  
  app.get('/new', (req, res) => { //画面を表示したい時はget
    res.render('new.ejs');
  });
  
  app.post('/create', (req, res) => { //データベースを変更したいときはpost
    connection.query(
      'INSERT INTO items (name) VALUES (?)', //フォームからの値をクエリに使う時はVALUESに？を含める
      [req.body.itemName], //配列の要素が？に入る
      (error, results) => {
        if(error) {
          console.log(error);
        }
        res.redirect('/index'); //メソッドがpostの時はリダイレクトを使う
      }
    );
  });
  
  app.post('/delete/:id', (req, res) => { //ルーティングURLにidを指定する
    connection.query(
      'DELETE FROM items WHERE id = ?',
      [req.params.id], //選択されたメモのidを含める
      (error, results) => {
        if(error) {
          console.log(error);
        }
        res.redirect('/index');
      }
    );
  });
  
  app.get('/edit/:id', (req, res) => { //編集するメモがわかるようにURLにidを含める
    connection.query(
        'SELECT * FROM items WHERE id = ?',
        [req.params.id],
        (error, results) => {
          if(error) {
            console.log(error);
          }
          res.render('edit.ejs', {item: results[0]}); //results[0] 配列の1件目の要素を取り出し、EJS側にitemプロパティを引き渡す
        }
      );
  });

  app.post('/update/:id', (req, res) => {
    connection.query(
        'UPDATE items SET name = ? WHERE id = ?',
        [req.body.itemName, req.params.id], //idはparamsオブジェクトで受け渡す
        (error, results) => {
          if(error) {
            console.log(error);
          }
          res.redirect('/index');
        }
      );
  });
  
  app.listen(3000); //localhost:3000でアクセス可能なサーバーを起動
  