import * as React from "react"

const CookieConsent = () => {
  const [showBanner, setShowBanner] = React.useState(false)
  const [preferences, setPreferences] = React.useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  })

  React.useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      // Apply saved preferences
      applyCookiePreferences(savedPreferences)
    }
  }, [])

  const applyCookiePreferences = (prefs) => {
    // Enable/disable analytics based on preferences
    if (prefs.analytics && window.gtag) {
      // Enable Google Analytics
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    } else if (window.gtag) {
      // Disable Google Analytics
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }

    // Handle marketing cookies
    if (prefs.marketing && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted'
      })
    } else if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied'
      })
    }
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setPreferences(allAccepted)
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
    applyCookiePreferences(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setPreferences(necessaryOnly)
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly))
    applyCookiePreferences(necessaryOnly)
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    applyCookiePreferences(preferences)
    setShowBanner(false)
  }

  const handlePreferenceChange = (type, value) => {
    if (type === 'necessary') return // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }))
  }

  if (!showBanner) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '1.5rem',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      fontSize: '0.9rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'var(--text-primary)'
          }}>
            Cookie Settings
          </h3>
          <p style={{
            margin: 0,
            color: 'var(--text-secondary)',
            lineHeight: '1.5'
          }}>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              cursor: 'not-allowed'
            }}>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                style={{ cursor: 'not-allowed' }}
              />
              Necessary Cookies
            </label>
            <p style={{
              margin: '0.25rem 0 0 0',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              Required for the website to function properly.
            </p>
          </div>

          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                style={{ cursor: 'pointer' }}
              />
              Analytics Cookies
            </label>
            <p style={{
              margin: '0.25rem 0 0 0',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              Help us understand how visitors interact with our website.
            </p>
          </div>

          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                style={{ cursor: 'pointer' }}
              />
              Marketing Cookies
            </label>
            <p style={{
              margin: '0.25rem 0 0 0',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              Used to deliver personalized advertisements.
            </p>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'flex-end',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={acceptNecessaryOnly}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--text-secondary)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--text-secondary)'
              e.target.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--text-secondary)'
            }}
          >
            Necessary Only
          </button>
          <button
            onClick={savePreferences}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--text-secondary)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--text-secondary)'
              e.target.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = 'var(--text-secondary)'
            }}
          >
            Save Preferences
          </button>
          <button
            onClick={acceptAll}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--link-color)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--link-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--link-color)'}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
