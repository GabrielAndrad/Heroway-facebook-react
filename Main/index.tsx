import React from 'react';
import Login from './Login';
import Feed from './Feed';
import './_main.css';
import ProfileSideBar from './ProfileSideBar'


function Main() {
    return (
        <section className = "main">
            <Feed />
            <ProfileSideBar />
        </section>
    );
}

export default Main;