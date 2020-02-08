import React from 'react';




interface Iprops {
    name: string;
    date: string;
    image: string;
}

function PostHeader(props: Iprops) {
    return (
        <div className="post-header">
            <div className="post-header-profile-image">
                <div className="post-header-image-board">
                    <img src={props.image} alt="Profile" />
                </div>
            </div>
            <div className="post-header-profile-name">
                <div className="profile-name">{props.name}</div>
                <div className="post-date">{props.date}</div>
            </div>
        </div>
    );
}

export default PostHeader;