import React, { Component } from 'react'
import axios from 'axios'

export class addressForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            balance: ''
        }
    }

    handleSubmit = (event) => {
        console.log("hello world")
        console.log(this.state.address);
        axios.get(`https://api.blockcypher.com/v1/eth/main/addrs/${this.state.address}`).then(response => {
            console.log(response.data);
            this.setState({
                balance:response.data.balance
            })
            console.log(this.state.balance)
        }).catch(error => {
            console.log(error);
        });
    }

    handleAddress = event => {
        this.setState({
            address: event.target.value
        })
        console.log(this.state.address);
    }

    render() {
        return (
            <form class="form-inline">
                <div class="container">
                    <h3>Account Info</h3>
                    <div class="form-group row">
                        <label>Address</label>
                        <div class="col-md-6">
                            <input class="form-control" size="60" type="text" value={this.state.address} onChange={this.handleAddress} />
                        </div>
                            <div class="col-md-3">
                                <button class="btn btn-primary" type="button" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        <div>
                          <label>Balance:  {this.state.balance} </label>
                        </div>
                    </div> 
                </div>
            </form>
        )
    }
}

export default addressForm
