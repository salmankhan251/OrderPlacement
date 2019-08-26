export const FETCH_ORDERS = 'FETCH_ORDERS';
export const  DELETE_ORDER = 'DELETE_ORDER';
export const SET_ORDER_TO_EDIT = 'SET_ORDER_TO_EDIT';

export const fetchOrders = () => dispatch => {
    fetch('http://localhost:3005/users')
        .then(res => res.json())
        .then(result => {
            console.log('Testing seeOrder Action',result);
            return (dispatch({
                type: FETCH_ORDERS,
                payload: result
            }))}
        );
};

export const removeOrder = (id) => dispatch => {
    fetch('http://localhost:3005/users/'+id, {
        method: 'DELETE'
    }).then(res => {
        if(res.status === 200) {
            return (dispatch({
                type: DELETE_ORDER,
                id: id
            }));
        }
    })
};

export const setOrderToEdit = (order) => ({
    type: SET_ORDER_TO_EDIT,
    order: order
})
