import { Button, Container, Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Container className="text-center">
            <Button variant="light" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="xl"
                            role="status"
                            aria-hidden="true"
                            variant="dark"
                        />
                        <h3>L o a d i n g . . .</h3> 
            </Button>
        </Container>
    );
}

export default Loader;