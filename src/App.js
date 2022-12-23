import LineChartData from "./components/LineChartData";
import CompanyInput from "./components/CompanyInput";
import TimeFrame from "./components/TimeFrame";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [companySymbol, setCompanySymbol] = useState([]);
  const [time, setTime] = useState();
  
  return (
    <div>
      <div className="text">
        <h2>Stock Chart Market</h2>
      </div>
      <div>
        <CompanyInput
          companySymbol={companySymbol}
          setCompanySymbol={setCompanySymbol} 
        />
      </div>
      <div>
        <TimeFrame
          setTime={setTime}
          time={time}
        />
      </div>
      <div>
        <LineChartData
          companySymbol={companySymbol}
          time={time}
        />
      </div>

    </div>
  );
}

export default App;

