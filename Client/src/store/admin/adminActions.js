import { USERS_LOADED } from '../actionTypes';
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
    
export function loadUsers() {
    return (dispatch) => {
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/account/getAllUsers', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(usersLoaded(data)); 
            })
    } 

    function usersLoaded(users) {
        return { 
            type: USERS_LOADED, 
            payload: {
                users 
            }
        }; 
    }
};

export function deleteUser(id){
    return (dispatch) => {
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/account/deleteUser/'+id, requestOptions)
            .then(handleResponse)
            .then(()=> { 
                dispatch(loadUsers()); 
            })
    } 
}

export function createUser(user){
    return (dispatch) => {
        const requestOptions = {
            method: "POST",
            headers: getAuthHeader(),
            body: JSON.stringify(user)
        };
        fetch('/api/account/createUser', requestOptions)
            .then(handleResponse)
            .then(()=> { 
                dispatch(loadUsers());
            })
    } 
}