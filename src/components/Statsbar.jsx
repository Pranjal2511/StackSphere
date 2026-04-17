import { STATS } from '../data/mockData'
import './statsbar.css'

function StatsBar() {
  return (
    <div className="statsbar">
      {STATS.map(stat => (
        <div key={stat.label} className="stat-card" style={{ borderLeftColor: stat.color }}>
          <p className="stat-value" style={{ color: stat.color }}>{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsBar