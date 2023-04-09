import { supabase } from '../client'
import React, { useState, useEffect } from 'react';
import Card from './Card';
const Gallery = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Team')
            .select();
          
            // set state of posts
            setPosts(data)
          
          }
        fetchPosts()
    }, []);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} power_level={post.power_level}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default Gallery;