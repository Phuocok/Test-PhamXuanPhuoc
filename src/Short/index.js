import React, { Component } from 'react';
import axios from "axios";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: [],
        };
      }

onFetchShort = async (search) => {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${search}`)
    this.setState({
        search: response.data,
    })
    console.log(response)
}
    render() {

        const {onSubmitShort} = this.state;
        
        return (
            <div>
                <button label="Submit" type="button" onClick={onSubmitShort}>Shrtco.de</button>
            </div>
        );
    }
}

export default index;