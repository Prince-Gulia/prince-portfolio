import { useState, useEffect, useRef } from 'react'
import { personalInfo, stats, roles } from '../data/portfolioData'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Reveal animation with IntersectionObserver
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    if (!reveals.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-left reveal">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="mono">~/prince/portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m{' '}
            <span className="accent mono">{personalInfo.name}</span>
          </h1>

          <div className="hero-typewriter">
            <span className="mono">{displayText}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="hero-description">{personalInfo.description}</p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{personalInfo.location}</span>
            </div>
            <div className="hero-meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <span>{personalInfo.email}</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-status-dot" />
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <span>View Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </button>
            <a
              className="btn btn-outline"
              href={personalInfo.resumeUrl}
              download="Prince_Gulia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-right reveal">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring">
              <div
                className="hero-avatar-inner"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--teal))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '4rem',
                    fontWeight: 800,
                    fontFamily: "'JetBrains Mono'",
                    color: '#111',
                  }}
                >
                  PG
                </span>
              </div>
            </div>
            <div className="hero-float-badge hero-float-badge-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19h8" />
                <path d="m4 17 6-6-6-6" />
              </svg>
              <span>Backend Dev</span>
            </div>
            <div className="hero-float-badge hero-float-badge-bottom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19h8" />
                <path d="m4 17 6-6-6-6" />
              </svg>
              <span>AI/RAG</span>
            </div>
          </div>

          <div className="hero-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat-card">
                <span className="hero-stat-value mono">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="hero-scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
