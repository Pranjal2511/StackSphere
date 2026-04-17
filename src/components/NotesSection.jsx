import { useState } from 'react'
import { NOTES, TAG_COLORS } from '../data/mockData'
import './NotesSection.css'

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(s => (
        <span
          key={s}
          className="star"
          style={{ color: s <= Math.round(rating) ? '#ffd93d' : '#2a2a3a' }}
        >
          ★
        </span>
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  )
}

function NoteCard({ note }) {
  const color = TAG_COLORS[note.tag] || '#888'

  return (
    <div className="note-card card">
      <div className="note-top">
        <span className="badge" style={{ background: color + '22', color }}>
          {note.tag}
        </span>
        <span className="note-sem">{note.sem}</span>
      </div>
      <p className="note-subject">{note.subject}</p>
      <h3 className="note-title">{note.title}</h3>
      <div className="note-meta">
        <span>by {note.by}</span>
        <span>·</span>
        <span>{note.size}</span>
        <span>·</span>
        <span>{note.downloads} ↓</span>
      </div>
      <div className="note-footer">
        <StarRating rating={note.rating} />
        <button className="btn download-btn">Download</button>
      </div>
    </div>
  )
}

function NotesSection() {
  const [search, setSearch] = useState('')

  const filtered = NOTES.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.subject.toLowerCase().includes(search.toLowerCase()) ||
    n.by.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="notes-section">
      {/* Search */}
      <div className="notes-search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="notes-search"
          type="text"
          placeholder="Search by subject, title or uploader..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="notes-grid">
          {filtered.map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <p className="empty-msg">No notes found for "{search}"</p>
      )}
    </div>
  )
}

export default NotesSection