import React from 'react';


interface Iprops {
  image: string;
  text: string;
}

function PostComents(props: Iprops) {
  return (
    <div className="post-comments">
      <div className="comment">
        <div className="comment-profile-image">
          <div className="comment-image-board">
            <img src={props.image} alt="Profile" />
          </div>
        </div>
        <div className="comment-content">
          <div className="comment-profile-name">Fugiro Nakwonby</div>
          <div className="comment-text">    
          {props.text}
         </div>
      </div>
    </div>
  </div>
  );
}

export default PostComents;