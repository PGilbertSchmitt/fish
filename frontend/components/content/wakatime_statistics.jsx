import React, { Component } from 'react';

class WakatimeStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            data: []
        }
    }

    componentDidMount() {
        this.props.fetchActivity();
        let width = document.getElementById("chart-container").offsetWidth;
        let height = document.getElementById("chart-container").offsetHeight;

        this.setState({ width, height });
    }

    componentWillReceiveProps(nextProps) {
        let data = nextProps.wakaActivity.data;
        data = data.map(point => {
            let hours = point.grand_total.hours;
            let minutes = point.grand_total.minutes;
            let totalMinutes = minutes + (60 + hours);

            let minuteString = `${hours}:${this.padMinutes(minutes)}`;

            return {
                minutes: totalMinutes,
                minuteString: minuteString,
                date: point.range.date.substring(5)
            }
        });

        this.setState({ data })
    }

    padMinutes(num) {
        if (num === 0) {
            return "00";
        } else if (num < 10) {
            return `0${num}`;
        } else {
            return num.toString();
        }
    }

    render() {
        let width = this.state.width;
        let height = this.state.height;
        let data = this.state.data;

        return (
            <div className="wakatime-stats" id="chart-container">I typed today!</div>
        );
    }
}

export default WakatimeStatistics;