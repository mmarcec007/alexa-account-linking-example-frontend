import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form} from "react-bootstrap";
import {useLocation} from "react-router-dom";

function App() {
    const search = useLocation().search;
    const client_id = new URLSearchParams(search).get('client_id');
    const response_type = new URLSearchParams(search).get('response_type');
    const state = new URLSearchParams(search).get('state');
    const redirect_uri = new URLSearchParams(search).get('redirect_uri');

  return (
      <Container>
        <Form onSubmit={(event) => {
            event.preventDefault();
            if (client_id && response_type && state && redirect_uri) {
                window.location = redirect_uri+'?state='+state+'&code=ceca';
            }
        }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
  );
}

export default App;
