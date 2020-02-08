import React from 'react';
import Typing from './Typing';



interface Iprops {
    image: string;
}

function ProfileInfo (props: Iprops){
    return(
        <div className = "profile-image">
            <Typing />
        <div className="image-board">
        <img src={props.image} alt="Profile" />
      </div>
      </div>
    );
}

export default ProfileInfo;