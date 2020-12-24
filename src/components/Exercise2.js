import React, { Component } from 'react';

class Exercise2 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            fruit: ""
        }
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateFruit = (event) => {
        this.setState({
            fruit: event.target.value
        }, function () {
            alert(` ${this.state.name} selected ${this.state.fruit}`)
        })
    }



    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.updateName} id="name-input" />
                <select id="select-input" onChange={this.updateFruit} >
                    <option value='apple'>apple</option>
                    <option value='orange'>orange</option>
                </select>
            </div>
        );
    }
}

export default Exercise2;