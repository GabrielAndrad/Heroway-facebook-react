import React from 'react';
import PostAction from "./PostAction"
import PostComents from './PostComents'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import PostSendCommentForm from './PostSendCommentForm'
import './_post.css'
import coments from "../Post/PostComents/person3.jpg"
import content from "../Post/PostContent/post-image.jpg"
import headerImg from "../Post/PostHeader/person2.jpg"


function Post() {
    return (
        <div className="post">
              
            <PostHeader
                image={headerImg}
                name="Gabriel Andrade"
                date="12-12-12"
            />
             <PostContent
                image={content}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend id massa quis
                condimentum.
                Maecenas malesuada, mi id tempus consequat, ex nunc rhoncus arcu, at vehicula lorem mi
                eu magna."
            />
            <PostAction />
            <PostComents
                image= {coments}
                text="Lorem Ipsum Dollor"
            />
           
            <PostSendCommentForm />
        </div>
    );
}

export default Post;