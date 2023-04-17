import axios from "axios"
import { useEffect, useState } from "react"
import { Table, Button } from "react-bootstrap"
import { deleteUser } from "../store/action"
import { useDispatch } from "react-redux"
import EditForm from "./EditForm"

export default function ContentTable({ users }) {
    const [newUsers, setNewUsers] = useState(users)
    const [deletedUsers, setDeletedUsers] = useState([])
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [editedUser, setEditedUser] = useState({})
    useEffect(() => {

    }, [users])
    return (
        <Table size="md" style={{borderColor:"#D3D3D3"}} striped="columns" bordered className="text-center">
            <thead>
                <tr>
                    <th>No</th>
                    <th width={"10%"} >First Name</th>
                    <th>Last Name</th>
                    <th width={"10%"} >Maiden Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th width={"5%"} >Email</th>
                    <th width={"10%"}  >Phone</th>
                    <th>Username</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {users.users ?
                    users.users.map((el, index) => {

                        return !deletedUsers.includes(el.id) ?
                            <>

                                <tr key={el.id} >
                                    <td>{index + 1}</td>
                                    <td  >{el.firstName}</td>
                                    <td>{el.lastName}</td>
                                    <td>{el.maidenName}</td>
                                    <td>{el.age}</td>
                                    <td>{el.gender}</td>
                                    <td>{el.email}</td>
                                    <td >{el.phone}</td>
                                    <td>{el.username}</td>
                                    <td>
                                        <Button variant="danger" onClick={(e) => { e.preventDefault(); dispatch(deleteUser(el)) }} >Delete</Button>
                                        {" "}
                                        <Button variant="success" onClick={(e) => { e.preventDefault();  setEditedUser(el);  
                                            
                                            setTimeout(() => {
                                                setShow(true)
                                            }, 500);
                                             }}  >Edit</Button>

                                    </td>
                                </tr>
                            </>

                            : ""
                    }


                    )
                    : null}
                <EditForm data={editedUser} show={show} setShow={setShow} handleShow={handleShow}></EditForm>
            </tbody>
        </Table>
    )
}
