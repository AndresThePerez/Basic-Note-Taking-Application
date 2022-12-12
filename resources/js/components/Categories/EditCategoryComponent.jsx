import React, { useEffect, useState } from 'react'
import {Form, Button, Toast} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom';

function EditCategoryComponent() {

    //id passed in
    const {id} = useParams();

    //use for navigating back?
    const navigate = useNavigate();

    //category selected
    const [category, setCategory] = useState([]);

    //name that is being changed... probably could juse use the one object I just declared.
    const [name, setName] = useState([]);

    useEffect(() => {
        //get the categories
        async function getCategory() {
          await axios
            .get("/api/categories/" + id)
            .then((response) => {
                setCategory(response.data);
                setName(response.data.name);
            }).catch((err) => {
                console.log(err);
            });
        }
        getCategory();
      }, []);

      let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put("/api/categories/edit/" + id , {
            name: name,
        }).then((response) => {
            console.log('success', response)
        }).catch((err) => {
            console.log("err", err)
        }).finally(() => navigate(-1));
      };


    return (
        <Form onSubmit={handleSubmit}>
            <h5>Edit Category</h5>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" required defaultValue={category.name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default EditCategoryComponent
