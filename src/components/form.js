import React, { Component } from 'react'
import axios from 'axios'

export class form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hash: '',
            height: '',
            previous_hash: '',
            time: ''
        }
    }

    componentDidMount() {
        axios.get('https://api.blockcypher.com/v1/eth/main').then(response => {
            this.setState({
                hash: response.data.hash,
                height: response.data.height,
                previous_hash: response.data.previous_hash,
                time: response.data.time
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div class="container">
                <h3>BlockChain Info</h3>
               <br />
                <table class="table table-bordered table-striped">
                    <tbody>
                    <tr>
                        <td class="col-md-3">Hash</td>
                        <td class="col-md-6">{this.state.hash}</td>
                    </tr>
                    <tr>
                        <td class="col-md-3">Height</td>
                        <td class="col-md-6">{this.state.height}</td>
                    </tr>
                    <tr>
                        <td class="col-md-3">Previous Hash</td>
                        <td class="col-md-6">{this.state.previous_hash}</td>
                    </tr>
                    <tr>
                        <td class="col-md-3">Time</td>
                        <td class="col-md-6">{this.state.time}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default form
