export const PLACE_ORDER = 'PLACE_ORDER';
export const RESET_ORDER_TO_EDIT = 'RESET_ORDER_TO_EDIT ';
const localhost='http://localhost:3005';
export const placedOrder = (firstname,lastname,email,phoneNumber,Password,CPassword) => {
    // console.log('Adding to check', firstname)
    return(dispatch)=>{
        fetch(localhost+'/users',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname:firstname,lastname:lastname,email:email,phoneNumber:phoneNumber,password:Password,CPassword:CPassword})
        }).then((response) =>response.json()).then(result=>{
            console.log('Testing server',result);
            dispatch(postData(PLACE_ORDER,result))
        }).catch((error)=>{
            console.log('Error ',error);
        })
    }
}
export function postData(type,results) {
    return {
        type : type,
        payload : results
    }
}

export const updateOrderDetails = (firstname,lastname,email,phoneNumber,Password,CPassword, id) => dispatch => {
    fetch(localhost+'/users/'+id,{
        method:'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({firstname:firstname,lastname:lastname,email:email,phoneNumber:phoneNumber,password:Password,CPassword:CPassword, id: id})
    }).then(res => res.json()).then((response)=> {
        console.log('testing reset',response)
        if (response && response.id) {
            dispatch(resetOrderToEdit());
        }
    })
};

export const resetOrderToEdit = () =>({
   type: RESET_ORDER_TO_EDIT
});
/*
export const place_Order=(data)=>{
    return{
        type:"PLACEORDER",
        payload:data,
    };
};

*/


/*

export const PLACE_ORDER = 'PLACE_ORDER';
export const placeOrder = (data) => dispatch => {
fetch('localhost:3000/placeOrder')
    .then(res => res.json())
    .then(result => {
        return (dispatch({
            type:PLACE_ORDER,
            body:data,
            payload:result
        }))}
    );
};

*/









