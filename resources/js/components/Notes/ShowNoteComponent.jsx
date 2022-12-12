import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router';
import { Table, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ShowNoteComponent() {

    const {id} = useParams();

    const [note, setNote] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function getNote() {
          await axios
            .get("/api/notes/" + id )
            .then((response) => {
              setNote(response.data);
              setCategory(response.data.category)
            });
        }
        getNote();
    }, []);

    return (
        <Card>
            <Card.Header> Note ID: {note.id} </Card.Header>
            <Card.Body>
                <Card.Title>Note Details</Card.Title>
                    <Card.Text>
                        <Table>
                            <tr><th>Category</th><td>{category.name}</td></tr>
                            <tr><th>Title</th><td>{note.title}</td></tr>
                            <tr><th>Body</th><td>{note.body}</td></tr>
                        </Table>
                    </Card.Text>
            </Card.Body>
        </Card>
      );
}

export default ShowNoteComponent
