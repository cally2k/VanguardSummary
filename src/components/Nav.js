import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="tr pt4 pr4">
      <a href="index.html" className="dib ph4 link dim near-black">Funds</a>
      <a href="InvestCalc.html" className="dib ph4 link dim near-black">InvestCalc</a>
      <a href="SalaryCalc.html" className="dib ph4 link dim near-black">SalaryCalc</a>
    </div>
  )
}

export default Nav;