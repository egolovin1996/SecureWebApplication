import { accountService } from '../services/accountService'

export function getAuthHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 
            'Authorization': 'Bearer ' + user.token, 
            'Content-Type': 'application/json' 
        };
    } else {
        return {};
    }
}

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // Если токен просрочет, то logout
            if (response.status === 401) {
                accountService.logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}