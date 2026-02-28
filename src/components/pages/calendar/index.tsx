import { meetingReminder, projectList } from "../dashboard/data";

export default function CalendarPage() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <main className="dashboard-main">
          <section className="content">
            <div className="heading-row">
              <div>
                <h1>Calendar</h1>
                <p>View meetings and due dates in one place.</p>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button">
                  + Add Event
                </button>
                <button className="btn secondary" type="button">
                  This Week
                </button>
              </div>
            </div>

            <div className="middle-grid">
              <article className="panel project-list">
                <div className="panel-head">
                  <h2>Upcoming Deadlines</h2>
                </div>
                <ul>
                  {projectList.map((item) => (
                    <li key={item.title}>
                      <span className="dot" style={{ background: item.color }} />
                      <div>
                        <p>{item.title}</p>
                        <small>{item.date}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="panel reminders">
                <h2>Reminder</h2>
                <h3>{meetingReminder.title}</h3>
                <p>{meetingReminder.time}</p>
                <button type="button">Start Meeting</button>
              </article>

              <article className="panel">
                <div className="panel-head">
                  <h2>Today</h2>
                </div>
                <p className="text-sm text-[#627267] mb-3">Priority Schedule</p>
                <ul className="list-none p-0 m-0 grid gap-3">
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">10:30 AM - Standup</p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">02:00 PM - Arc Meeting</p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">05:00 PM - Sprint Review</p>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
