import { NavLink } from "react-router-dom"
import { CDBSidebar, CDBSidebarHeader, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter } from "cdbreact"
import ModalForm from "./ModalForm";
import { useState } from "react";

export default function NavbarMain() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <CDBSidebar style={{ position: "fixed" }} >
            <CDBSidebarHeader>BNI TEST</CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem  >
                        <NavLink to="/" >Dashboard</NavLink>
                    </CDBSidebarMenuItem>

                    <CDBSidebarMenuItem style={{ paddingBottom: "100%" }} >
                        <NavLink onClick={handleShow}   >Add User</NavLink>
                        {/* <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
                        </Button> */}
                    </CDBSidebarMenuItem>

                </CDBSidebarMenu>
            </CDBSidebarContent>
            {/* <CDBSidebarFooter>
                <div style={{padding:"20px 5px"}} > </div>
            </CDBSidebarFooter> */}
            <ModalForm setShow={setShow} show={show} ></ModalForm>
        </CDBSidebar>
    )
}

