import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT } from '../actionTypes';
import { accountService } from '../../services/accountService';
import { history } from '../../helpers/history'
import { loadMenu, clearMenu } from '../menu/menuActions'
import { handleResponse } from '../../helpers/requestHelper'


export function login(userName, password) {
    return dispatch => {
        dispatch(request({ userName }));
        accountService.login(userName, password)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(loadMenu());
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { 
        return { 
            type: AUTH_LOGIN_REQUEST, 
            payload: { 
                user 
            }
        };
    }

    function success(user) { 
        return { 
            type: AUTH_LOGIN_SUCCESS,
            payload: { 
                user 
            }
        };
    }

    function failure(error) {
        return { 
            type: AUTH_LOGIN_FAILURE, 
            payload: { 
                error
            }
        };
    }
}

export function logout() {
    return dispatch => {
        accountService.logout();
        dispatch(clearMenu());
        dispatch(success());
    }

    function success() {
        return { 
            type: AUTH_LOGOUT 
        };
    }
    
}

export function register(model) {
    return dispatch => {
        accountService.register(model)
        .then(handleResponse)
        .then(response => {
            if(response.status === 200){
                console.log(response);
                dispatch(login(model.userName, model.password));
            }

            // Добавить обработчик ошибок
        });
    }
}


