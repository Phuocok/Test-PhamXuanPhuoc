import React, { Component } from 'react';

import Short from '../Short'; 
import "./Code.css"
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: [],
        };
      }

onSearchChange = (e) => {
        this.setState({
            search: e.target.value,
        });
    };

onSubmitShort = (e) => {
        e.preventDefault();
        this.props.onFetchShort(this.state.search);
        this.setState({
            search:"",
        });
  };
    render() {
        const {search} = this.state;
        return (
            <div className="container">
                <h1>Short Link</h1>
            <form onSubmit={this.onSubmitShortLink}>
            
                <input type="text"
                name="search"
                placeholder="Dán link vào đây"
                value={search}
                className="text-center"
                onChange={this.onSearchChange}
                >
                </input>
                
            </form>
            <Short />
            
        

        </div>
        );
    }
}

export default index;