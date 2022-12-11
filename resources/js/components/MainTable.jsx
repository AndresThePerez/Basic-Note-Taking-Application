import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React, { useMemo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

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

  useEffect(() => {
    async function getData() {
      await axios
        .get("/api/notes/showAll")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);

          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  return (
    <Container>

      <Row className='align-items-center mt-5'>
        <Col sm={10}>
          <h1>Notes</h1>
        </Col>
        <Col xs={2} className='d-flex justify-content-end'>
          <Button>New Note</Button>
        </Col>
      </Row>
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table striped bordered hover >
          <thead>
            <tr>
              {columns.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
            {data.map((row) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.category.category_name}</td>
                <td>{row.note_title}</td>
                <td>{row.note_text}</td>
                <td>
                <Link to={"/"+row.id}>
                <Button> PLS </Button>
                </Link>
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
