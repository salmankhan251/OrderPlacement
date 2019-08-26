import React, {Component} from 'react';
import SeeOrders from './seeOrder';
import PlaceOrderForm from './placeOrder';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
export default class Routers extends Component{
    render(){
        return(

            <Router>
                <div style={{marginTop:'200px'}}>


                    <Link to="/placeOrder"><button style={{marginLeft:'40px',width:'200px',height:'80px'}}>Place Order</button></Link>
                    <Link to="/SeeOrders"><button style={{marginLeft:'40px',width:'200px',height:'80px'}}>See Orders</button></Link>

                    <Route path="/placeOrder" component={PlaceOrderForm} />
                    <Route path="/SeeOrders" component={SeeOrders} />

                </div>
            </Router>
        );
    }
}