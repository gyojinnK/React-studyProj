import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = '강남 우동 맛집';
    let [글제목, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); 
    /* 
    Destructuring 문법
        let num = [1, 2]; <--여기 있던걸 변수로 빼고 싶다
        let a = num[0]; >> 1
        let c = num[1]; >> 2
                ==
        let [a, c] = [1, 2]; <-- 각각 변수에 대입시키는 문법 
    */

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <div className='list'>
                <h4>{ 글제목[0] }</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{ 글제목[1] }</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className='list'>
                <h4>{ 글제목[2] }</h4>
                <p>2월 17일 발행</p>
            </div>
            <h4>{post}</h4>
        </div>
    );
}

export default App;
