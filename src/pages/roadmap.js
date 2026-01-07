import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Custom releases component showing releases in GitHub style
const TrustpointReleases = () => {
  const releases = [
    {
      version: 'v0.5.0',
      title: 'Development Roadmap',
      date: 'Future',
      features: [
        'PKCS#11 Support – enables secure key storage and cryptographic operations using hardware security modules (HSMs).',
        'Signing Authority (Hash and Sign) – introduces a service for external signing requests, supporting hash-and-sign operations.',
        'Workflow Engine – adds customizable workflows with E-Mail notifications and webhook integrations for event-driven automation.',
        'Registration Authority (RA) Functionality – extends Trustpoint to operate as a dedicated RA for validation and approval processes.',
        'Enhanced CMP Functionalities – adds support for certificate revocation, extended request handling, and compliance with RFC standards.',
        'Refactored Request Workflow – unifies and improves handling of CMP, EST, and REST requests for better reliability and scalability.',
      ]
    },
    {
      version: 'v0.4.0',
      title: 'Beta Release V0.4.0',
      date: '12/2025',
      features: [
        'Workflow engine with approvals, webhooks, and notifications – introduced structured workflows to support controlled and auditable trust processes',
        'REST API based on Django REST Framework – added programmatic access for automation and external integrations.',
        'PKCS#11 support with SoftHSM integration – introduced experimental HSM-based cryptographic operations using the PKCS#11 interface.',
        'Signing application and hash-based signing – enabled signing workflows for external data using hash-and-sign mechanisms.',
        'Configurable certificate profiles – introduced standardized and customizable certificate profile definitions (initial implementation).',
        'Certificate profile integration into request workflows – integrated certificate profiles into certificate request processing (work in progress).',
        'Extended signer creation – enabled signer creation during domain and device onboarding.',
        'Help pages refactor – improved structure and clarity of in-application help content.',
        'Certificate lifecycle management UX optimization – refined workflows for issuing, renewing, and managing certificates.',
        'Certificate detail access improvements – detailed issuing CA information is now accessible from domain tables.',
        'Management App TLS certificate generation and selection – improved handling and configuration of TLS certificates.',
        'Dashboard updates – visual and functional improvements to dashboard views.',
        'Improved request pipelines for CMP and EST – more robust and consistent certificate request handling.',
        'UI layout improvements – multiple layout and consistency improvements across the user interface.',
        'Documentation updates – improvements to README and general documentation.',
        'Code quality and security improvements – continued alignment with Ruff, MyPy, unit testing, and OpenSSF best practices.',
        '71% unit test coverage – 2,425 test cases implemented, with ongoing efforts to increase coverage.'
      ]
    },
    {
      version: 'v0.3.0',
      title: 'Beta Release V0.3.0',
      date: '9/2025',
      features: [
        'Stabilisation and code quality improvements – addressing linting, typing (Ruff, MyPy), imports, documentation and overall maintainability.',
        'Docker/Deployment/CI improvements – ensuring smoother container orchestration, compose actions, manual builds and versioning.',
        'Backup and restore support for Docker environments enables reliable configuration migration and updates.',
        'Feature enhancements/bug fixes, including OPC UA GDS support, certificate model updates, UI fixes and domain relation improvements.',
        'CycloneDX and SPDX SBOMs: Trustpoint now provides a software bill of materials for improved transparency and compliance.',
        'Notifications have been refactored to provide more structured notifications, enhanced help/support views and UI fixes in management, settings and logging.',
        'Zero-touch onboarding with AOKI: added support for EST and CMP to enable automated onboarding.',
        'Granular protocol enabling per device allows finer control of enabled protocols.',
        'Auto-generation of local root CA and issuing CA simplifies setup and testing.',
        'Docker and GitHub Actions/workflows have been improved to enhance build, tagging and manual compose processes.',
        'Improved help pages for certificate lifecycle management – clearer guidance and documentation for issuing and renewing certificates.'
      ]
    },
    {
      version: 'v0.2.0',
      title: 'Beta Release V0.2.0',
      date: '3/2025',
      features: [
        'Setup wizard & improved onboarding – introduced an initial setup assistant and streamlined onboarding workflows for easier first-time configuration.',
        'Remote credential download (browser onboarding) – enabled users to securely download credentials directly via the browser onboarding process.',
        'Credential revocation (CRL) & security fixes – added certificate revocation list generation and multiple security-related improvements.',
        'Major code & onboarding refactor – significant restructuring of onboarding logic and core components for stability and maintainability.',
        'Docker & startup improvements; moved to uv – optimized container startup, reduced image complexity, and transitioned to the uv runtime for better performance.',
        'Enhanced testing & demo data – expanded test coverage, added demo datasets, PostgreSQL support, and new signature suites for testing.',
        'Key dependency updates – upgraded to Django 5.1.5, cryptography v44, and other critical libraries for compatibility and security.',
        'Enrollment over Secure Transport (EST) endpoint – introduced EST support as an additional enrollment method.'
      ]
    },
    {
      version: 'v0.1.0',
      title: 'Beta Release V0.1.0',
      date: '11/2024',
      features: [
        'Trustpoint Stack as a web-based application – introduced the foundational Trustpoint platform accessible via web interface.',
        'User-Driven Onboarding – implemented guided onboarding workflows for users to register and enroll devices or credentials.',
        'Trustpoint Client – added client-side tooling for certificate enrollment and management.',
        'Browser-Based Onboarding – enabled users to perform onboarding directly through a web browser.',
        'Local Issuing CA – provided built-in certificate authority functionality for issuing and managing local certificates.',
        'Trust Store Management – introduced management of trusted root and issuing certificates.',
        'Certificate Management Protocol (CMP) Endpoint – implemented CMP endpoint for standard-based certificate enrollment.',
        'Published under MIT License – made the project open source under the MIT license.'
      ]
    }
  ]

  return (
    <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
      {/* GitHub Releases Link */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a
          href="https://github.com/Trustpoint-Project/trustpoint/releases"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--bg-tertiary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            fontSize: '0.9rem',
            transition: 'background-color 0.2s ease'
          }}
        >
          📦 View All Releases on GitHub →
        </a>
      </div>

      {/* Release List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {releases.map((release, index) => (
          <div key={release.version} style={{
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-primary)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            {/* Release Header */}
            <div style={{
              padding: '1.5rem 2rem',
              backgroundColor: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  backgroundColor: index === 0 ? '#ffd33d' : index === 1 ? '#28a745' : 'var(--text-secondary)',
                  color: index === 0 ? '#000' : 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {release.version}
                </span>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)'
                }}>
                  {release.title}
                </h3>
              </div>
              <span style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                backgroundColor: index === 0 ? '#fff3cd' : index === 1 ? '#e6ffed' : 'var(--bg-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '3px',
                fontWeight: '500'
              }}>
                {release.date}
              </span>
            </div>

            {/* Release Features */}
            <div style={{ padding: '1.5rem 2rem' }}>
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: 'none'
              }}>
                {release.features.map((feature, featureIndex) => {
                  const [title, description] = feature.split(' – ')
                  return (
                    <li key={featureIndex} style={{
                      padding: '0.5rem 0',
                      borderBottom: featureIndex < release.features.length - 1 ? '1px solid var(--bg-secondary)' : 'none',
                      color: 'var(--text-primary)',
                      lineHeight: '1.5'
                    }}>
                      <strong>{title}</strong>{description ? ` – ${description}` : ''}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Reusable style objects
const styles = {
  heroSection: {
    padding: '4rem 0',
    textAlign: 'center',
    backgroundColor: 'var(--bg-primary)'
  },
  heroContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  },
  heroText: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto'
  },
  releasesSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-secondary)'
  },
  releasesContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  releasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem'
  },
  releaseCard: {
    backgroundColor: 'var(--bg-primary)',
    padding: '2.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)'
  },
  releaseTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
    borderBottom: '2px solid var(--brand-primary)',
    paddingBottom: '0.5rem'
  },
  releaseDate: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    marginBottom: '1.5rem'
  },
  featureList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  featureItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--bg-secondary)',
    color: 'var(--text-tertiary)',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  featureItemLast: {
    padding: '0.5rem 0',
    color: 'var(--text-tertiary)',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  v03Card: {
    gridColumn: '1 / -1'
  },
  v03Grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  }
}

const RoadmapPage = () => (
  <Layout>
    <Seo
      title="Trustpoint Roadmap - Development Releases & Future Features"
      description="Explore Trustpoint's development roadmap, recent releases, and upcoming features. Track our progress on PKCS#11 support, signing authority, workflow engine, and more."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, roadmap, development, releases, features, PKCS#11, signing authority, workflow engine, CMP, EST, REST, open source`,
        },
        {
          property: `og:title`,
          content: `Trustpoint Development Roadmap & Releases`,
        },
        {
          property: `og:description`,
          content: `Track Trustpoint's development progress, recent releases, and upcoming features including PKCS#11 support and workflow automation.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/roadmap`,
        },
        {
          name: `twitter:title`,
          content: `Trustpoint Roadmap & Releases`,
        },
        {
          name: `twitter:description`,
          content: `Explore Trustpoint's development roadmap and track upcoming features for our open-source PKI platform.`,
        },
      ]}
    />

    {/* Recent Releases with LinkedIn Updates */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Recent Releases
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Stay updated with our latest releases and announcements
        </p>
        <TrustpointReleases />
      </div>
    </section>

  </Layout>
)

export default RoadmapPage
