import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainTable() {
    const [loadingData, setLoadingData] = useState(true);

    const columns = [
        "ID",
        "Category",
        "Title",
        "Body",
        "Created At",
        "Updated At",
        "Action",
    ];

    const [data, setData] = useState([]);
    //gotta make these promises so that toasts work.
    const getNotes = () =>
        new Promise((resolve, reject) => {
            axios
                .get("/api/notes/showAll")
                .then((response) => {
                    console.log(response);
                    setData(response.data);
                    setLoadingData(false);
                    resolve();
                })
                .catch((err) => {
                    reject(err.response.data.message);
                });
        });

    useEffect(() => {
        toast.promise(getNotes, {
            error: {
                render({ data }) {
                    return data;
                },
            },
        });
    }, []);

    const deleteNote = (id) =>
        new Promise((resolve, reject) => {
            if (confirm("do you really want to delete?")) {
                axios.delete("/api/notes/delete/" + id).then((response) => {
                    getNotes();
                    resolve();
                });
            } else {
                reject("Request cancelled");
            }
        });

    const handleDelete = (id) =>
        toast.promise(deleteNote(id), {
            success: "Successfully deleted note!",
            error: {
                render({ data }) {
                    return data;
                },
            },
        });

    return (
        <Container>
            <Row className="align-items-center mt-5">
                <Col sm={10}>
                    <h1>Notes</h1>
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                    <Link to="/notes/create">
                        <Button>New Note</Button>
                    </Link>
                </Col>
            </Row>
            {loadingData ? (
                <p>Loading Please wait...</p>
            ) : (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            {columns.map((title) => (
                                <th key={title}>{title}</th>
                            ))}
                        </tr>
                        {data.length
                            ? data.map((row) => (
                                  <tr>
                                      <td>{row.id}</td>
                                      <td>{row.category.name}</td>
                                      <td>{row.title}</td>
                                      <td>{row.body}</td>
                                      <td>{row.created_at}</td>
                                      <td>{row.updated_at}</td>
                                      <td>
                                          <Link to={"/notes/" + row.id}>
                                              <Button variant="primary">
                                                  View
                                              </Button>{" "}
                                          </Link>
                                          <Link to={"/notes/edit/" + row.id}>
                                              <Button variant="warning">
                                                  Edit
                                              </Button>{" "}
                                          </Link>
                                          <Button
                                              variant="danger"
                                              onClick={() =>
                                                  handleDelete(row.id)
                                              }
                                          >
                                              Delete
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                            : ""}
                    </thead>
                </Table>
            )}
        </Container>
    );
}

export default MainTable;
