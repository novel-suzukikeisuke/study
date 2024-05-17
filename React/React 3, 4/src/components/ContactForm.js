import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            email: '', //入力値を管理するstateを準備
            hasEmailError: false, //入力値が空かどうか判断する
            content: '',
            hasContentError: false
        };
    }

    handleEmailChange(event) {
        const inputValue = event.target.value; //event.target.value:入力値を取得する
        const isEmpty = inputValue === ''; //入力値と空文字列('')を比較し、結果を左辺に代入する
        this.setState({
            email: inputValue,
            hasEmailError: isEmpty,
        }); //入力値でstateを更新
    }

    handleContentChange(event) {
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
            content: inputValue,
            hasContentError: isEmpty,
        });
    }

    handleSubmit() {
        this.setState({isSubmitted: true});
    }

  render() {
    let emailErrorText;
    if(this.state.hasEmailError) {
        emailErrorText  = (
            <p className='contact-message-error'>
                メールアドレスを入力してください
            </p>
        )
    }

    let contentErrorText;
    if(this.state.hasContentError) {
        contentErrorText = (
            <p className='contact-message-error'>
                お問い合わせ内容を入力してください
            </p>
        )
    }

    let contactForm;
    if(this.state.isSubmitted) {
        contactForm = (
            <div className='contact-submit-message'>
                送信完了
            </div>
        )
    } else {
        contactForm = (
            <form onSubmit={() => {this.handleSubmit()}}> {/*onSubmit:フォームが送信された時に処理が実行される */}
                <p>メールアドレス（必須）</p>
                <input 
                value={this.state.email}  //*value属性にstateの値を指定
                //*onChange:入力や削除が行われたときに処理を実行
                onChange={(event) => {this.handleEmailChange(event)}} //eventを引数に渡してメソッドを呼び出す
                />

                {emailErrorText}

                <p>お問い合わせ内容（必須）</p>
                <textarea 
                value={this.state.content}
                onChange={(event) => {this.handleContentChange(event)}}
                />

                {contentErrorText}

                <input
                    type='submit'
                    value='送信'
                />
            </form>
        )
    }
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;