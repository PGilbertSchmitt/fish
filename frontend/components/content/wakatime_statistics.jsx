import React, { Component } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip } from 'recharts';

const CustomTooltip = (props) => {
    if (props.active) {
        if (props.payload && props.payload.length > 0) {
            let data = props.payload[0].payload;
            return (
                <div className="tooltip">
                    <p>{data.timeString} hr</p>
                </div>
            );
        }

    }
    return null;
};

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
        let width = document.getElementById("portal-top").offsetWidth - 50;
        let height = document.getElementById("portal-top").clientHeight - 60;

        this.setState({ width, height });
    }

    componentWillReceiveProps(nextProps) {
        let data = nextProps.wakaActivity.data;
        data = data.map(point => {
            let hours = point.grand_total.hours;
            let minutes = point.grand_total.minutes;
            let totalMinutes = minutes + (60 * hours);

            let timeString = `${hours}:${this.padMinutes(minutes)}`;

            return {
                minutes: totalMinutes,
                timeString: timeString,
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

        let margin = { top: 5, right: 20, bottom: 5 };

        return (
            <div className="wakatime-stats" id="chart-container">
                <ComposedChart
                    width={width}
                    height={height}
                    data={data}
                    margin={margin} >

                    <Tooltip
                        cursor={{ fill: "#8FC2FF" }}
                        content={<CustomTooltip />} />
                    <Bar
                        type="monotone"
                        dataKey="minutes"
                        fill="#2660A4" />
                    <Line
                        type="monotone"
                        dataKey="minutes"
                        stroke="#19323C"
                        strokeWidth={3} />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        padding={{ left: 10, right: 10 }} />
                    <YAxis
                        unit="min"
                        dataKey="minutes" />
                </ComposedChart>
                <h6>Minutes spent coding this week</h6>
            </div>
        );
    }
}

export default WakatimeStatistics;