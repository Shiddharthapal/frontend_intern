import { LayoutDashboard,ClipboardCheck,CalendarSearch,ChartColumnBig,Users, Settings, LifeBuoy,LogOut } from "lucide-react";

const overviewCards = [
  {
    title: "Total Projects",
    value: "24",
    note: "Increased from last month",
    primary: true,
  },
  {
    title: "Ended Projects",
    value: "10",
    note: "Increased from last month",
    primary: false,
  },
  {
    title: "Running Projects",
    value: "12",
    note: "Increased from last month",
    primary: false,
  },
  { title: "Pending Project", value: "2", note: "On Discuss", primary: false },
];

const sideMainMenu = [
  { label: "Dashboard", active: true, icon:LayoutDashboard },
  { label: "Tasks", active: false, badge: "12+", icon:ClipboardCheck },
  { label: "Calendar", active: false,icon:CalendarSearch },
  { label: "Analytics", active: false, icon:ChartColumnBig},
  { label: "Team", active: false,icon:Users },
];
const sideGeneralMenu = [
  { label: "Settings", icon: Settings },
  { label: "Help",     icon: LifeBuoy },
  { label: "Logout",   icon: LogOut },
];

const projectList = [
  {
    title: "Develop API Endpoints",
    date: "Due date: Nov 26, 2024",
    color: "#2445ff",
  },
  {
    title: "Onboarding Flow",
    date: "Due date: Nov 28, 2024",
    color: "#2f9c95",
  },
  {
    title: "Build Dashboard",
    date: "Due date: Nov 30, 2024",
    color: "#98bb38",
  },
  {
    title: "Optimize Page Load",
    date: "Due date: Dec 6, 2024",
    color: "#f7ba2c",
  },
  {
    title: "Cross-Browser Testing",
    date: "Due date: Dec 6, 2024",
    color: "#f28623",
  },
];

const collaborators = [
  {
    name: "Alexandra Deff",
    task: "Github Project Repository",
    status: "Completed",
    tone: "done",
  },
  {
    name: "Edwin Adenike",
    task: "Integrate User Authentication System",
    status: "In Progress",
    tone: "progress",
  },
  {
    name: "Isaac Oluwatemilorun",
    task: "Develop Search and Filter Functionality",
    status: "Pending",
    tone: "pending",
  },
  {
    name: "David Oshodi",
    task: "Responsive Layout for Homepage",
    status: "In Progress",
    tone: "progress",
  },
];

