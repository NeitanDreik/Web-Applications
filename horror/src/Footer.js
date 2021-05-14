import React from 'react'
import map from './map.svg';
import './App.css';

export default class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="App-Header">
                    <h1 class="Text2">YOU CAN FIND US HERE</h1>
                    <img class="picture" src={map} alt="Card image cap"/>
                    <div className="bottomText">
                        <div>Квесты - лучший способ провести время с близкими и друзьями, отметить день рождения, сделать сюрприз девушке, провести корпоратив или просто сменить обстановку.</div>
                        <div> Телефоны: +375297981961</div>
                        <div>ул. Горновых 8</div>
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}