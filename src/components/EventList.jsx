
import { useState } from 'react'
import { EVENTS, TAG_COLORS } from '../data/mockData'
import './EventList.css'

const FILTERS = ["All", "Technical", "Cultural", "Business", "Workshop", "Sports"]

// ── Sub-components ──

function Badge({ text }) {
  const color = TAG_COLORS[text] || '#888'
  return (
    <span
      className="badge"
      style={{ background: color + '22', color }}
    >
      {text}
    </span>
  )
}

function ProgressBar({ registered, spots, color }) {
  const pct = Math.round((registered / spots) * 100)
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>{registered} registered</span>
        <span>{pct}% full</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: pct + '%', background: color }}
        />
      </div>
    </div>
  )
}

function EventCard({ event }) {
  const [rsvped, setRsvped] = useState(false)

  return (
    <div className="event-card card">
      <div className="event-stripe" style={{ background: event.color }} />
      <div className="event-body">
        <div className="event-top">
          <h3 className="event-title">{event.title}</h3>
          <Badge text={event.tag} />
        </div>
        <p className="event-club">🏛 {event.club}</p>
        <div className="event-meta">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
        </div>
        <p className="event-venue">📍 {event.venue}</p>
        <ProgressBar registered={event.registered} spots={event.spots} color={event.color} />
        <button
          className={`rsvp-btn btn ${rsvped ? 'rsvped' : ''}`}
          onClick={() => setRsvped(prev => !prev)}
        >
          {rsvped ? '✓ RSVP\'d' : 'RSVP Now'}
        </button>
      </div>
    </div>
  )
}

// ── Main Component ──

function EventList() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? EVENTS
    : EVENTS.filter(e => e.tag === filter)

  return (
    <div className="eventlist">
      {/* Filter Bar */}
      <div className="filter-bar">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`tag-filter ${filter === f ? 'active' : 'inactive'}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="events-grid">
        {filtered.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventList