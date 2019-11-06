import axios from 'axios'

export function addItem(item) {
    return dispatch => {
        axios.post('/items', { name:item, active: false }).then(resp => {
            dispatch({
                type: 'ADD_ITEM',
                payload: resp.data
            })
        })
    }
}

export function getItems() {
    return dispatch => {
        axios.get('/items').then(resp => {
            dispatch({
                type: 'LIST_ITEMS',
                payload: resp.data
            })
        })
    }
}

export function deleteItems(id) {
    return dispatch => {
        axios.delete(`/items/${id}`).then(resp => {
            dispatch({
                type: 'DELETE_ITEMS',
                payload: resp.data
            })
        })
        axios.get('/items').then(resp => {
            dispatch({
                type: 'LIST_ITEMS',
                payload: resp.data
            })
        })
    }
}

export function completeItem(id, status) {
    return dispatch => {
        if (status === false) {
            axios.patch('/items/' + id, { active: true }).then(resp => {
                dispatch({
                    type: 'COMPLETE_ITEM',
                    payload: resp.data,
                    id: id
                })
            })
        } else {
            axios.patch('/items/' + id, { active: false }).then(resp => {
                dispatch({
                    type: 'COMPLETE_ITEM',
                    payload: resp.data,
                    id: id
                })
            })
        } 
    } 
}