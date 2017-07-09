import React from 'react';

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

export default CustomTooltip;