import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import React, { useMemo, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ShowAllCategoriesComponent() {

  const columns = [
      "ID",
      "Name",
      "Action",
  ];

  const navigate = new useNavigate();

  const [categories, setCategories] = useState([]);

  async function getCategories() {
    await axios
      .get("/api/categories/showAll")
      .then((response) => {
        setCategories(response.data);
      });
  }

  useEffect(() => {
    async function getData() {
        await getCategories();
    }
      getData();
  }, []);

  async function deleteCategory(id) {

    if(confirm('do you really want to delete this category?')) {
    await axios
      .delete("/api/categories/delete/" + id)
      .then((response) => {
        getCategories();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => navigate(-1));

    } else {
      console.log('rejected')
    }
  }

  return (
    <Container>
      <Row className='align-items-center mt-5'>
        <Col sm={10}>
          <h1>Categories</h1>
        </Col>
        <Col xs={2} className='d-flex justify-content-end'>
          <Link to="/categories/create">
            <Button>New Category</Button>
          </Link>
        </Col>
      </Row>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              {columns.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
            {categories.map((row) => (
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>
                  <Link to={"/categories/"+row.id}>
                    <Button variant='primary' >View</Button>{' '}
                  </Link>
                  <Link to={"/categories/edit/"+row.id}>
                    <Button variant='warning' >Edit</Button>{' '}
                  </Link>
                  <Button variant='danger' onClick={() => deleteCategory(row.id)} >Delete</Button>
                </td>
              </tr>
            ))}
          </thead>
        </Table>
    </Container>
  );
}

export default ShowAllCategoriesComponent;
