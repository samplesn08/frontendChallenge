import React from 'react';
import '../App.css';

const Comment = props => {
    const { comment } = props;
    return (
        <div className='comment-section'>
            <div className='comment'>
                <h4>{comment.email} says...</h4>
                <p>{comment.body}</p>
            </div>
        </div>
    )
};

export default Comment;
