import { AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT } from '../actionTypes';
import { accountService } from '../../services/accountService';

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        accountService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    //history.push('/');
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
    accountService.logout();
    return { 
        type: AUTH_LOGOUT 
    };
}


