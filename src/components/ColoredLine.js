import React from 'react'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 4,
            width: 30,
            noshade: "noshade",
            align:"center",
            
        }}
    />
);

export default ColoredLine;