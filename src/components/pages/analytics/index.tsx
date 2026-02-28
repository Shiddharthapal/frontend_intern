import { collaborators, overviewCards, weekBars } from "../dashboard/data";

export default function AnalyticsPage() {
  const statusBreakdown = collaborators.reduce(
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
                <h1>Analytics</h1>
                <p>Measure project velocity and team output.</p>
              </div>
              <div className="action-row">
                <button className="btn primary" type="button">
                  Export Report
                </button>
                <button className="btn secondary" type="button">
                  Last 30 Days
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
                  <h2>Weekly Performance</h2>
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

              <article className="panel progress">
                <h2>Completion Ratio</h2>
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

              <article className="panel">
                <div className="panel-head">
                  <h2>Status Mix</h2>
                </div>
                <ul className="list-none p-0 m-0 grid gap-3">
                  <li className="p-3 rounded-xl bg-[#e8f4ee] border border-[#b8dec9]">
                    <p className="m-0 font-semibold text-[#2a7b56]">
                      Completed: {statusBreakdown.completed}
                    </p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#faf6df] border border-[#eadf9e]">
                    <p className="m-0 font-semibold text-[#857111]">
                      In Progress: {statusBreakdown.inProgress}
                    </p>
                  </li>
                  <li className="p-3 rounded-xl bg-[#fde9ef] border border-[#f1bfd0]">
                    <p className="m-0 font-semibold text-[#90415b]">
                      Pending: {statusBreakdown.pending}
                    </p>
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
