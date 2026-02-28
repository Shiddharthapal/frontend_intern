import { Link } from "react-router-dom";
import {
  collaborators,
  meetingReminder,
  overviewCards,
  projectList,
  weekBars,
} from "./data";
import { MoveUpIcon, MoveUpRight } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [hovered, setHovered] = useState(2);
  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <main className="dashboard-main">
          <section className="content">
            <div className="heading-row">
              <div>
                <h1>Dashboard</h1>
                <p>Plan, prioritize, and accomplish your tasks with ease.</p>
              </div>
              <div className="action-row">
                <Link to="/tasks" className="btn primary">
                  Open Tasks
                </Link>
                <Link to="/analytics" className="btn secondary">
                  View Analytics
                </Link>
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
                    <span
                      className="w-[30px] h-[30px] rounded-full grid place-items-center 
                    border border-gray-700 text-[14px] bg-gray-100 text-gray-700"
                    >
                      <MoveUpRight />
                    </span>
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
                  {weekBars.map((bar, i) => {
                    const isHovered = hovered === i;
                    const totalHeight = 110;

                    return (
                      <div
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(2)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "6px",
                          cursor: "pointer",
                        }}
                      >
                        {/* Tooltip */}
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            color: bar.stripe ? "transparent" : "#fff",
                            background: bar.stripe
                              ? "transparent"
                              : isHovered
                                ? "#222"
                                : "transparent",
                            borderRadius: "6px",
                            padding: "2px 6px",
                            marginBottom: "2px",
                            minHeight: "18px",
                            transition: "background 0.2s",
                          }}
                        >
                          {isHovered && !bar.stripe ? `${bar.fill}%` : ""}
                        </div>

                        {/* Bar container (full height = 100) */}
                        <div
                          style={{
                            width: "34px",
                            height: `${totalHeight}px`,
                            borderRadius: "20px",
                            overflow: "hidden",
                            position: "relative",
                            background: bar.stripe ? "transparent" : "#e8f5ee",
                          }}
                        >
                          {bar.stripe ? (
                            /* Striped empty bar */
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "20px",
                                border: "2px solid #d0e8d8",
                                background: `repeating-linear-gradient(
                      -45deg,
                      #d8ead0 0px,
                      #d8ead0 3px,
                      transparent 3px,
                      transparent 8px
                    )`,
                              }}
                            />
                          ) : (
                            /* Filled bar from bottom */
                            <>
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  height: `${bar.fill}%`,
                                  background: isHovered
                                    ? bar.color === "#6dcfa0"
                                      ? "#5abf90"
                                      : bar.color
                                    : bar.color,
                                  borderRadius: "20px",
                                  transition: "height 0.3s ease",
                                }}
                              />
                            </>
                          )}
                        </div>

                        {/* Day label */}
                        <span
                          style={{
                            fontSize: "12px",
                            color: isHovered && !bar.stripe ? "#222" : "#aaa",
                            fontWeight: isHovered ? 600 : 400,
                            transition: "color 0.2s",
                          }}
                        >
                          {bar.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>

              <article className="panel reminders">
                <h2>Reminders</h2>
                <h3>{meetingReminder.title}</h3>
                <p>{meetingReminder.time}</p>
                <Link
                  to="/calendar"
                  className="mt-4 w-full inline-flex justify-center rounded-full border-0 bg-gradient-to-r from-[#0f6c44] to-[#1a8f5f] px-2 py-1 text-[20px] text-white"
                >
                  Open Calendar
                </Link>
              </article>

              <article className="panel project-list">
                <div className="panel-head">
                  <h2>Project</h2>
                  <Link to="/tasks" className="chip">
                    + New
                  </Link>
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
                  <Link to="/team" className="chip">
                    + Add Member
                  </Link>
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
