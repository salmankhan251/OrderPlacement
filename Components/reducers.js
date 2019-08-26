import {combineReducers} from 'redux';
import {PLACE_ORDER, RESET_ORDER_TO_EDIT} from './action';
import {DELETE_ORDER, FETCH_ORDERS, SET_ORDER_TO_EDIT} from './seeOrderAction';

const EmptyState = {
    orderItems:[],
    orderToEdit: {}
};

const taskReducer = (state= EmptyState, action)=>{
        switch(action.type){
            case PLACE_ORDER:
                return {
                    ...state,
                    orderItems: [...state.orderItems, action.payload]
                };
            case FETCH_ORDERS:
                return {
                    ...state,
                    orderItems: action.payload
                };

            case DELETE_ORDER:
                return {
                  ...state,
                  orderItems: state.orderItems.filter(order => order.id !== action.id)
                };

            case SET_ORDER_TO_EDIT:
                return {
                    ...state,
                    orderToEdit: action.order
                }

            case RESET_ORDER_TO_EDIT:
                return {
                    ...state,
                    orderToEdit: {}
                }

            default:
                return state
        }

    },
    reducers=combineReducers({
        PlaceOrder:taskReducer
    });

export default (reducers);

/*
import {combineReducers} from 'redux';
import {PLACE_ORDER} from './action';
const taskReducer = (state=[], action)=>{
        switch(action.type){
            case PLACE_ORDER:
                state= state.concat(action.payload);
                break;
            default:
                return state
        }

    },
    reducers=combineReducers({
        PlaceOrder:taskReducer
    });
export default (reducers);
*/

