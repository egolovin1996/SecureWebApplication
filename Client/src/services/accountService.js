import { handleResponse } from '../helpers/requestHelper'

export const accountService = {
    login,
    logout,
    register,
    isAuthenticated
}

function isAuthenticated() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user && user.token ? true : false;
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('api/account/getToken', requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
    // Возможно нужно сообщить серверу, что нужно удалить токен
}

function register(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('api/account/register', requestOptions);
}