import { Outlet } from "react-router-dom"
import NavbarMain from "../components/NavbarMain"
import { Container, Row, Col } from "react-bootstrap"

export default function BasicLayout() {
    return (
        <div style={{marginLeft:"0px", marginRight:"5%"}} >
            <Row>
                <Col md={2} style={{position:"sticky"}} >
                    <NavbarMain></NavbarMain>
                </Col>
                <Col md={10} >
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    )
}