import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrders, removeOrder, setOrderToEdit} from './seeOrderAction';
import { Link } from 'react-router-dom'
import {Grid, Table} from 'react-bootstrap';
import {Icon} from 'react-icons-kit';
import {remove} from 'react-icons-kit/fa/remove';
import {pencil2} from 'react-icons-kit/icomoon/pencil2';
class seeOrder extends Component {
    constructor(props){
        super(props);
        this.state=[{
             firstname: '',
             lastname: '',
             phoneNumber:'',
             email: ''
         }];
    }
    componentWillMount() {
        this.props.fetchOrders();
    }

    render() {
        return (

            <div>
                <h4>See Orders</h4>
                <Grid bsSize="sm">


                    <Table responsive>
                        <thead>
                        <tr>
                            <th> <label className="col-md-1 control-lable">FirstName</label></th>
                            <th> <label className="col-md-1 control-lable">LastName</label></th>
                            <th> <label className="col-md-1 control-lable">Contact</label></th>
                            <th> <label className="col-md-1 control-lable">Email</label></th>
                            <br/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.orderItems.map((itr) => {
                            return (
                                <tr>
                                    <td>{itr.firstname}</td>
                                    <td>{itr.lastname}</td>
                                    <td>{itr.phoneNumber}</td>
                                    <td>{itr.email}</td>
                                    <button><Link to='/placeOrder' onClick={()=>this.props.setOrderToEdit(itr)}><Icon style={{width: 18, height: 18,color:'green'}} icon={pencil2}/>
                        </Link>
                                    </button>
                                    <button><div onClick={()=>this.props.removeOrder(itr.id)} style={{width: 18, height: 18,color:'red'}}><Icon size={'90%'} icon={remove}/>
                        </div>
                                    </button>

                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderItems: state.PlaceOrder.orderItems
    };

}

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    removeOrder: (id) => dispatch(removeOrder(id)),
    setOrderToEdit: (order) => dispatch(setOrderToEdit(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(seeOrder)


// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {fetchOrders} from './seeOrderAction';
// import {Grid, Table} from 'react-bootstrap';
// class seeOrder extends Component {
//     constructor(props){
//         super(props);
//         this.state=[{
//
//             firstname: '',
//             lastname: '',
//             phoneNumber:'',
//             email: ''
//         }];
//     }
//
//     render() {
//         return (
//
//             <div>
//                 <h4>See Orders</h4>
//                 <Grid bsSize="sm">
//
//
//                     <Table responsive>
//                         <thead>
//                         <tr>
//                             <th> <label className="col-md-1 control-lable">FirstName</label></th>
//                             <th> <label className="col-md-1 control-lable">LastName</label></th>
//                             <th> <label className="col-md-1 control-lable">Contact</label></th>
//                             <th> <label className="col-md-1 control-lable">Email</label></th>
//                             <br/>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {this.props.PlaceOrder.map((itr) => {
//                             return (
//                                 <tr>
//                                     <td>{itr.firstname}</td>
//                                     <td>{itr.lastname}</td>
//                                     <td>{itr.phoneNumber}</td>
//                                     <td>{itr.email}</td>
//
//                                 </tr>
//                             );
//                         })}
//                         </tbody>
//                     </Table>
//
//                 </Grid>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         PlaceOrder:state.PlaceOrder
//     };
//
// }
//
// export default connect(mapStateToProps,{fetchOrders})(seeOrder)













/*

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOrders} from './seeOrderAction'
import {Grid, Table} from 'react-bootstrap';
class seeOrder extends Component {
    constructor(props){
        super(props);
        this.state=[{

            firstname: '',
            lastname: '',
            phoneNumber:'',
            email: ''
        }];
    }

    render() {
        return (

            <div>
                <h4>See Orders</h4>
                <Grid bsSize="sm">


                    <Table responsive>
                        <thead>
                        <tr>
                            <th> <label className="col-md-1 control-lable">FirstName</label></th>
                            <th> <label className="col-md-1 control-lable">LastName</label></th>
                            <th> <label className="col-md-1 control-lable">Contact</label></th>
                            <th> <label className="col-md-1 control-lable">Email</label></th>
                            <br/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.PlaceOrder.map((itr) => {
                            return (
                                <tr>
                                    <td>{itr.firstname}</td>
                                    <td>{itr.lastname}</td>
                                    <td>{itr.phoneNumber}</td>
                                    <td>{itr.email}</td>

                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>


                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        PlaceOrder:state.PlaceOrder
    };

}

export default connect(mapStateToProps,{fetchOrders})(seeOrder)

*/
