import React from 'react';
import { Layout } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class Aboutus extends React.Component {
    render(){
        return (
          <React.Fragment>
            <Layout>
              <div className="aboutUsText">
                <div>Вы когда-нибудь ощущали страх? Вы когда-нибудь вглядывались в темноту, чтобы понять, есть ли там кто-то, или что-то? Возможно, вы верите в потустороннее,</div>
                <div>а возможно, вы ярый скептик.Все это неважно, ведь наш квест определенно заставит вас чувствовать себя неуютно и тревожно, кем бы вы ни были.</div>
                <div>Вы окажетесь в самой глубине мрачного проклятого дома, или в таинственной и жутко атмосферной заброшенной деревне. В первом квесте вас будет сопровождать</div>
                <div>виртуальная реальность: VR поможет нам заставить вас бояться. Второй квест удивит масштабом локации и точностью деталей. Выбрать из этих мест сможет не каждый!</div>
                <div>Ключи к свободе - самообладание, надежда на товарищей, внимательность и логика. Вы получите яркие и сильные эмоции, и не забудете об этом приключении никогда. </div>
              </div>
              <div style = {{backgroundColor: "#252525"}}>
                <div  className="rules">
                  <div></div>
                  <div>Правила:</div>
                   <div>
                    <ul>
                     <li>Участвовать в квестах могут от 2 до 5 человек;</li>
                     <li>Квест “Проклятый дом” включает в себя использование очков VR;</li>
                     <li>Участвовать в квесте “Проклятый дом” могут люди старше 16 лет. Участвовать в квесте “Заброшенная деревня” <br/>могут люди старше 18 лет (для людей 16-17 лет требуется письменное разрешение от родителей);</li>
                     <li>На решение квеста “Проклятый дом” - 1 час. На решение квеста “Заброшенная деревня” - 1,5 часа;</li>
                     <li>Решительность и быстрые решения приветствуются, но постарайтесь ничего не сломать:)</li>
                   </ul>
                   </div>
                </div>
                </div>
            </Layout>
          </React.Fragment>
  );}           
}