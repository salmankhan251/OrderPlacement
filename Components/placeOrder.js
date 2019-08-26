import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {placedOrder, resetOrderToEdit, updateOrderDetails} from './action';
import {Button, FormControl, Grid} from 'react-bootstrap';

//import {Button} from 'react-bootstrap';


class PlaceOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber:'',
            CPassword: '',
            Password: ''
        };
    }

    onChange = (event) => {

        this.setState({
                [event.target.name]: event.target.value
            }
        );
    }

    componentWillMount() {
        if(this.props.orderToEdit.id) {
            this.setState({
                firstname: this.props.orderToEdit.firstname,
                lastname: this.props.orderToEdit.lastname,
                email: this.props.orderToEdit.email,
                phoneNumber: this.props.orderToEdit.phoneNumber,
                CPassword: this.props.orderToEdit.CPassword,
                Password: this.props.orderToEdit.CPassword
            })
        }
    }

    componentWillUnmount() {
        if (this.props.orderToEdit.id) {
            this.props.resetOrderToEdit();
        }
    }

    submitDataButton = (event) =>
    {
        event.preventDefault();
        console.log('Testing',this.state);
        alert("Data Inserted Succesfully");
        /*this.props.placeOrder(this.state);*/
        if (!this.props.orderToEdit.id) {
            this.props.placedOrder(this.state.firstname, this.state.lastname, this.state.email, this.state.phoneNumber, this.state.password, this.state.CPassword)
        }
        else {
            this.props.updateOrderDetails(this.state.firstname, this.state.lastname, this.state.email, this.state.phoneNumber, this.state.password, this.state.CPassword, this.props.orderToEdit.id);
        }

        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber:'',
            CPassword: '',
            Password: ''
        });
}
    render(){
        return(
            <div>
                <h4>Place Order</h4>
                <form style={{marginLeft:'400px'}} onSubmit={this.submitDataButton}>
                    <Grid bsSize="small">
                        <label className="col-md-1 control-lable">FirstName</label>
                        <FormControl type="text" name="firstname" size="2" placeholder="First name"
                                     value={this.state.firstname} onChange={this.onChange} required  minLength={3} maxLength={8} /><br/>
                        <label className="col-md-1 control-lable">LastName</label>
                        <FormControl type="text" name="lastname" size="2" placeholder="last name" value={this.state.lastname}
                                     onChange={this.onChange} required minLength={3} maxLength={8}/><br/>
                        <label className="col-md-1 control-lable">Email</label>
                        <FormControl type="email" name="email" placeholder="email" value={this.state.email}
                                     onChange={this.onChange} required /><br/>
                        <label className="col-md-1 control-lable">phone #</label>
                        <FormControl type="text" name="phoneNumber" placeholder="phoneNumber" value={this.state.phoneNumber}
                                     onChange={this.onChange} required/><br/>
                        <label className="col-md-1 control-lable">Password</label>
                        <FormControl type="password" name="Password" placeholder="Password"
                                     value={this.state.Password} onChange={this.onChange} required/><br/>
                        <label className="col-md-1 control-lable">Confirm Password</label>
                        <FormControl type="password" name="CPassword" placeholder="Re-enter password" value={this.state.CPassword}
                                     onChange={this.onChange} required/><br/>
                        <Button bsStyle="success"  disabled = {!this.state.Password || !this.state.CPassword || this.state.Password !== this.state.CPassword}
                                className="button" type="submit">{this.props.orderToEdit.id ? 'Update Order' : 'Add Order'}</Button>
                    </Grid>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    orderToEdit: state.PlaceOrder.orderToEdit
});

const mapDispatchToProps = (dispatch) => ({
    placedOrder: (firstname,lastname,email,phoneNumber,Password,CPassword) => dispatch(placedOrder(firstname,lastname,email,phoneNumber,Password,CPassword)),
    updateOrderDetails: (firstname,lastname,email,phoneNumber,Password,CPassword, id) => dispatch(updateOrderDetails(firstname,lastname,email,phoneNumber,Password,CPassword, id)),
    resetOrderToEdit: () => dispatch(resetOrderToEdit())
});
export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder)
