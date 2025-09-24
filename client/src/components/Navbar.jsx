import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Smart Waste</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/report">Report</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/map">Waste Map</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/feedback">Feedback</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/recycle">Recycle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reportform">Report Form</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/scheduler">Scheduler</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
