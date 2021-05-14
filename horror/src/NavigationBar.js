import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavLink} from 'react-router-dom'

export default class NavigationBar extends React.Component{
    render(){
        return(
            <header className="App-Header">
                <style>@import url('https://fonts.googleapis.com/css2?family=Dorsa&display=swap');</style>
                <button type="button" class="Button" class="Button" style={{left: "2%"}}>Quests</button>
                <NavLink to="/aboutus">
                    <button type="button" class="Button" style={{left: "7%"}}>About us</button>
                </NavLink>
                <button type="button" class="Button" style={{left: "12%"}}>Contacts</button>
                <NavLink to="/">
                    <button type="button" className="Text">VR quest room</button>
                </NavLink>
                <button type="button" class="Button" style={{left: "95%"}}>Log out</button>
            </header>
        )
    }
}