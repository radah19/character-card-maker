import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardDisplay = ({post}) => {
    return (
        <Card style={{ width: '18rem', marginLeft: '15px', marginRight: "15px", marginBottom: "15px"}}>
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By {post.username}</Card.Subtitle>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>I am a {post.job}</Card.Text>
                <Link to={'edit/'+ post.id}><img width="30px" className="moreButton" alt="edit button" src="../src/assets/edit.png"/></Link>
                <Link to={'info/'+ post.id}><img width="30px" className="moreButton" alt="edit button" src="../src/assets/questionmark.png"/></Link>
            </Card.Body>
        </Card>
    );
}

export default CardDisplay;