const weekBars = [
  { day: "S", fill: 0, stripe: true },
  { day: "M", fill: 78, stripe: false },
  { day: "T", fill: 65, stripe: false, topText: "74%" },
  { day: "W", fill: 92, stripe: false },
  { day: "T", fill: 0, stripe: true },
  { day: "F", fill: 0, stripe: true },
  { day: "S", fill: 0, stripe: true },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <aside className="fixed  left-0 h-screen w-[220px] bg-[#f8f8f8] flex flex-col gap-6 px-4 py-6 z-50 overflow-y-auto">
         

          {/* Main Menu */}
          <div>
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-medium mb-0 px-1">
              MENU
            </p>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {sideMainMenu.map((item) => {
                const Icon=item.icon;
                return(
                
                <li
                  key={item.label}
                  className={`relative flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all
                ${
                  item.active
                    ? "bg-[#edf2ed] text-[#1a5c36] font-semibold"
                    : "text-[#3a4a3e] hover:bg-gray-100"
                }`}
                >
                  {/* Active bar */}
                  {item.active && (
                    <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-9 bg-[#238c5f] rounded-r-3xl" />
                  )}

                  {/* Checkbox icon */}
                  <Icon
                    className={`w-[18px] h-[18px] rounded-[4px] flex-shrink-0
                ${item.active ? "border-[#1f8a5a]" : "border-[#8a9e90]"}`}
                  />

                  <span className="text-[17px]">{item.label}</span>

                  {item.badge && (
                    <span className="ml-auto bg-[#1e7d56] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </li>
              )})}
            </ul>
          </div>

          {/* General Menu */}
          <div>
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-medium mb-2 px-1">
              GENERAL
            </p>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
              {sideGeneralMenu.map((item) => {
                const Icon=item.icon;
                return(
                <li
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[#68766d] text-[17px] cursor-pointer hover:bg-gray-100"
                >
                  <Icon className="w-[18px] h-[18px] rounded-[4px]  flex-shrink-0" />
                  <span>{item.label}</span>
                </li>
              )})}
            </ul>
          </div>

          
        </aside>

        <main className="  dashboard-main">
          <section className="content">
            <div className="heading-row">
              <div>
                <h1>Dashboard</h1>
                <p>Plan, prioritize, and accomplish your tasks with ease.</p>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button">
                  + Add Project
                </button>
                <button className="btn secondary" type="button">
                  Import Data
                </button>
              </div>
            </div>

            <div className="overview-grid">
              {overviewCards.map((card) => (
                <article
                  key={card.title}
                  className={`overview-card ${card.primary ? "primary" : ""}`}
                >
                  <div className="overview-top">
                    <h3>{card.title}</h3>
                    <span className="expand">^</span>
                  </div>
                  <strong>{card.value}</strong>
                  <p>{card.note}</p>
                </article>
              ))}
            </div>

            <div className="middle-grid">
              <article className="panel analytics">
                <div className="panel-head">
                  <h2>Project Analytics</h2>
                </div>
                <div className="bars">
                  {weekBars.map((bar, index) => (
                    <div key={`${bar.day}-${index}`} className="bar-col">
                      <div
                        className={`bar ${bar.stripe ? "striped" : ""}`}
                        style={{ height: bar.fill ? `${bar.fill}%` : "84%" }}
                      >
                        {bar.topText && (
                          <span className="bar-label">{bar.topText}</span>
                        )}
                      </div>
                      <span>{bar.day}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="panel reminders">
                <h2>Reminders</h2>
                <h3>Meeting with Arc Company</h3>
                <p>Time : 02.00 pm - 04.00 pm</p>
                <button type="button">Start Meeting</button>
              </article>

              <article className="panel project-list">
                <div className="panel-head">
                  <h2>Project</h2>
                  <button type="button" className="chip">
                    + New
                  </button>
                </div>
                <ul>
                  {projectList.map((project) => (
                    <li key={project.title}>
                      <span
                        className="dot"
                        style={{ background: project.color }}
                      />
                      <div>
                        <p>{project.title}</p>
                        <small>{project.date}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="bottom-grid">
              <article className="panel collaboration">
                <div className="panel-head">
                  <h2>Team Collaboration</h2>
                  <button type="button" className="chip">
                    + Add Member
                  </button>
                </div>
                <ul>
                  {collaborators.map((member) => (
                    <li key={member.name}>
                      <div className="member-avatar">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="member-info">
                        <p>{member.name}</p>
                        <small>Working on {member.task}</small>
                      </div>
                      <span className={`status ${member.tone}`}>
                        {member.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="panel progress">
                <h2>Project Progress</h2>
                <div className="ring-wrap">
                  <div className="ring">
                    <div className="ring-value">41%</div>
                  </div>
                </div>
                <div className="legend">
                  <span>
                    <i className="done" />
                    Completed
                  </span>
                  <span>
                    <i className="progress" />
                    In Progress
                  </span>
                  <span>
                    <i className="pending" />
                    Pending
                  </span>
                </div>
              </article>

              <article className="panel tracker">
                <h2>Time Tracker</h2>
                <div className="timer">01:24:08</div>
                <div className="tracker-actions">
                  <button type="button" className="pause">
                    II
                  </button>
                  <button type="button" className="stop">
                    o
                  </button>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
