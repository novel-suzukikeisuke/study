import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            email: '' //入力値を管理するstateを準備
        };
    }

    handleEmailChange(event) {
        const inputValue = event.target.value; //event.target.value:入力値を取得する
        this.setState({email: inputValue}); //入力値でstateを更新
    }

    handleSubmit() {
        this.setState({isSubmitted: true});
    }

  render() {
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
                <p>お問い合わせ内容（必須）</p>
                <textarea />
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