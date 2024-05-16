const express = require('express');
const mysql = require('mysql');
const session = require('express-session'); //express-sessionの読み込み
const bcrypt = require('bcrypt'); //bcryptの読み込み
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Keikei0813#',
  database: 'blog'
});

// express-sessionを使う準備
app.use(
    session({
      secret: 'my_secret_key',
      resave: false,
      saveUninitialized: false,
    })
  );
  
  //app.use関数は全てのリクエストに対応する
  app.use((req, res, next) => {  //nextは処理の中で関数として実行できる
    if (req.session.userId === undefined) {
      //app.useからEJSファイルに値を渡す場合はres.localsを使う
      res.locals.username = 'ゲスト'; //ログインしていない時はゲストを代入
      res.locals.isLoggedIn = false; //ログインしていない時はfalseを代入
    } else {
      //ログインしている時はユーザー名を代入
      res.locals.username = req.session.username; //セッション情報からusernameを読み出す
      res.locals.isLoggedIn = true; //ログインしている時はtrueを代入
    }
    next();  //次の処理へ移す
  });
  
  app.get('/', (req, res) => {
    res.render('top.ejs');
  });
  
  app.get('/list', (req, res) => {
    connection.query(
      'SELECT * FROM articles',
      (error, results) => {
        res.render('list.ejs', { articles: results });
      }
    );
  });
  
  app.get('/article/:id', (req, res) => {
    const id = req.params.id;
    connection.query(
      'SELECT * FROM articles WHERE id = ?',
      [id],
      (error, results) => {
        res.render('article.ejs', { article: results[0] });
      }
    );
  });
  
  app.get('/signup', (req, res) => {
    res.render('signup.ejs', {errors: []}); //空の配列errorsを渡す
  });

  app.post('/signup', 
  (req, res, next) => {
    console.log('入力値の空チェック');
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password;
    const errors = []; //エラーメッセージを入れる配列を定義
    if (username === '') { //ユーザー名について判定
        errors.push('ユーザー名が空です'); //エラーメッセージの追加
    }
    if (email === '') { //メールアドレスー名について判定
        errors.push('メールアドレスが空です');
    }
    if (password === '') { //パスワードについて判定
        errors.push('パスワードが空です');
    }
    console.log(errors);
    if (errors.length > 0) { //入力値が空の場合、配列errorsは0より大きくなる
      //入力値がからの場合:登録画面にリダイレクト
        res.render('signup.ejs', {errors: errors}); //エラーメッセージを渡してユーザー登録画面を表示する
    } else {
      //入力値が空でない場合、ユーザー登録処理に進む
        next(); 
    }
  },
  (req, res, next) => {
    console.log('メールアドレスの重複チェック');
    const email = req.body.email; //ユーザー登録フォームから受け取ったメールアドレス
    const errors = [];
    connection.query(
        'SELECT * FROM users WHERE email = ?', //usersテーブルにメールアドレスが登録されているか検索
        [email],
        (error, results) => {
            if(results.length > 0) {
                errors.push('ユーザー登録に失敗しました');
                res.render('signup.ejs', {errors: errors});
            } else {
                next();
            }
        }
    );
  },
  (req, res) => {
    console.log('ユーザー登録');
    //ユーザー登録フォームから送信されたユーザー情報を定数に代入する
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    //パスワードのハッシュ化
    bcrypt.hash(password, 10, (error, hash) => { //hashメソッドの第1引数:普通の文字列のパスワード, 第2引数:パスワードの強さ, コールバック関数の引数hash
        connection.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hash], //hash化されたパスワードをpasswordカラムに追加する
            (error, results) => {
                req.session.userId = results.insertId; //INSERTクエリが成功すると追加したレコードのidがresultsオブジェクトのinsertIdというプロパティに代入される。セッション情報に保存する
                req.session.username = username; //フォーム送信されたユーザー名
                res.redirect('/list');
            }
          );
    });
});

//loginのルーティングが二つ存在するが、メソッドが異なるため別のものとして認識される
  app.get('/login', (req, res) => {
    res.render('login.ejs');
  });
  
  app.post('/login', (req, res) => {
    const email = req.body.email; //送信されてきたemailを定義している
    connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) => {
        if (results.length > 0) { //要素数からユーザー情報が見つかったか判断(対象が見つかれば0より大きくなる)
            const plain = req.body.password;
            const hash = results[0].password;
            bcrypt.compare(plain, hash, (error, isEqual) => { //compareメソッドの第1引数:普通の文字列のパスワード, 第2引数:hash(ハッシュ化されたパスワード), コールバック関数の引数isEqual:比較結果
              //比較結果がtrueの場合:ログイン処理を行う  
              if (isEqual) {
                  req.session.userId = results[0].id; //取得したユーザーidをセッション情報にuseIDとして保存
                  req.session.username = results[0].username; //取得したusernameをセッション情報にusenameとして保存
                  res.redirect('/list');
              //falseの場合:ログイン画面を表示する
                } else {
                  res.redirect('/login');
                }
              });
        } else {
          res.redirect('/login');
        }
      }
    );
  });
  
  app.get('/logout', (req, res) => {
    req.session.destroy((error)  => { //セッション情報を削除する記述
      res.redirect('/list'); //セッション削除後に一覧画面にリダイレクトする
    });
  });
  
  app.listen(3000);
  