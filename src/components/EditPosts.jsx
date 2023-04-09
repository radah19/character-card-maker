import React from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from "../client";
import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IMG_ACCESS = "35142330-c0597c6610859688bdd5ef48c";

const EditPost = async (id, post, setShow) => {
    const fetchData = async () => {
        if(post.imageQuery == "-1") return "../src/assets/smile.png"

        const response = await fetch(`https://pixabay.com/api/?key=${IMG_ACCESS}&q=${post.imageQuery.replace(' ', '+')}&image_type=photo&pretty=true`)
        const json = await response.json();

        return json.hits[0].largeImageURL;
    }

    await supabase
     .from('cardposts')
     .update({
        title: post.title, 
        description: post.description, 
        username: post.username, 
        image: await fetchData(),
        imageQuery: post.imageQuery,
        job: post.job,
    })
     .eq('id', id);         

     setShow(true);
}

const DeletePost = async (id, setShow) => {
    await supabase
     .from('cardposts')
     .delete()
     .eq('id', id);         

     setShow(true);

     window.location = "/gallery";
}

const EditPostForm = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase
            .from('cardposts')
            .select()    
            .eq('id', id); 

            setPost(data[0]);
        }
        fetchData();
    }, []);
    
    const [show, setShow] = useState(false);
    const allJobs = ['Farmer', 'Grave Digger', 'Spaceman', 'Cameraman', 'Pet', 'Orange Juice Person', 'Silly Fellow', 'Ghost', 'Gamer']

    return (
        <div>
            <Toast style={{position: 'fixed', top: 10, right: 10}} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                <strong className="me-auto">Actions saved</strong>
                </Toast.Header>
            </Toast>

            <Container>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title for Card</Form.Label>
                        <Form.Control type="text" placeholder={post.title} defaultValue={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>
                        <br/>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder={post.username} defaultValue={post.username} onChange={(e) => setPost({...post, username: e.target.value})}/>
                        <br/>
                        <Form.Label>Image Query for Card</Form.Label>
                        <Form.Control type="text" placeholder={"Enter a word to query, be specific!!"}  defaultValue={post.imageQuery} onChange={(e) => setPost({...post, imageQuery: e.target.value})}/>
                    </Form.Group>
                </Col>
                <Col>
                <Form.Label>Choose a New Job</Form.Label>
                {
                    allJobs.map((val) =>                 
                    <Form.Check
                    label={val}
                    value={val}
                    type='radio'
                    name="job"
                    onChange={(e) => setPost({...post, job: e.target.value})}
                    />
                )
                }
                </Col>
                </Row>

                <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description for your character</Form.Label>
                    <Form.Control as="textarea" defaultValue={post.description} rows={2} onChange={(e) => setPost({...post, description: e.target.value})}/>
                </Form.Group>

                <Button onClick={() => {EditPost(id, post, setShow)}}>Update Card</Button>
                <Button onClick={() => {DeletePost(id, setShow)}}>Delete Card</Button>
            </Container>
        </div>
    )
}

//Property of Anuj Adulla btw....

export default EditPostForm;