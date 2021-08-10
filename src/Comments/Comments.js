import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const Comments = (props) => {
    const { post } = props;
    const [comments, setComments] = useState([]);
    const id = post.id;
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => {
                setComments(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id]);

    return (
        <div className='comment-section'>
            {
                comments.map(comment => {
                    return <Comment comment={comment} />
                })
            }
        </div>
    );
};

export default Comments;
