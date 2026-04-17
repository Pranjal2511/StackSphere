import { useState } from 'react'
import { HACKATHONS } from '../data/mockData'
import './HackathonUpdates.css'

const MODES = ["All", "Online", "Offline", "Hybrid"]

function HackathonCard({ hack }) {
  const isOpen = hack.status === 'Open'

  return (
    <div className="hack-card card">
      <div className="hack-main">
        <div className="hack-info">
          <div className="hack-title-row">
            <h3 className="hack-name">{hack.name}</h3>
            <span className={`hack-status ${isOpen ? 'open' : 'upcoming'}`}>
              {hack.status}
            </span>
          </div>
          <p className="hack-org">by {hack.org}</p>
          <div className="hack-domains">
            {hack.domain.map(d => (
              <span key={d} className="domain-tag">{d}</span>
            ))}
          </div>
        </div>

        <div className="hack-stats">
          <div className="hack-stat">
            <p className="hack-stat-label">Prize</p>
            <p className="hack-stat-value prize">{hack.prize}</p>
          </div>
          <div className="hack-stat">
            <p className="hack-stat-label">Deadline</p>
            <p className="hack-stat-value deadline">{hack.deadline}</p>
          </div>
          <div className="hack-stat">
            <p className="hack-stat-label">Mode</p>
            <p className="hack-stat-value">{hack.mode}</p>
          </div>
          <div className="hack-stat">
            <p className="hack-stat-label">Team</p>
            <p className="hack-stat-value">{hack.team}</p>
          </div>
        </div>

        <button className="apply-btn btn">Apply →</button>
      </div>
    </div>
  )
}

function HackathonUpdates() {
  const [mode, setMode] = useState('All')

  const filtered = mode === 'All'
    ? HACKATHONS
    : HACKATHONS.filter(h => h.mode === mode)

  return (
    <div className="hackathons">
      {/* Filter */}
      <div className="filter-bar">
        {MODES.map(m => (
          <button
            key={m}
            className={`tag-filter ${mode === m ? 'active-yellow' : 'inactive'}`}
            onClick={() => setMode(m)}
          >
            {m}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="hack-list">
        {filtered.map(hack => (
          <HackathonCard key={hack.id} hack={hack} />
        ))}
      </div>
    </div>
  )
}

export default HackathonUpdates