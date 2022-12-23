import React, { useState } from "react";

function CompanyInput(props) {
    const [input, setInput] = useState('');

    function handleClick(e) {
        props.setCompanySymbol(input);
    }

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
    <div className="container">
        <form class="form-inline">
            <div>
                <input name ="inputBox" className="form-control" placeholder="Enter the Company symbol" value={input} onChange={handleChange} type="text"/>
                <button id="button" className="btn btn-danger" onClick={handleClick} type="submit">Search</button>
            </div>
        </form>
    </div>
    );
}

export default  CompanyInput;