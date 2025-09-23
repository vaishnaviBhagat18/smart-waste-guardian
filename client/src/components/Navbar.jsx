import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">Smart Waste</Link>
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item"><Link className="nav-link" to="/report">Report</Link></li>
    //         <li className="nav-item"><Link className="nav-link" to="/map">Waste Map</Link></li>
    //         <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#237c27ff' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white nav-link:hover" to="/">Smart Waste</Link>
        <button
          className="navbar-toggler border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white " to="/report">Report</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/map">Waste Map</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
