import React from 'react';
import Post from './Post';

//Feed
function Feed (){
    return(
    <div className = "feed">
        <div className="container">
            <Post />
        </div>
    
    </div>
    );
}

export default Feed;