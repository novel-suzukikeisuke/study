import React from 'react'; //Reactをインポート
class Language extends React.Component { //クラス名がコンポーネントの名前になる
    render() {
        return (
        <div className='language-item'>
            <div className='language-name'>{this.props.name}</div> {/*this.props.props名でpropsの値を取得できる */}
            <img className='language-image' src={this.props.image} />
        </div>
        );
    }
}
export default Language; //コンポーネントをexport