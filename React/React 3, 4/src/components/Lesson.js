import React from 'react';

class Lesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false}; //初期状態で非表示にしたいため初期値:false
    }

    handleClickLesson() {
        this.setState({isModalOpen: true});
    }

    handleClickClose() {
        this.setState({isModalOpen: false});
    }

    render() {
        let modal; //空の変数を用意
        if(this.state.isModalOpen) {  //isModalOpenがtrueの時に実行される
            modal = ( //変数に代入するJSXが複数行の場合は()で囲む
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-introduction'>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.introduction}</p>
                        </div>
                        <button 
                        className='modal-close-btn'
                        onClick={() => {this.handleClickClose()}}
                        >
                            とじる
                        </button>
                    </div>
                </div>
            )
        }
        return (
            <div className='lesson-card'>
                <div className='lesson-item'
                onClick={() => {this.handleClickLesson()}}
                >
                    <p>{this.props.name}</p>
                    <img src={this.props.image}/>
                </div>
                {modal} {/*{変数}:変数に代入したJSXを表示できる */}
            </div>
        );
    }
}

export default Lesson;