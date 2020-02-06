import React from 'react';


interface Iprops {
    text: string;
    image: string;
}

function PostContent (props: Iprops){
    return(
        <div>
        <div className="post-content">
        {props.text}
      </div>
      <div className="post-image">
        <div className="post-image-board">
          <img src={props.image} alt="Profile" />
        </div>
      </div>
      </div>
    );
}

export default PostContent;