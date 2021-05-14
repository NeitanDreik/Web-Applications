import React from 'react';
import { Layout } from './Layout';
import logo from './logo.svg';
import scroll from './scroll.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render(){
  return (
    <React.Fragment>
      <Layout>
        <div className="pictureContainer">
          <img src={logo} className="picture" alt="logo"/>
          <img src={scroll} className="scroll" alt="scroll"/>
        </div>       
        <div class="questContainer">
          <div class="tile">
            <div className="Text1">Проклятый дом</div>
            <img class="tileImage" src="https://cdn.igromania.ru/mnt/news/6/3/4/4/e/a/91228/1a2dca53a34f238a_1920xH.jpg" alt=""  />
            <div>Вы попадаете в классический заброшенный проклятый дом</div>
            <div>из хорроров, имеющий свою мрачную историю, которую</div> 
            <div>необходимо разгадать, чтобы выжить и выбраться на свободу.</div>
          </div>
          <div class="tile">
          <div className="Text1">Заброшенная деревня</div>
            <img class="tileImage" src="https://cdn.igromania.ru/mnt/news/4/6/7/e/7/7/102957/cbd00050b4f29c43_1920xH.jpg" alt=""  />
            <div>Не примечательная с виду полузаброшенная деревня хранит</div>
            <div>в себе множество тайн. Что заставило местных жителей</div> 
            <div>покинуть её, и почему теперь вы не можете отсюда выбраться?</div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );}
}