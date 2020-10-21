import React from 'react';
import axios from 'axios';
import '../App.css';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            IP: null
        };
    }

    componentDidMount() {
        const headers = {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
        axios.get('http://localhost:5000/API/v1.0/getIP',{ headers })
            .then(response => this.setState({ IP: response.data }));
    }

    render() {
        const { IP } = this.state;
        return (
            <a className = 'App-font3'>IP de BlackMagic: {IP}</a>
        );
    }
}

export default GetRequest; 