import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React, { useMemo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MainTable() {

  const [loadingData, setLoadingData] = useState(true);

  const columns = [
      "ID",
      "Category",
      "Title",
      "Body",
      "Action",
  ];

  const [data, setData] = useState([]);

  async function getNotes() {
    await axios
      .get("/api/notes/showAll")
      .then((response) => {
        // check if the data is populated
        setData(response.data);
        // you tell it that you had the result
        setLoadingData(false);
      });
  }

  useEffect(() => {
    async function getData() {
      await getNotes();
    }

    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  async function deleteNote(id) {

    if(confirm('do you really want to delete?')) {
    await axios
      .delete("/api/notes/delete/" + id)
      .then((response) => {
        getNotes();
      });

    //   await getNotes();
    } else {
      console.log('rejected')
    }
  }

  return (
    <Container>
      <Row className='align-items-center mt-5'>
        <Col sm={10}>
          <h1>Notes</h1>
        </Col>
        <Col xs={2} className='d-flex justify-content-end'>
          <Link to="/notes/create">
            <Button>New Note</Button>
          </Link>
        </Col>
      </Row>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
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
                <td>
                  <Link to={"/notes/"+row.id}>
                    <Button variant='primary' >View</Button>{' '}
                  </Link>
                  <Link to={"/notes/edit/"+row.id}>
                    <Button variant='warning' >Edit</Button>{' '}
                  </Link>
                  <Button variant='danger' onClick={() => deleteNote(row.id)} >Delete</Button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
      )}
    </Container>
  );
}

export default MainTable;
