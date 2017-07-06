import React, { Component } from 'react';

class WakatimeStatistics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStats();
    }

    render() {
        return (
            <div>I typed today!</div>
        );
    }
}

export default WakatimeStatistics;