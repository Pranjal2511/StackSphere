// ── mockData.js ──
// All mock data for CampusHub Phase 1

export const EVENTS = [
  { id: 1, title: "Tech Fest 2025",        club: "CSE Dept",      date: "Mar 22", time: "10:00 AM", venue: "Auditorium A",  tag: "Technical", spots: 120, registered: 87,  color: "#6c63ff" },
  { id: 2, title: "Cultural Night",         club: "Cultural Club", date: "Mar 25", time: "6:00 PM",  venue: "Open Ground",   tag: "Cultural",  spots: 300, registered: 241, color: "#ff6b6b" },
  { id: 3, title: "Startup Pitch Day",      club: "E-Cell",        date: "Apr 1",  time: "2:00 PM",  venue: "Seminar Hall",  tag: "Business",  spots: 60,  registered: 48,  color: "#ffd93d" },
  { id: 4, title: "AI Workshop",            club: "ML Club",       date: "Apr 5",  time: "11:00 AM", venue: "Lab 3",         tag: "Workshop",  spots: 40,  registered: 39,  color: "#4ecdc4" },
  { id: 5, title: "Sports Meet",            club: "Sports Club",   date: "Apr 8",  time: "8:00 AM",  venue: "Grounds",       tag: "Sports",    spots: 200, registered: 156, color: "#ff9a3c" },
  { id: 6, title: "Photography Walk",       club: "Photo Club",    date: "Apr 10", time: "5:00 PM",  venue: "Campus",        tag: "Cultural",  spots: 30,  registered: 22,  color: "#ff6b6b" },
]

export const ANNOUNCEMENTS = [
  { id: 1, club: "CSE Dept",      msg: "Final year project submissions due April 15. Submit via college portal only.",        time: "2h ago",  urgent: true,  avatar: "CS", color: "#6c63ff" },
  { id: 2, club: "Library",       msg: "New AI/ML books available for 15-day issue. Grab yours before they run out!",         time: "5h ago",  urgent: false, avatar: "LB", color: "#4ecdc4" },
  { id: 3, club: "Placement Cell",msg: "Amazon campus drive scheduled for April 20. Register by April 10 on the portal.",     time: "1d ago",  urgent: true,  avatar: "PC", color: "#ffd93d" },
  { id: 4, club: "KTS Club",       msg: "Weekly reading group this Saturday 3pm. Topic: Transformers architecture deep dive.", time: "1d ago",  urgent: false, avatar: "ML", color: "#ff9a3c" },
  { id: 5, club: "E-Cell",        msg: "Guest lecture by unicorn startup founder next Tuesday. Free entry for all students.", time: "2d ago",  urgent: false, avatar: "EC", color: "#ff6b6b" },
  { id: 6, club: "NSS",           msg: "Blood donation camp on April 12. Volunteers please report at 9am to NSS office.",     time: "2d ago",  urgent: false, avatar: "NS", color: "#4ecdc4" },
]

export const NOTES = [
  { id: 1, subject: "Data Structures",    title: "AVL Trees Complete Notes",          by: "Rahul M.",  sem: "4th Sem", size: "2.4MB", downloads: 312, rating: 4.8, tag: "CSE" },
  { id: 2, subject: "DBMS",              title: "Normalization & SQL Cheatsheet",     by: "Priya K.",  sem: "4th Sem", size: "1.1MB", downloads: 489, rating: 4.9, tag: "CSE" },
  { id: 3, subject: "OS Concepts",       title: "Process Scheduling Diagrams",        by: "Arjun S.",  sem: "5th Sem", size: "3.2MB", downloads: 201, rating: 4.6, tag: "CSE" },
  { id: 4, subject: "Computer Networks", title: "OSI Model Visual Notes",             by: "Sneha R.",  sem: "5th Sem", size: "1.8MB", downloads: 267, rating: 4.7, tag: "CSE" },
  { id: 5, subject: "Machine Learning",  title: "ML Algorithms Handwritten",          by: "Karan T.",  sem: "6th Sem", size: "5.1MB", downloads: 543, rating: 4.9, tag: "AI/ML" },
  { id: 6, subject: "Web Development",   title: "React Hooks Explained with Examples",by: "Nisha P.",  sem: "6th Sem", size: "2.0MB", downloads: 388, rating: 4.8, tag: "Web" },
]

export const RESOURCES = [
  { id: 1, title: "Interview Prep Kit",  desc: "DSA, System Design, HR rounds",       icon: "🎯", count: "120 resources", tag: "Placement" },
  { id: 2, title: "Past Year Papers",    desc: "10 years across all branches",         icon: "📄", count: "850+ papers",   tag: "Exams"     },
  { id: 3, title: "Project Ideas",       desc: "Curated final year projects",          icon: "💡", count: "300+ ideas",    tag: "Projects"  },
  { id: 4, title: "Free Courses",        desc: "Curated free online courses",          icon: "🎓", count: "200+ courses",  tag: "Learning"  },
  { id: 5, title: "Resume Templates",    desc: "ATS-friendly LaTeX templates",         icon: "📋", count: "25 templates",  tag: "Career"    },
  { id: 6, title: "Internship Portal",   desc: "Verified campus internships",          icon: "🏢", count: "60+ listings",  tag: "Internship"},
]

export const HACKATHONS = [
  { id: 1, name: "HackMIT India",            org: "MIT ADT",        prize: "₹2,00,000", deadline: "Mar 28", mode: "Offline", status: "Open",     team: "2-4", domain: ["AI","Web","IoT"]                },
  { id: 2, name: "Smart India Hackathon",    org: "Govt of India",  prize: "₹1,00,000", deadline: "Apr 10", mode: "Online",  status: "Open",     team: "6",   domain: ["Govt","Social","Tech"]           },
  { id: 3, name: "CodeFest 5.0",             org: "IIT Bombay",     prize: "₹75,000",   deadline: "Apr 15", mode: "Hybrid",  status: "Upcoming", team: "2-3", domain: ["ML","Security","Finance"]        },
  { id: 4, name: "HackForChange",            org: "Google",         prize: "$5,000",    deadline: "Apr 20", mode: "Online",  status: "Open",     team: "1-4", domain: ["Climate","Health","Education"]   },
]

export const STATS = [
  { label: "Events This Month", value: "12",   color: "#6c63ff" },
  { label: "Notes Shared",      value: "1.2K", color: "#4ecdc4" },
  { label: "Active Clubs",      value: "28",   color: "#ffd93d" },
  { label: "Open Hackathons",   value: "4",    color: "#ff9a3c" },
]

export const TAG_COLORS = {
  Technical:  "#6c63ff",
  Cultural:   "#ff6b6b",
  Business:   "#ffd93d",
  Workshop:   "#4ecdc4",
  Sports:     "#ff9a3c",
  "CSE":      "#6c63ff",
  "AI/ML":    "#4ecdc4",
  "Web":      "#ff6b6b",
  Placement:  "#ffd93d",
  Exams:      "#ff9a3c",
  Projects:   "#6c63ff",
  Learning:   "#4ecdc4",
  Career:     "#ff6b6b",
  Internship: "#a78bfa",
}
