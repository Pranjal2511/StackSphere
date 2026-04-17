import { useState } from 'react'
import { ANNOUNCEMENTS } from '../data/mockData'
import './ClubAnnouncements.css'

function AnnouncementCard({ ann }) {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div
      className={`ann-card card ${ann.urgent ? 'ann-urgent' : ''}`}
    >
      {/* Avatar */}
      <div
        className="ann-avatar"
        style={{ background: ann.color + '22', color: ann.color }}
      >
        {ann.avatar}
      </div>

      {/* Content */}
      <div className="ann-content">
        <div className="ann-header">
          <span className="ann-club">{ann.club}</span>
          {ann.urgent && <span className="ann-badge-urgent">URGENT</span>}
          <span className="ann-time">{ann.time}</span>
        </div>
        <p className="ann-msg">{ann.msg}</p>
      </div>

      {/* Bookmark */}
      <button
        className={`bookmark-btn ${bookmarked ? 'active' : ''}`}
        onClick={() => setBookmarked(prev => !prev)}
        title="Bookmark"
      >
        ★
      </button>
    </div>
  )
}

function ClubAnnouncements() {
  return (
    <div className="announcements">
      <div className="ann-list">
        {ANNOUNCEMENTS.map(ann => (
          <AnnouncementCard key={ann.id} ann={ann} />
        ))}
      </div>
    </div>
  )
}

export default ClubAnnouncements
