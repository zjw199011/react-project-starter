import React, { Component } from 'react';

class Main extends Component {

    render() {
        return (
            <div>
                <h1>Main</h1>
                {
                    this.props.match.params.token
                        &&
                            <h3>Token is: {this.props.match.params.token}</h3>
                }
            </div>
        )
    }
}

export default Main
