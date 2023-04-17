import { GET_USERS, DELETED_USER, CREATED_USER, EDIT_USER } from "./actionType";
import axios from "axios"

const baseUrl = "https://dummyjson.com"

const getUsersDone = (payload)=>{
    return {
        type:GET_USERS,
        payload
    }
}

const deletedUsersDone = (payload) =>{
    return {
        type:DELETED_USER,
        payload
    }
}

const createdUserDone = (payload) =>{
    return{
        type:CREATED_USER,
        payload
    }
}

const editUserDone = (payload) =>{
    return{
        type:EDIT_USER,
        payload
    }
}

export const getUsers = ()=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios({
                url:baseUrl +"/users",
                method:"get"
            })

            dispatch(getUsersDone(data))
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

export const deleteUser = (user) =>{
    return async (dispatch) =>{
        try {

            // const {data} = await axios({
            //     url:baseUrl + "/users/" + id,
            //     method:"delete"
            // })

            dispatch(deletedUsersDone(user))
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

export const createUser = (values) =>{
    return async (dispatch) =>{
        try {
            
          

            const {data} = await axios({
                url:baseUrl + "/users/add",
                method:"post",
                data:{
                    firstName:values.firstName,
                    lastName:values.lastName,
                    maidenName:values.maidenName,
                    age:values.age,
                    gender:values.gender,
                    email:values.email,
                    phone:values.phone,
                    username:values.username
                }
            })

            console.log(data);
            dispatch(createdUserDone(data))
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

export const editUser = (user) =>{
    return async (dispatch) =>{
        try {
            
            dispatch(editUserDone(user))
        } catch (error) {
            console.log(error);
            return error
        }
    }
}