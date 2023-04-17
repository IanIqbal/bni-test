import { Row, Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { createUser } from "../store/action";
export default function CreateUser() {
    const dispatch = useDispatch()
    return (
        <div>
            <Row className="d-flex justify-content-md-center" >
                <Col className="d-flex justify-content-md-center" >
                    <h1>Create User</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={(e)=> {e.preventDefault(); dispatch(createUser()) } } variant="primary" >Add</Button>
                </Col>
            </Row>
        </div>
    )
}