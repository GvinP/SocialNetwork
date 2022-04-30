import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/Profile/ProfilePage";
import {Route, Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<ProfilePage/>}/>
                        <Route path="/Dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/Users" element={<UsersContainer/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
