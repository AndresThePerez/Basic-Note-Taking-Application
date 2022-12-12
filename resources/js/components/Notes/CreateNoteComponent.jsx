import React, { useEffect, useState } from 'react'
import {Form, Button, Toast} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Toasty from '../Base/Toast';

function CreateNoteComponent() {

    //categories used for selection.
    const [categories, setCategories] = useState([]);

    //the attributes we're changing.
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');

    const navigate = new useNavigate();


    useEffect(() => {
        async function getCategories() {
          await axios
            .get("/api/categories/showAll")
            .then((response) => {
                setCategories(response.data);
                <Toasty
                    title="Success!"
                    message="Successfully Created!"
                    variant="success"
                />
            }).catch((err) => {
                <Toasty
                title="Error!"
                message={err.data.message}
                variant="danger"
                />
            });
        }
        getCategories();
      }, []);

      let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("/api/notes/create", {
            title: title,
            body: body,
            category_id: category,
        }).then((response) => {
            <Toasty
            title="Success!"
            message="Successfully Created Note!"
            variant="success"
            />
            navigate(-1);
        }).catch((err) => {
            console.log(err.response.data.message);
        });
      };


    return (
        <Form onSubmit={handleSubmit}>
            <h5>Create Note</h5>
            <Form.Group className="mb-3" controlId="category">
            <Form.Label>Choose A category:</Form.Label>
            <Form.Select aria-label="Default select" required onChange={(e) => setCategory(e.target.value)}>
                <option>Please select a Category...</option>
                {
                    categories.map((category) => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))
                }
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
            <Form.Label>Note Title:</Form.Label>
            <Form.Control type="text" placeholder="Note Title..." required onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Note Body:</Form.Label>
                <Form.Control as="textarea" rows={3} required onChange={(e) => setBody(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default CreateNoteComponent
