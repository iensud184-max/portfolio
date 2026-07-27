import { useMemo, useState } from "react";
import worksProjects from "./worksData";
import "./WorksMockup.css";
import "./WorksSection.css";

function WorksSection() {
  const [activeProjectId, setActiveProjectId] = useState(worksProjects[0].id);

  const activeProject = useMemo(
    () =>
      worksProjects.find((project) => project.id === activeProjectId) ??
      worksProjects[0],
    [activeProjectId],
  );

  return (
    <section className="works-page" aria-labelledby="works-title">
      <div className="works-visual" aria-hidden="true">
        <div className="desktop-mockup">
          <div className="desktop-bar">
            <span />
            <span />
            <span />
          </div>
          <div className={`mockup-screen${activeProject.previewFit === "contain" ? " is-contain" : ""}`}>
            <img src={activeProject.previewImage} alt={activeProject.previewAlt} />
          </div>
        </div>
      </div>

      <div className="works-panel">
        <h2 id="works-title" className="works-title">
          WORKS
        </h2>

        <nav className="project-tabs" aria-label="Project list">
          {worksProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`project-tab${
                project.id === activeProject.id ? " is-active" : ""
              }`}
              aria-pressed={project.id === activeProject.id}
              onClick={() => setActiveProjectId(project.id)}
            >
              {project.tab}
            </button>
          ))}
        </nav>

        <article className="project-detail" key={activeProject.id}>
          <p className="project-number">0{activeProject.id}</p>
          <h3>{activeProject.title}</h3>
          <p className="project-period">{activeProject.period}</p>
          <p className="project-summary">{activeProject.summary}</p>

          <ul className="project-tags" aria-label={`${activeProject.title} stack`}>
            {activeProject.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="project-actions">
            {activeProject.liveLinks.map((liveLink) => (
              <a key={liveLink.url} href={liveLink.url} target="_blank" rel="noreferrer">
                {liveLink.label}
              </a>
            ))}
            {activeProject.sourceUrl && (
              <a href={activeProject.sourceUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default WorksSection;
