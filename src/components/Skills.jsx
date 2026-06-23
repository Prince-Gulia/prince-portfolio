import React, { useEffect, useRef } from 'react';
import { skills } from '../data/portfolioData';

const categoryIcons = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const defaultIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const getDotIcon = (color) => (
  <span style={{
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: color || 'var(--accent)',
    marginRight: '6px'
  }} />
);

function Skills() {
  const sectionRef = useRef(null);

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

    const revealElements = document.querySelectorAll('#skills .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <span className="section-label reveal">Skills</span>
        <h2 className="section-title reveal">
          Professional <span style={{ color: 'var(--accent)' }}>Skills</span>
        </h2>
        <p className="section-subtitle reveal" style={{ opacity: 0.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
          Technologies I work with daily — from frontend to AI/ML pipelines.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem' }} className="reveal">
          {skills.map((category, catIndex) => (
            <div className="card" key={catIndex} style={{ padding: '2rem' }}>
              
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  {categoryIcons[category.icon] || defaultIcon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{category.category}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: 'JetBrains Mono' }}>
                    {category.items.length} skills
                  </span>
                </div>
              </div>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '99px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-2)'
                  }}>
                    {getDotIcon(skill.color)}
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Detail Progress bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: skill.color || 'var(--accent)' }} />
                        {skill.name}
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>
                        <span style={{ opacity: 0.5, backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                          {skill.level}
                        </span>
                        <span style={{ color: skill.color || 'var(--accent)', fontWeight: 700 }}>{skill.percentage}%</span>
                      </div>
                    </div>
                    {/* Bar container */}
                    <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '99px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color || 'var(--accent)',
                        borderRadius: '99px',
                        transition: 'width 1s ease'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
