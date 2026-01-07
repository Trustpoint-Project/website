import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404 - Page Not Found | Trustpoint"
      description="Sorry, the page you're looking for doesn't exist. Return to the Trustpoint homepage or contact us for help with our open-source PKI platform."
      meta={[
        {
          name: `robots`,
          content: `noindex, nofollow`,
        },
      ]}
    />
    <section style={{
      padding: '4rem 0',
      textAlign: 'center',
      backgroundColor: 'var(--bg-primary)',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: '300',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          lineHeight: '1'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--link-color)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--link-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--link-color)'}
          >
            Go Home
          </a>
          <a
            href="mailto:trustpoint@campus-schwarzwald.de"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              border: '2px solid var(--text-secondary)',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--link-color)';
              e.target.style.borderColor = 'var(--link-color)';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = 'var(--text-secondary)';
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
