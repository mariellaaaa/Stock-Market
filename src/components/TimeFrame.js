import React, { useState } from "react";

function TimeFrame(props) {
    const searchTime = ["5", "20", "99"];

    function setTimeFrame(dayNumber) {
        props.setTime(searchTime[dayNumber]);
    };

    return (
        <div class="btn-group">
            <button onClick={setTimeFrame.bind(this,'0')} type="button" class="btn btn-warning">1 week</button>
            <button onClick={setTimeFrame.bind(this,'1')} type="button" class="btn btn-warning">1 month</button>
            <button onClick={setTimeFrame.bind(this,'2')} type="button" class="btn btn-warning">full</button>
        </div>

    );
}

export default TimeFrame;