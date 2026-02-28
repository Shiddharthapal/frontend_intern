import { collaborators } from "../dashboard/data";

export default function TeamPage() {
  const completed = collaborators.filter((item) => item.status === "Completed").length;
  const inProgress = collaborators.filter((item) => item.status === "In Progress").length;
  const pending = collaborators.filter((item) => item.status === "Pending").length;

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <main className="dashboard-main">
          <section className="content">
            <div className="heading-row">
              <div>
                <h1>Team</h1>
                <p>Coordinate ownership and monitor delivery status.</p>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button">
                  + Invite Member
                </button>
                <button className="btn secondary" type="button">
                  Manage Roles
                </button>
              </div>
            </div>

            <div className="overview-grid">
              <article className="overview-card primary">
                <div className="overview-top">
                  <h3>Total Members</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{collaborators.length}</strong>
                <p>Assigned to active tasks</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>Completed</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{completed}</strong>
                <p>Finished assigned scope</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>In Progress</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{inProgress}</strong>
                <p>Actively delivering</p>
              </article>

              <article className="overview-card">
                <div className="overview-top">
                  <h3>Pending</h3>
                  <span className="expand">^</span>
                </div>
                <strong>{pending}</strong>
                <p>Waiting for handoff</p>
              </article>
            </div>

            <div className="middle-grid">
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
                      <span className={`status ${member.tone}`}>{member.status}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="panel">
                <div className="panel-head">
                  <h2>Availability</h2>
                </div>
                <ul className="list-none p-0 m-0 grid gap-3">
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">2 members fully available</p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">1 member at 75% capacity</p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#f3f6f2] border border-[#e3e9e2]">
                    <p className="m-0 font-semibold text-[#254632]">1 member waiting for review</p>
                  </li>
                </ul>
              </article>

              <article className="panel progress">
                <h2>Team Output</h2>
                <div className="ring-wrap">
                  <div className="ring">
                    <div className="ring-value">68%</div>
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
