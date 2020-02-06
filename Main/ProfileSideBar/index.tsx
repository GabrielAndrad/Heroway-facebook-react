import React from 'react';
import ProfileInfo from './ProfileInfo'
import profile from "../ProfileSideBar/ProfileInfo/person1.jpg"

function ProfileSideBar (){
    return(
        <div className = "profile">
            <ProfileInfo image = {profile} />
        <div className="profile-name">
        <span>Amarilda Curvada</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
        </div>
    );
}

export default ProfileSideBar;