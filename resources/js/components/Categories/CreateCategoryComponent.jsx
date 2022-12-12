import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CreateCategoryComponent() {

    const [name, setName] = useState([]);

    const navigate = new useNavigate();

    let handleSubmit = async (e) => {

        e.preventDefault();

        await axios.post("/api/categories/create", {
            name: name,
        }).then((response) => {
            console.log('sccuess', response)
        }).catch((err) => {
            console.log("err", err)
        }).finally(() => navigate(-1));
    };


    return (
        <Form onSubmit={handleSubmit}>
            <h5>Create Category</h5>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Category Name:</Form.Label>
                <Form.Control type="text" placeholder="Category Name" required onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CreateCategoryComponent
