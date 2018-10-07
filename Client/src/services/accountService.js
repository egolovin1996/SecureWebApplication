export const accountService = {
    login,
    logout,
    register
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('api/account/getToken', requestOptions)
        .then(handleResponse)
        .then(data => {
            if (data.token) {
                localStorage.setItem('user', JSON.stringify(data.token));
            }

            return data;
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

    return fetch('api/account/createUser', requestOptions)
        .then(response => {
            if(response.status === 200){
                login(user.userName, user.password);
            }

            // Добавить обработчик ошибок
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // Если токен просрочет, то logout
            if (response.status === 401) {
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}