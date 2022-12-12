import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateCategoryComponent() {
    const [name, setName] = useState([]);

    const navigate = new useNavigate();

    const submitCategory = () =>
        new Promise((resolve, reject) => {
            axios
                .post("/api/categories/create", {
                    name: name,
                })
                .then((response) => {
                    resolve();
                    navigate(-1);
                })
                .catch((err) => {
                    reject(err.response.data.message);
                });
        });

    let handleSubmit = async (e) => {
        e.preventDefault();

        toast.promise(submitCategory, {
            success: "Successfully created category!",
            error: {
                render({ data }) {
                    return data;
                },
            },
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h5>Create Category</h5>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Category Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Category Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CreateCategoryComponent;
