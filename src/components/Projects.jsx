import React, { useState, useEffect } from 'react';
import { projects, projectCategories } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('#projects .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <span className="section-label reveal">Portfolio</span>
        <h2 className="section-title reveal">
          Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
        </h2>
        <p className="section-subtitle reveal" style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto 2rem' }}>
          A curated selection of projects showcasing my expertise in full-stack development,
          data engineering, and innovative problem-solving.
        </p>

        {/* Filter Buttons */}
        <div className="project-filters reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn${activeFilter === category ? ' active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const visibleTags = project.tags ? project.tags.slice(0, 4) : [];
            const remainingCount = project.tags ? project.tags.length - 4 : 0;

            return (
              <div className="card project-card reveal" key={project.id || project.title}>
                {/* Top Accent Bar */}
                <div
                  style={{
                    height: '3px',
                    background: project.accentColor || 'var(--accent)',
                    borderRadius: '4px 4px 0 0',
                  }}
                />

                {/* Image Section */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  )}
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    }}
                  />

                  {/* Category Badge */}
                  {project.category && (
                    <span
                      className="project-badge"
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: project.accentColor || 'var(--accent)',
                        color: '#000',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {project.category}
                    </span>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <span
                      className="project-badge featured-badge"
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: 'var(--yellow)',
                        color: '#000',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                    >
                      <StarIcon />
                      Featured
                    </span>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>
                    {project.title}
                  </h3>
                  <p
                    className="line-clamp-3"
                    style={{
                      fontSize: '0.85rem',
                      opacity: 0.7,
                      margin: '0 0 1rem 0',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          opacity: 0.8,
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          opacity: 0.8,
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                    <TagIcon />
                    {visibleTags.map((tag, index) => (
                      <span
                        key={index}
                        className="project-tag"
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          opacity: 0.8,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span
                        className="project-tag"
                        style={{
                          fontSize: '0.7rem',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          fontWeight: 600,
                        }}
                      >
                        +{remainingCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
