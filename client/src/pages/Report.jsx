import React, { useState } from 'react'
import axios from 'axios'

export default function Report() {
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData()
    fd.append('image', file)
    fd.append('description', desc)
    // simple geolocation (fallback to 0,0 if denied)
    navigator.geolocation.getCurrentPosition(async pos => {
      fd.append('latitude', pos.coords.latitude)
      fd.append('longitude', pos.coords.longitude)
      try {
        const res = await axios.post('http://localhost:5000/api/reports', fd)
        alert('Reported! id: ' + res.data.id)
      } catch (err) {
        console.error(err); alert('Upload failed')
      }
    }, async () => {
      fd.append('latitude', 0); fd.append('longitude', 0)
      try {
        const res = await axios.post('http://localhost:5000/api/reports', fd)
        alert('Reported! id: ' + res.data.id)
      } catch (err) {
        console.error(err); alert('Upload failed')
      }
    })
  }

  return (
    <div className="card p-4">
      <h3>Report Waste</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Photo</label>
          <input className="form-control" type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" value={desc} onChange={e => setDesc(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}
