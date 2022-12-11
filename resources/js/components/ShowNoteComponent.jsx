import Card from 'react-bootstrap/Card';

const ShowNoteComponent = (props) => {
    return (
        <Card>
            <Card.Header>props</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
      );
}

export default ShowNoteComponent
