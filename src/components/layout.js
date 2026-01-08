import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { ThemeContext } from "./theme-provider"

import "../styles/theme.css"

const Layout = ({ children }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Check if screen is mobile size
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      <header style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px var(--shadow-light)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            transition: 'color 0.3s ease'
          }}>
            <Link
              to="/"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.3s ease'
              }}
            >
              <img
                src={theme === 'dark' ? "/logos/trustpoint_logo_horizontal_inverted.svg" : "/logos/trustpoint_logo_horizontal_main.svg"}
                alt="Trustpoint"
                style={{
                  height: '40px',
                  width: 'auto',
                  transition: 'filter 0.3s ease'
                }}
              />
            </Link>
          </h1>
          
          {/* Conditionally render burger menu or desktop navigation */}
          {isMobile ? (
            /* Burger Menu Button - Mobile Only */
            <button
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '0.5rem',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                zIndex: 101
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          ) : (
            /* Desktop Navigation */
            <nav style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <Link
                to="/"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                activeStyle={{
                  color: 'var(--link-color)',
                  borderBottomColor: 'var(--link-color)'
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                activeStyle={{
                  color: 'var(--link-color)',
                  borderBottomColor: 'var(--link-color)'
                }}
              >
                About
              </Link>
              <Link
                to="/roadmap"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                activeStyle={{
                  color: 'var(--link-color)',
                  borderBottomColor: 'var(--link-color)'
                }}
              >
                Roadmap
              </Link>
              <Link
                to="/resources"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '0.5rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.2s ease'
                }}
                activeStyle={{
                  color: 'var(--link-color)',
                  borderBottomColor: 'var(--link-color)'
                }}
              >
                Resources
              </Link>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                <a
                  href="https://github.com/Trustpoint-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#24292e',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'background-color 0.2s'
                  }}
                >
                  <img
                    src="/images/github-mark.svg"
                    alt="GitHub"
                    style={{
                      width: '20px',
                      height: '20px',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                  GitHub
                </a>
              </div>
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <svg
                  id={theme === 'light' ? 'moon' : 'sun'}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {theme === 'light' ? (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </>
                  )}
                </svg>
              </button>
            </nav>
          )}
          
          {/* Mobile Menu Overlay - Only render on mobile */}
          {isMobile && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--bg-primary)',
                zIndex: 99,
                display: isMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
              }}
              className="mobile-menu"
            >
            <Link
              to="/"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.5rem',
                padding: '1rem 0',
                margin: '0.5rem 0',
                transition: 'color 0.2s ease'
              }}
              activeStyle={{
                color: 'var(--link-color)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.5rem',
                padding: '1rem 0',
                margin: '0.5rem 0',
                transition: 'color 0.2s ease'
              }}
              activeStyle={{
                color: 'var(--link-color)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/roadmap"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.5rem',
                padding: '1rem 0',
                margin: '0.5rem 0',
                transition: 'color 0.2s ease'
              }}
              activeStyle={{
                color: 'var(--link-color)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              to="/resources"
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1.5rem',
                padding: '1rem 0',
                margin: '0.5rem 0',
                transition: 'color 0.2s ease'
              }}
              activeStyle={{
                color: 'var(--link-color)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <a
              href="https://github.com/Trustpoint-Project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#24292e',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="/images/github-mark.svg"
                alt="GitHub"
                style={{
                  width: '20px',
                  height: '20px',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              GitHub
            </a>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '1rem',
                margin: '0.5rem 0',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <svg
                id={theme === 'light' ? 'moon' : 'sun'}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {theme === 'light' ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                ) : (
                  <>
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </>
                )}
              </svg> Theme
            </button>
          </div>
          )}
        </div>
      </header>
      <div style={{
        minHeight: 'calc(100vh - 80px)' // Account for header height
      }}>
        <main>{children}</main>
      </div>
      <footer style={{
        backgroundColor: 'var(--footer-bg)',
        borderTop: '1px solid var(--border-color)',
        padding: '2rem 0',
        marginTop: '4rem',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            transition: 'color 0.3s ease'
          }}>
            <img
              src="/logos/trustpoint_logo_horizontal_inverted.svg"
              alt="Trustpoint"
              style={{
                height: '30px',
                width: 'auto',
                transition: 'filter 0.3s ease'
              }}
            />
            <span>© {new Date().getFullYear()} Trustpoint · Campus Schwarzwald</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}
          className="footer-grid"
          >
            {/* Project Column */}
            <div>
              <h4 style={{
                color: 'var(--footer-text)',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                marginTop: '0'
              }}>
                Project
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <Link
                  to="/"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  About
                </Link>
                <Link
                  to="/roadmap"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Roadmap
                </Link>
                <Link
                  to="/resources"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Resources
                </Link>
                <Link
                  to="/team"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Team
                </Link>
                <Link
                  to="/brand"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Brand
                </Link>
                <Link
                  to="/success"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Success Stories
                </Link>
                <a
                  href="https://github.com/Trustpoint-Project/trustpoint/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Security Policy
                </a>
                <a
                  href="https://github.com/Trustpoint-Project/trustpoint/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  License
                </a>
              </nav>
            </div>

            {/* Community Column */}
            <div>
              <h4 style={{
                color: 'var(--footer-text)',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                marginTop: '0'
              }}>
                Community
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a
                  href="https://trustpoint.readthedocs.io/en/latest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/Trustpoint-Project/trustpoint/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Github Discussions
                </a>
                <a
                  href="https://hub.docker.com/r/trustpointproject/trustpoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Docker Hub
                </a>
                <a
                  href="https://github.com/Trustpoint-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  GitHub
                </a>
              </nav>
            </div>

            {/* Company Column */}
            <div>
              <h4 style={{
                color: 'var(--footer-text)',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                marginTop: '0'
              }}>
                Company
              </h4>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a
                  href="mailto:trustpoint@campus-schwarzwald.de"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    padding: '0.25rem 0.75rem',
                    border: '1px solid var(--footer-text)',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    width: 'fit-content'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--link-color)';
                    e.target.style.borderColor = 'var(--link-color)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'var(--footer-text)';
                    e.target.style.color = 'var(--footer-text)';
                  }}
                >
                  Contact
                </a>
                <a
                  href="https://www.campus-schwarzwald.de/datenschutz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Privacy
                </a>
                <a
                  href="https://www.campus-schwarzwald.de/impressum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--footer-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                >
                  Imprint
                </a>
              </nav>
            </div>

            {!isMobile && (
              <div>
                <h4 style={{
                  color: 'var(--footer-text)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  marginTop: '0'
                }}>
                  Connect
                </h4>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center'
                }}>
                  <a
                    href="https://github.com/Trustpoint-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--footer-text)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    aria-label="GitHub"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/99494956"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--footer-text)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    aria-label="LinkedIn"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@Trustpoint-oss"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--footer-text)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    aria-label="YouTube"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/FnVDcYJT"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--footer-text)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    aria-label="Discord"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
      {isMobile && (
        <div style={{
          backgroundColor: 'var(--footer-bg)',
          padding: '1rem 2rem',
          borderTop: '1px solid var(--footer-border)',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <a
            href="https://github.com/Trustpoint-Project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--footer-text)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/99494956"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--footer-text)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Trustpoint-oss"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--footer-text)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://discord.gg/FnVDcYJT"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--footer-text)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            aria-label="Discord"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
          </a>
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
