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
          alignItems: 'center',
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
          <nav style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
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
                backgroundColor: 'transparent'
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
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
