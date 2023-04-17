import { CREATED_USER, DELETED_USER, EDIT_USER, GET_USERS } from "./actionType";

const initialState = { users: {}, deletedUsers: [], createdUsers: {}, newUserId:30, editedUsers:{} }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:

            return {
                ...state,
                users: action.payload
            }
        case DELETED_USER:

            state.deletedUsers.push(action.payload.id)
            
            let filtered = state.users.users.filter(el => !state.deletedUsers.includes(el.id))
            let updatedUsers = { ...state.users, users: filtered }

            return {
                ...state,
                users: updatedUsers
            }

        case CREATED_USER:
      

            let combinedUsers = { ...state.users }

            state.createdUsers = {...action.payload, id: state.newUserId + 1}
            state.newUserId++

            combinedUsers.users.push(state.createdUsers)

            console.log(combinedUsers.users);
            return {
                ...state,
                users: combinedUsers

            }

        case EDIT_USER:

        state.editedUsers = action.payload
        // console.log(state.editedUsers);
        state.users.users.forEach((el,index) =>{
            if(el.id == state.editedUsers.id){
                state.users.users[index] = state.editedUsers
            }
        })
        console.log(state.users);
        return{
            ...state,
            users:state.users
        }
        default:
            return state
    }
}

export default reducer