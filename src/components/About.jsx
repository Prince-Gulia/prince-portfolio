import React, { useEffect } from 'react';
import { personalInfo, education, highlights, stats, achievements, certifications } from '../data/portfolioData';

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--teal)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const LightbulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--yellow)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--green)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--yellow)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '8px', flexShrink: 0, marginTop: '2px' }}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--teal)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '8px' }}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--teal)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: 'var(--teal)', flexShrink: 0, marginTop: '2px' }}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CertificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--accent)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '8px' }}
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const tags = [
  { label: 'Development', icon: <CodeIcon /> },
  { label: 'Data Science', icon: <DatabaseIcon /> },
  { label: 'Innovation', icon: <LightbulbIcon /> },
  { label: 'Excellence', icon: <ShieldIcon /> },
];

function About() {
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

    const revealElements = document.querySelectorAll('#about .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const getStatColor = (color) => {
    if (color === 'accent') return 'var(--accent)';
    if (color === 'teal') return 'var(--teal)';
    return 'var(--accent)';
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* MAIN ABOUT */}
        <span className="section-label reveal">About Me</span>
        <h2 className="section-title reveal">
          Crafting Solutions with{' '}
          <span style={{ color: 'var(--accent)' }}>Data-Driven Insights</span>
        </h2>

        <div className="about-grid" style={{ marginBottom: '5rem' }}>
          {/* LEFT COLUMN */}
          <div className="card reveal" style={{ padding: '2rem' }}>
            <p className="about-text">{personalInfo.description}</p>

            <ul className="about-highlights" style={{ listStyle: 'none', padding: 0 }}>
              {highlights.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <ChevronRightIcon />
                  <span style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="about-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
              {tags.map((tag, index) => (
                <span className="about-tag" key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.85rem', backgroundColor: 'var(--elevated)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.85rem' }}>
                  {tag.icon}
                  <span style={{ color: 'var(--text-2)' }}>{tag.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-sidebar">
            {/* Stats Card */}
            <div className="card reveal" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem', opacity: 0.7, fontFamily: 'JetBrains Mono' }}>
                by the numbers
              </h3>
              <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {stats.map((stat, index) => (
                  <div className="about-stat" key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: getStatColor(stat.color) }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.7, textAlign: 'center', marginTop: '0.25rem', color: 'var(--text-3)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Banner */}
            <div className="about-available-banner reveal" style={{ backgroundColor: 'rgba(34, 197, 94, 0.05)', borderLeft: '3px solid var(--green)', borderRadius: '12px', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--green)',
                    display: 'inline-block',
                  }}
                />
                <strong style={{ fontSize: '0.9rem', color: 'var(--green)' }}>Available for Opportunities</strong>
              </div>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0, color: 'var(--text-2)' }}>
                Actively exploring roles, freelance &amp; collaborations
              </p>
            </div>

            {/* Education Card (Simplified preview) */}
            <div className="card reveal" style={{ padding: '1.25rem', borderLeft: '3px solid var(--accent)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span role="img" aria-label="education" style={{ fontSize: '1.1rem' }}>🎓</span>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, fontFamily: 'JetBrains Mono', color: 'var(--text-3)' }}>
                  Education
                </span>
              </div>
              <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>{education.degree}</h4>
              <p style={{ color: 'var(--accent)', margin: '0 0 0.25rem 0', fontSize: '0.85rem', fontWeight: 600 }}>
                {education.university} &middot; {education.years}
              </p>
              <p style={{ color: 'var(--green)', margin: 0, fontSize: '0.85rem', fontWeight: 700 }}>
                GPA: {education.gpa}
              </p>
            </div>
          </div>
        </div>


        {/* ACADEMIC JOURNEY SECTION */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ height: '1px', width: '40px', backgroundColor: 'var(--accent)', opacity: 0.5 }}></span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Education & Learning
            </span>
            <span style={{ height: '1px', width: '40px', backgroundColor: 'var(--accent)', opacity: 0.5 }}></span>
          </div>
        </div>
        <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Academic <span style={{ color: 'var(--accent)' }}>Journey</span>
        </h2>

        <div className="about-grid reveal" style={{ marginBottom: '5rem' }}>
          {/* LEFT COLUMN: DEGREE & PROGRESS */}
          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>{education.degree}</h3>
                <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--green)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '0.25rem 0.65rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>
                  {education.status}
                </span>
              </div>
              <p style={{ color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{education.years}</p>
              <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{education.university}</p>
              <p style={{ color: 'var(--green)', fontSize: '0.95rem', fontWeight: 700 }}>GPA: {education.gpa}</p>
            </div>

            {/* Progress Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                <span style={{ color: 'var(--text-3)' }}>Academic Progress</span>
                <span style={{ color: 'var(--accent)' }}>{education.progress}%</span>
              </div>
              <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${education.progress}%`, backgroundColor: 'var(--accent)', borderRadius: '99px', transition: 'width 1s ease' }}></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: COURSEWORK */}
          <div className="card" style={{ padding: '2rem', border: '1px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <BookOpenIcon />
              Key Coursework
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {education.coursework.map((course, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircleIcon />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-2)' }}>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* PROFESSIONAL CERTIFICATIONS SECTION */}
        {certifications && certifications.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }} className="reveal">
              <CertificationIcon />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Professional Certifications
              </h3>
            </div>

            <div className="skills-grid reveal">
              {certifications.map((cert, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => cert.credentialUrl && window.open(cert.credentialUrl, '_blank')}
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    cursor: cert.credentialUrl ? 'pointer' : 'default'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text)' }}>
                      {cert.title}
                    </h4>
                    <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--green)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                      {cert.year}
                    </span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>
                    {cert.provider}
                  </p>
                  <p style={{ color: 'var(--text-3)', fontSize: '0.8rem', margin: 0, lineHeight: 1.4 }}>
                    {cert.description}
                  </p>
                  {cert.credentialUrl && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 600, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      View Certificate
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default About;
