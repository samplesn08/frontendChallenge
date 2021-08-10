import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';
import Comments from '../Comments/Comments';

const Post = (props) => {
    const [showComments, setShowComments] = useState(false)
    const [newComment, setNewComment] = useState([])
    const { post } = props;

    const handleChange = event => {
        setNewComment({
            postId: post.id,
            id: 99,
            email: "example@newComment.new",
            body: event.target.value
        })
    };
        // Form submission/adding new comment not functional
    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            postId: post.id,
            id: 99,
            email: newComment.email,
            body: newComment.body
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div className='post' >
            <div className='post-container' onClick={() => {
                setShowComments(!showComments);
            }}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input className='comment-box' name='comment' placeholder='Write a comment...' type='text' onChange={handleChange} />
                <input className='button' type='submit' value='Add comment' />
            </form>
            <div style={{ display: showComments ? "block" : "none" }} className="comment-container">
                <h3>Comments:</h3>
                <Comments post={post} />
            </div>
        </div>
    )
};

export default Post;
