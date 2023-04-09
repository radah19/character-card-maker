import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDisplay from './CardDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReadPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('cardposts')
            .select()
            .order('created_at', { ascending: true })

            setPosts(data);
        }
        fetchData();
    }, []);
    
    return (
        <div className="ReadPosts" style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', marginLeft:'-100px', marginRight:'-100px'}}>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                    <CardDisplay post={post} />
                ) : <h2>{'No cards D:'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;