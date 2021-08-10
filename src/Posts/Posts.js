import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
      }, [])
    return (
        <div className='wall'>
            {
                posts.map(post => {
                    return <Post post={post} />
                })
            }
        </div>
    )
};

export default Posts;
