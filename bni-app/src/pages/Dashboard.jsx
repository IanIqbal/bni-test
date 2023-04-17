import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/action"
import ContentTable from "../components/ContentTable"
import { Row, Col, Navbar, Container, Button } from "react-bootstrap"

export default function Dashboard() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    console.log(users);
    return (
        <div>

            <Navbar bg="primary" style={{ borderRadius: "12px", margin: "2% 0" }}>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse className="d-flex justify-content-md-center">
                    <Navbar.Text style={{ fontSize: "40px", color: "#0275d8", backgroundColor:"#ffffff", padding:" 0 40%", borderRadius:"12px" }}>Content</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            <Row className="d-flex justify-content-md-center">
                <Col className="d-flex justify-content-md-center"  >
                    <ContentTable users={users} ></ContentTable>
                </Col>
            </Row>
        </div>
    )
}