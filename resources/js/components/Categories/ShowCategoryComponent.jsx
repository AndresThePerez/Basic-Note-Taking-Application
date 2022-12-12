import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router';
import { Table, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ShowCategoryComponent() {

    const {id} = useParams();

    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function getCategory() {
          await axios
            .get("/api/categories/" + id )
            .then((response) => {
              setCategory(response.data)
            });
        }
        getCategory();
    }, []);

    return (
        <Card>
            <Card.Header> Category ID: {category.id} </Card.Header>
            <Card.Body>
                <Card.Title>Category Details</Card.Title>
                    <Card.Text>
                        <Table>
                            <tr><th>Name</th><td>{category.name}</td></tr>
                        </Table>
                    </Card.Text>
            </Card.Body>
        </Card>
      );
}

export default ShowCategoryComponent
