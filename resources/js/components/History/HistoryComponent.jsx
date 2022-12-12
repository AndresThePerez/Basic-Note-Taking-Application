import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Table, Button} from 'react-bootstrap'

function HistoryComponent() {

    //set preliminary stuff
    const [noteHistory, setNoteHistory] = useState([]);
    const [categoryHistory, setCategoryHistory] = useState([]);

    //card code columns I want to show :)
    const noteColumns = [
        "ID",
        "Category",
        "Title",
        "Body",
        "Deleted at"
    ];
    const categoryColumns = [
        "ID",
        "Name",
        "Deleted at"
    ];

    //probably should learn how to conslidate these hooks... another time.
    useEffect(() => {

        async function getNoteHistory() {
            await axios
              .get("/api/notes/history")
              .then((response) => {

                setNoteHistory(response.data);

              });
        }

          getNoteHistory();

    }, []);

    useEffect(() => {

      async function getCategoryHistory() {
          await axios
            .get("/api/categories/history")
            .then((response) => {

              setCategoryHistory(response.data);

            });
      }

        getCategoryHistory();

  }, []);

    return (
      <Container>
        <Row>
          <Col>
            <Row className='align-items-center mt-5'>
              <Col sm={10}>
                <h1 className='text-center'>Deleted Notes</h1>
              </Col>
            </Row>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  {noteColumns.map((title) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
                {noteHistory.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.category.name}</td>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                    <td>{row.deleted_at}</td>
                  </tr>
                ))}
              </thead>
            </Table>
          </Col>

          <Col>
            <Row className='align-items-center mt-5'>
              <Col sm={10}>
                <h1 className='text-center'>Deleted Categories</h1>
              </Col>
            </Row>
            <Table striped bordered hover size='sm'>
              <thead>
                <tr>
                  {categoryColumns.map((title) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
                {categoryHistory.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.deleted_at}</td>
                  </tr>
                ))}
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
      );
}

export default HistoryComponent
