import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Report from './pages/Report'
import MapView from './pages/MapView'
import Leaderboard from './pages/Leaderboard'
import Feedback from './pages/Feedback'
import Recycle from './pages/Recycle'
import ReportForm from './pages/ReportForm'
import Scheduler from './pages/Scheduler'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/map" element={<MapView />} />
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/reportform" element={<ReportForm />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </div>
    </>
  )
}
