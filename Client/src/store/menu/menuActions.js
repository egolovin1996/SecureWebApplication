import { MENU_LOADED, MENU_CLEAR } from '../actionTypes';
import { getAuthHeader, handleResponse } from '../../helpers/requestHelper'
    
export function loadMenu() {
    return (dispatch) => {
        const requestOptions = {
            headers: getAuthHeader(), 
        };
        fetch('/api/menu/getMenuItems', requestOptions)
            .then(handleResponse)
            .then((data) => { 
                dispatch(menuLoaded(data)); 
            }) 
            .catch((err) => { 
                throw err; 
            }) 
    } 

    function menuLoaded(menuItems) {
        return { 
            type: MENU_LOADED, 
            payload: {
                menuItems 
            }
        }; 
    }
}

export function clearMenu() {
    return { 
        type: MENU_CLEAR
    }; 
}