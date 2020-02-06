import "./index.css";
import React from 'react';

interface Iprops {
    img: string;
}

function Header(props:Iprops) {
    
    return (
        <header className="header">
            <div className="logo">
                <img src={props.img} alt = "face" />
            </div>
        </header>

    );
}

export default Header;