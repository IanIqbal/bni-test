import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../store/action';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import "./style.css"
export default function EditForm({ setShow, show, data }) {
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);

    const [user, setUser] = useState({username:data.username, email:data.email, firstName:data.firstName, lastName:data.lastName, age:data.age, maidenName:data.maidenName, phone:data.phone, gender:data.gender})
    
    const formHandler = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        setTimeout(() =>{
            setUser(data)
        }, 500)
    },[data])
    
   
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                            name='username'
                                            value={user.username}
                                            onChange={formHandler}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            autoFocus
                                            name='email'
                                            value={user.email}
                                            onChange={formHandler}

                                        />
                                    </Col>
                                </Row>
                            </div>

                        </Form.Group>
                        <Form.Group className='mb-3'  >
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                            name='firstName'
                                            value={user.firstName}
                                            onChange={formHandler}

                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            id='lastname'
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                            name='lastName'
                                            value={user.lastName}
                                            onChange={formHandler}

                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Maiden Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                            name='maidenName'
                                            value={user.maidenName}
                                            onChange={formHandler}

                                        />
                                    </Col>
                                </Row>
                            </div>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div>
                                <Row>
                                    <Col>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type='number' placeholder='' autoFocus name='age' value={user.age} onChange={formHandler}  />
                                    </Col>
                                    <Col>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select autoFocus name='gender' value={user.gender} onChange={formHandler} >
                                            <option disabled value=""  >Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>

                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='tel' name='phone' placeholder='' value={user.phone} autoFocus onChange={formHandler} />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" disabled={!user.firstName || !user.lastName || !user.email || !user.maidenName || !user.username || !user.age || !user.gender || !user.phone ? true : false}  onClick={(e) => { e.preventDefault(); 
                        
                        dispatch(editUser(user)); 
                        // setUser({username:"", firstName:"", lastName:"", email:"", age:"", gender:"", phone:"", maidenName:""});
                        handleClose(); 
                        
                        
                        }}>
                        Edit User
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

