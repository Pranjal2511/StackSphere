import { useState, useEffect } from 'react'
import Header from './components/Header'
import StatsBar from './components/StatsBar'
import EventList from './components/EventList'
import ClubAnnouncements from './components/ClubAnnouncements'
import NotesSection from './components/NotesSection'
import ResourceDashboard from './components/ResourceDashboard'
import HackathonUpdates from './components/HackathonUpdates'
import Login from './components/Login'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('events')
  const [mounted, setMounted] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [])

  // Re-animate content on tab switch
  const [tabKey, setTabKey] = useState(0)
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setTabKey(prev => prev + 1)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'events':        return <EventList />
      case 'announcements': return <ClubAnnouncements />
      case 'notes':         return <NotesSection />
      case 'resources':     return <ResourceDashboard />
      case 'hackathons':    return <HackathonUpdates />
      default:              return <EventList />
    }
  }

  const TAB_META = {
    events:        { title: 'Upcoming Events',     subtitle: 'RSVP to events happening on campus' },
    announcements: { title: 'Club Announcements',  subtitle: 'Stay updated with clubs and departments' },
    notes:         { title: 'Notes Sharing',        subtitle: 'Download and share study material' },
    resources:     { title: 'Resource Dashboard',  subtitle: 'All your academic resources in one place' },
    hackathons:    { title: 'Hackathon Updates',   subtitle: 'Open competitions and opportunities' },
  }

  const meta = TAB_META[activeTab]

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className={`app ${mounted ? 'mounted' : ''}`}>
      <Header activeTab={activeTab} onTabChange={handleTabChange} onLogout={() => setIsLoggedIn(false)} />

      <main className="main-content">
        {/* Stats */}
        <StatsBar />

        {/* Page heading */}
        <div className="page-heading">
          <h2 className="page-title">{meta.title}</h2>
          <p className="page-subtitle">{meta.subtitle}</p>
        </div>

        {/* Tab Content */}
        <div key={tabKey} className="tab-content">
          {renderContent()}
        </div>
      </main>

      <footer className="footer">
        <p>CampusHub © 2025 · Built with React + Vite · Phase 1</p>
      </footer>
    </div>
  )
}

export default App
