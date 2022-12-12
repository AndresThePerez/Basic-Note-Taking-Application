import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditCategoryComponent() {
    //id passed in
    const { id } = useParams();

    //use for navigating back?
    const navigate = useNavigate();

    //category selected
    const [category, setCategory] = useState([]);

    //name that is being changed... probably could juse use the one object I just declared.
    const [name, setName] = useState([]);

    //gotta make these promises so that toasts work.
    const getCategory = () =>
        new Promise((resolve, reject) => {
            axios
                .get("/api/categories/" + id)
                .then((response) => {
                    setCategory(response.data);
                    setName(response.data.name);
                    resolve();
                })
                .catch((err) => {
                    reject(err.response.data.message);
                });
        });

    useEffect(() => {
        toast.promise(getCategory, {
            error: "Error retrieving categories",
        });
    }, []);

    const editCategoriesSubmit = () =>
        new Promise((resolve, reject) => {
            axios
                .put("/api/categories/edit/" + id, {
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
        toast.promise(editCategoriesSubmit, {
            success: "Successfully modified category!",
            error: {
                render({ data }) {
                    return data;
                },
            },
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h5>Edit Category</h5>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="text"
                    required
                    defaultValue={category.name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default EditCategoryComponent;
