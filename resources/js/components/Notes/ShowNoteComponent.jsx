import Card from 'react-bootstrap/Card';

const ShowNoteComponent = () => {
    return (
        <Card>
            <Card.Header>Note ID: {this.props.match.params.id} </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        <Table>

                        </Table>
                    </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
      );
}

export default ShowNoteComponent
