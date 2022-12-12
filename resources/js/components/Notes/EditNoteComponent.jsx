import React, { useEffect, useState } from 'react'
import {Form, Button, Toast} from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function EditNoteComponent() {

    const {id} = useParams();
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [note, setNote] = useState("");


    const [categoryId, setCategoryId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {

        async function getNote() {
          await axios
            .get("/api/notes/" + id)
            .then((response) => {

                setNote(response.data);
                setCategory(response.data.category);

                setBody(response.data.body);
                setCategoryId(response.data.category.id);
                setTitle(response.data.title);

            }).catch((err) => {
                console.log(err);
            });
        }

        getNote();
      }, []);


      useEffect(() => {
        async function getCategories() {
            await axios
              .get("/api/categories/showAll")
              .then((response) => {

                  setCategories(response.data);

              }).catch((err) => {

                  console.log(err);

              });
          }
          getCategories();
      }, []);


      let handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put("/api/notes/edit/" + id , {
            title: title,
            body: body,
            category_id: categoryId,
        }).then((response) => {
            console.log('sccuess', response)
        }).catch((err) => {
            console.log("err", err)
        });
      };


    return (
        <Form onSubmit={handleSubmit}>
            <h5>Edit Note</h5>
            <Form.Group className="mb-3" controlId="category">
            <Form.Label>Choose A category:</Form.Label>
            <Form.Select aria-label="Default select" required onChange={(e) => setCategoryId(e.target.value)}>
                <option>Please select a Category...</option>
                {
                    categories.map((entity) => (
                        <option selected={entity.id === category.id} value={entity.id} >{entity.name}</option>
                    ))
                }
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
            <Form.Label>Note Title:</Form.Label>
            <Form.Control type="text" placeholder="Note Title..." required defaultValue={note.title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Note Body:</Form.Label>
                <Form.Control as="textarea" rows={3} required defaultValue={note.body} onChange={(e) => setBody(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    )
}

export default EditNoteComponent
