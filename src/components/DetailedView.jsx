import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

import { Link, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDisplay from './CardDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DetailedView = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('cardposts')
            .select()    
            .eq('id', id); 

            setPost(data[0]);
            console.log(data[0])
        }
        fetchData();
    }, []);
    
    return (
        <div>
          <h2>Hi! My name is {post.title} and my creator is {post.username}</h2>
          <img src={post.image} style={{width: "500px"}}></img>
          <h5>{post.description}</h5>
          <h5>I am currently a {post.job} and would really appreciate donations and handouts</h5>
        </div>  
    )
}

export default DetailedView;