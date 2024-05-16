import React from 'react';
import Language from './Language'; //コンポーネントをインポート

class App extends React.Component {
  render() {
    const languageList = [
        {
          name: 'HTML & CSS',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        },
        {
          name: 'JavaScript',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
        },
        {
          name: 'React',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
        },
        {
          name: 'Ruby',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
        },
        {
          name: 'Ruby on Rails',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
        },
        {
          name: 'Python',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
        }
      ];
    return (
      <div>
        <h1>言語一覧</h1>
        <div className='language'>
            {/*mapメソッドで配列languageList各要素に対して順に処理を行う */}
            {languageList.map((languageItem) => {
            return (
                //*props: props名=値の形でコンポーネントを呼び出す箇所に記載する */
                <Language 
                    name={languageItem.name}
                    image={languageItem.image}
                />
                )
            })}
        </div>
      </div>
    );
  }
}

export default App;
