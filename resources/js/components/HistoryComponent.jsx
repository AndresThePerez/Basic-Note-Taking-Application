import React, { useEffect, useState } from 'react'
import {Navbar, Nav, Container, Row, Col, Table, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const HistoryComponent = () => {

    const [data, setData] = useState([]);

    const columns = [
        "ID",
        "Category",
        "Title",
        "Body",
    ];

    async function getHistory() {
      await axios
        .get("/api/notes/trashed")
        .then((response) => {
            console.log(response);
          // check if the data is populated
          setData(response.data);
          // you tell it that you had the result
        });
    }

    useEffect(() => {
        async function getData() {
          await getHistory();
        }

          getData();

      }, []);

    return (
        <Container>
          <Row className='align-items-center mt-5'>
            <Col sm={10}>
              <h1>Deleted Notes</h1>
            </Col>
          </Row>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  {columns.map((title) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
                {data.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.category.name}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                  </tr>
                ))}
              </thead>
            </Table>
        </Container>
      );
}

export default HistoryComponent
