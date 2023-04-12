import React, { useState, useEffect } from 'react';
import { supabase } from '../client';

import { Link, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDisplay from './CardDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IMG_ACCESS = "35142330-c0597c6610859688bdd5ef48c";

const DetailedView = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [img, setImg] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            const {data} = await supabase
            .from('cardposts')
            .select()    
            .eq('id', id); 

            setPost(data[0]);

            if(data[0].imageQuery == "-1") return "../src/assets/smile.png"
    
            const response = await fetch(`https://pixabay.com/api/?key=${IMG_ACCESS}&q=${data[0].imageQuery.replace(' ', '+')}&image_type=photo&pretty=true`)
            const json = await response.json();
    
            setImg(json.hits[0].largeImageURL);
        }
        fetchData();
    }, []);
    
    return (
        <div>
          <h2>Hi! My name is {post.title} and my creator is {post.username}</h2>
          <img src={img} alt={post.imageQuery} style={{width: "500px"}}></img>
          <h5>{post.description}</h5>
          <h5>I am currently a {post.job} and would really appreciate donations and handouts</h5>
        </div>  
    )
}

export default DetailedView;