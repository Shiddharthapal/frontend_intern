import { collaborators, projectList } from "../dashboard/data";

export default function TaskPage() {
  // Status is derived from collaborator workload to keep task metrics aligned with dashboard data.
  const statusSummary = collaborators.reduce(
    (acc, member) => {
      if (member.status === "Completed") acc.completed += 1;
      if (member.status === "In Progress") acc.inProgress += 1;
      if (member.status === "Pending") acc.pending += 1;
      return acc;
    },
    { completed: 0, inProgress: 0, pending: 0 }
  );

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <main className="dashboard-main">
          <section className="content">
            <div className="heading-row">
              <div>
                <h1>Tasks</h1>
                <p>Track assignments, owners, and current progress.</p>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button">
                  + Add Task
                </button>
                <button className="btn secondary" type="button">
                  Filter
                </button>
              </div>
            </div>

            <div className="overview-grid">
              <article className="overview-card primary">
                <div className="overview-top">
                  <h3>Total Tasks</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{projectList.length}</strong>
                <p>Active tasks in this sprint</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>Completed</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{statusSummary.completed}</strong>
                <p>Recently finished items</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>In Progress</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{statusSummary.inProgress}</strong>
                <p>Currently being worked on</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>Pending</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{statusSummary.pending}</strong>
                <p>Needs kickoff or review</p>
              </article>
            </div>

            <div className="middle-grid">
              <article className="panel project-list">
                <div className="panel-head">
                  <h2>Task Queue</h2>
                  <button type="button" className="chip">
                    + New
                  </button>
                </div>
                <ul>
                  {projectList.map((task) => (
                    <li key={task.title}>
                      <span className="dot" style={{ background: task.color }} />
                      <div>
                        <p>{task.title}</p>
                        <small>{task.date}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="panel collaboration">
                <div className="panel-head">
                  <h2>Ownership</h2>
                </div>
                <ul>
                  {collaborators.map((member) => (
                    <li key={member.name}>
                      <div className="member-avatar">
                        {member.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="member-info">
                        <p>{member.name}</p>
                        <small>{member.task}</small>
                      </div>
                      <span className={`status ${member.tone}`}>{member.status}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="panel tracker">
                <h2>Focus Timer</h2>
                <div className="timer">00:42:16</div>
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
