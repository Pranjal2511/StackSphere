import { useState } from 'react'
import './header.css'

function Header({ activeTab, onTabChange, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const TABS = [
    { id: "events",        label: "Events",     icon: "📅" },
    { id: "announcements", label: "Clubs",      icon: "📢" },
    { id: "resources",     label: "Resources",  icon: "📚" },
    { id: "hackathons",    label: "Hackathons", icon: "🏆" },
  ]

  return (
    <header className="header">
      <div className="header-inner">
        {/* Brand */}
        <div className="header-brand">
          <span className="brand-logo">⬡</span>
          <h1 className="brand-name">
            Campus<span className="brand-accent">Hub</span>
          </h1>
          <span className="brand-sub">digital campus</span>
        </div>

        {/* Nav Tabs */}
        <nav className="header-nav">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* User Avatar */}
        <div className="header-user" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="user-avatar">PG</div>
          {isDropdownOpen && (
            <div className='signOpt'>
              <ul>
                <li><h3>Profile</h3></li>
                <li><h3>Settings</h3></li>
                <li onClick={onLogout}><h3>Logout</h3></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header