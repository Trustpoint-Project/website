import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeContext } from "../components/theme-provider"

// Impression Carousel Component
const ImpressionCarousel = () => {
  const { theme, mounted } = React.useContext(ThemeContext)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)

  // Check if screen is mobile size
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Define all impression images with their theme requirements
  const allImpressions = React.useMemo(() => [
    { src: '/images/impressions/20260107_trustpoint_impression_ca_dark.png', theme: 'dark' },
    { src: '/images/impressions/20260107_trustpoint_impression_ca_light.png', theme: 'light' },
    { src: '/images/impressions/20260107_trustpoint_impression_cmp_dark.png', theme: 'dark' },
    { src: '/images/impressions/20260107_trustpoint_impression_cmp_light.png', theme: 'light' },
    { src: '/images/impressions/20260107_trustpoint_impression_devices_dark.png', theme: 'dark' },
    { src: '/images/impressions/20260107_trustpoint_impression_devices_light.png', theme: 'light' },
    { src: '/images/impressions/20260107_trustpoint_impression_swagger.png', theme: 'both' },
    { src: '/images/impressions/20260107_trustpoint_impression_workflow_dark.png', theme: 'dark' },
    { src: '/images/impressions/20260107_trustpoint_impression_workflow_light.png', theme: 'light' }
  ], [])

  // Filter impressions based on current theme - only after mount to avoid hydration mismatch
  const currentImpressions = React.useMemo(() => {
    if (!mounted) {
      // During SSR and initial render, show all impressions
      return allImpressions
    }
    return allImpressions.filter(impression =>
      impression.theme === 'both' || impression.theme === theme
    )
  }, [theme, mounted, allImpressions])

  // Auto-play functionality
  React.useEffect(() => {
    if (currentImpressions.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === currentImpressions.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [currentImpressions.length])

  const nextImpression = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentImpressions.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImpression = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImpressions.length - 1 : prevIndex - 1
    )
  }

  const goToImpression = (index) => {
    setCurrentIndex(index)
  }

  if (currentImpressions.length === 0) return null

  return (
    <div style={{
      maxWidth: isMobile ? '100%' : '1400px',
      margin: isMobile ? '0' : '0 auto',
      padding: isMobile ? '1rem' : '1rem 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        maxWidth: isMobile ? '100%' : '1300px',
        margin: '0 auto',
        padding: isMobile ? '0' : '0 80px'
      }}>
        {/* Navigation buttons - hidden on mobile */}
        {!isMobile && (
          <button
            onClick={prevImpression}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              zIndex: 20,
              transition: 'all 0.3s ease',
              flexShrink: 0,
              position: 'relative',
              padding: '0',
              color: theme === 'light' ? '#333' : '#fff'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.opacity = '1';
            }}
            aria-label="Previous impression"
          >
            ‹
          </button>
        )}

        {/* Main image display */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '500px'
        }}>
          <img
            src={currentImpressions[currentIndex].src}
            alt={`Trustpoint impression ${currentIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              width: 'auto',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}
          />
        </div>

        {/* Navigation buttons - hidden on mobile */}
        {!isMobile && (
          <button
            onClick={nextImpression}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              fontWeight: 'bold',
              zIndex: 20,
              transition: 'all 0.3s ease',
              flexShrink: 0,
              position: 'relative',
              padding: '0',
              color: theme === 'light' ? '#333' : '#fff'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2)';
              e.target.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.opacity = '1';
            }}
            aria-label="Next impression"
          >
            ›
          </button>
        )}
      </div>

      {/* Dots indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '1rem'
      }}>
        {currentImpressions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImpression(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === currentIndex ? '#007bff' : '#dee2e6',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            aria-label={`Go to impression ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Centralized styles object
const styles = {
  // Hero Section
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
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto'
  },

  // Links Section
  linksSection: {
    padding: '2rem 0',
    backgroundColor: 'var(--bg-secondary)',
    textAlign: 'center'
  },
  linksContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  linksTitle: {
    fontSize: '1.5rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '2rem'
  },
  linksGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap'
  },
  githubButton: {
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
  },
  dockerButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1d63ed',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  docsButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007acc',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  tutorialButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#28a745',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  buttonIcon: {
    width: '20px',
    height: '20px',
    filter: 'brightness(0) invert(1)'
  },

  // Architecture Overview
  architectureSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-primary)'
  },
  architectureContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  architectureTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  architectureText: {
    fontSize: '1.1rem',
    color: 'var(--text-tertiary)',
    textAlign: 'center',
    marginBottom: '3rem',
    lineHeight: '1.7'
  },
  architectureImageContainer: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  architectureImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px'
  },

  // Key Features
  featuresSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-secondary)'
  },
  featuresContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  featuresTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '3rem',
    textAlign: 'center'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  featureTitle: {
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    marginBottom: '1rem'
  },
  featureText: {
    color: 'var(--text-tertiary)',
    lineHeight: '1.6'
  },

  // Problem & Solution
  problemSolutionSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-primary)'
  },
  problemSolutionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  problemSolutionTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '3rem',
    textAlign: 'center'
  },
  problemSolutionSubtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-tertiary)',
    textAlign: 'center',
    marginBottom: '4rem',
    fontStyle: 'italic'
  },
  problemSolutionGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  },
  problemSolutionPair: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    alignItems: 'stretch'
  },
  problemCard: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '2.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #dc3545',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column'
  },
  solutionCard: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '2.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #28a745',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column'
  },
  problemSolutionCardTitle: {
    fontSize: '1.4rem',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    fontWeight: '500'
  },
  problemText: {
    color: 'var(--text-tertiary)',
    lineHeight: '1.6',
    margin: 0,
    fontSize: '1rem'
  },
  solutionText: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: 0,
    fontSize: '1rem'
  },

  // Certificate Fragmentation
  fragmentationSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-secondary)'
  },
  fragmentationContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  fragmentationTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  fragmentationText: {
    fontSize: '1.1rem',
    color: 'var(--text-tertiary)',
    textAlign: 'center',
    marginBottom: '3rem',
    lineHeight: '1.7'
  },

  // Operation Modes
  operationModesSection: {
    padding: '4rem 0',
    backgroundColor: 'var(--bg-primary)'
  },
  operationModesContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  operationModesTitle: {
    fontSize: '2rem',
    fontWeight: '400',
    color: 'var(--text-primary)',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  operationModesText: {
    fontSize: '1.1rem',
    color: 'var(--text-tertiary)',
    textAlign: 'center',
    marginBottom: '3rem',
    lineHeight: '1.7'
  },
  explanationContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  },
  explanationItem: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)'
  },
  explanationTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '1rem'
  },
  explanationText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6'
  }
}

const AboutPage = () => (
  <Layout>
    <Seo
      title="About Trustpoint - Open Source Identity Management"
      description="Learn about Trustpoint, an open-source platform for automated, secure identity management in industrial networks. Discover our mission, team, and approach to industrial IoT security."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, about, open source, identity management, industrial networks, IoT security, digital certificates, PKI, manufacturing security`,
        },
        {
          property: `og:title`,
          content: `About Trustpoint - Open Source Identity Management Platform`,
        },
        {
          property: `og:description`,
          content: `Open-source platform for automated, secure identity management in industrial networks. Learn about our mission and approach to industrial IoT security.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/about`,
        },
        {
          name: `twitter:title`,
          content: `About Trustpoint - Open Source Identity Management`,
        },
        {
          name: `twitter:description`,
          content: `Learn about Trustpoint's mission for secure identity management in industrial networks and IoT environments.`,
        },
      ]}
    />

    {/* Hero Section */}
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        <h1 style={styles.heroTitle}>
          About Trustpoint
        </h1>
        <p style={styles.heroText}>
          Open-source platform for automated, secure identity management in industrial networks.
        </p>
      </div>
    </section>

        {/* Impression Carousel */}
    <section style={{
      padding: '2rem 0',
      backgroundColor: 'var(--bg-primary)',

    }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>

      </div>
      <ImpressionCarousel />
    </section>

    {/* Links Section */}
    <section style={styles.linksSection}>
      <div style={styles.linksContainer}>
        <h2 style={styles.linksTitle}>
          Try it out
        </h2>
        <div style={styles.linksGrid}>
          <a
            href="https://github.com/Trustpoint-Project/trustpoint"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubButton}
          >
            <img
              src="/images/github-mark.svg"
              alt="GitHub"
              style={styles.buttonIcon}
            />
            GitHub
          </a>
          <a
            href="https://hub.docker.com/r/trustpointproject/trustpoint"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.dockerButton}
          >
            <img
              src="/images/docker-mark-blue.svg"
              alt="Docker"
              style={styles.buttonIcon}
            />
            Docker Hub
          </a>
          <a
            href="https://trustpoint.readthedocs.io/en/latest/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.docsButton}
          >
            <img
              src="/images/read-the-docs.svg"
              alt="Read the Docs"
              style={styles.buttonIcon}
            />
            Documentation
          </a>
        </div>
      </div>
    </section>


    {/* Architecture Overview */}
    <section style={styles.architectureSection}>
      <div style={styles.architectureContainer}>
        <h2 style={styles.architectureTitle}>
          Trustpoint Architecture
        </h2>
        <p style={styles.architectureText}>
          Trustpoint provides a comprehensive PKI solution with automated certificate lifecycle management,
          supporting industrial standards and protocols for secure identity management in manufacturing environments.
        </p>
        <div style={styles.architectureImageContainer}>
          <img
            src="/images/trustpoint_architecture_v2.svg"
            alt="Trustpoint Architecture Overview"
            style={styles.architectureImage}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a
            href="/certificate-explainer"
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
          >
            New to PKI, certificates & Co? Learn PKI Fundamentals
          </a>
        </div>
      </div>
    </section>

    {/* Key Features */}
    <section style={styles.featuresSection}>
      <div style={styles.featuresContainer}>
        <h2 style={styles.featuresTitle}>
          Key Features
        </h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Automated Certificate Lifecycle
            </h3>
            <p style={styles.featureText}>
              Complete automation of certificate issuance, renewal, and revocation processes
              to reduce manual errors and operational overhead.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Industrial Protocol Support
            </h3>
            <p style={styles.featureText}>
              Native support for CMP, EST, and REST protocols ensuring seamless integration
              with existing industrial infrastructure.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Flexible Deployment
            </h3>
            <p style={styles.featureText}>
              Deploy as containerized application with Docker support for easy scaling
              and integration into existing environments.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Open Source & Community-Driven
            </h3>
            <p style={styles.featureText}>
              MIT licensed solution built with Python Django, fostering transparency,
              community collaboration, and continuous improvement.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Hardware Security Module Support
            </h3>
            <p style={styles.featureText}>
              PKCS#11 standard integration for enhanced security through Hardware Security
              Module (HSM) support, ensuring cryptographic operations remain protected.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3 style={styles.featureTitle}>
              Advanced Workflow Engine
            </h3>
            <p style={styles.featureText}>
              Comprehensive workflow automation with manual approval processes, webhooks,
              and email notifications for streamlined certificate management operations.
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* Problem & Solution */}
    <section style={styles.problemSolutionSection}>
      <div style={styles.problemSolutionContainer}>
        <h2 style={styles.problemSolutionTitle}>
          Problem & Solution
        </h2>
        <p style={styles.problemSolutionSubtitle}>
          Addressing Industrial Security Challenges with Trustpoint
        </p>

        <div style={styles.problemSolutionGrid}>
          {/* Problem 1 & Solution 1 */}
          <div style={styles.problemSolutionPair}>
            <div style={styles.problemCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Certificate Chaos
              </h3>
              <p style={styles.problemText}>
                Manual certificate provisioning is error-prone and doesn't scale in complex industrial environments.
              </p>
            </div>
            <div style={styles.solutionCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Lifecycle Automation
              </h3>
              <p style={styles.solutionText}>
                Automated certificate lifecycle management for OT devices and systems eliminates manual errors and scales with your infrastructure.
              </p>
            </div>
          </div>

          {/* Problem 2 & Solution 2 */}
          <div style={styles.problemSolutionPair}>
            <div style={styles.problemCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Security Skill Gap
              </h3>
              <p style={styles.problemText}>
                Engineering teams lack time, resources, and expertise to manage secure PKI infrastructure.
              </p>
            </div>
            <div style={styles.solutionCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Flexible Onboarding
              </h3>
              <p style={styles.solutionText}>
                Supports manual, semi-automated, and Zero-Touch onboarding to match your team's capabilities and operational requirements.
              </p>
            </div>
          </div>

          {/* Problem 3 & Solution 3 */}
          <div style={styles.problemSolutionPair}>
            <div style={styles.problemCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Vendor Lock-In
              </h3>
              <p style={styles.problemText}>
                Existing solutions are often proprietary, costly, or not designed for industrial OT environments.
              </p>
            </div>
            <div style={styles.solutionCard}>
              <h3 style={styles.problemSolutionCardTitle}>
                Open Core
              </h3>
              <p style={styles.solutionText}>
                OSS foundation provides flexibility without vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

       {/* Certificate Fragmentation */}
    <section style={styles.fragmentationSection}>
      <div style={styles.fragmentationContainer}>
        <h2 style={styles.fragmentationTitle}>
          Certificate Fragmentation Challenge
        </h2>
        <p style={styles.fragmentationText}>
          Industrial environments face complex certificate management challenges where multiple parties
          and systems need to coordinate secure identity management across diverse infrastructure components.
        </p>
        <div style={styles.architectureImageContainer}>
          <img
            src="/images/certificate_fragmentation.svg"
            alt="Certificate Fragmentation in Industrial Environments"
            style={styles.architectureImage}
          />
        </div>
      </div>
    </section>

    {/* Operation Modes */}
    <section style={styles.operationModesSection}>
      <div style={styles.operationModesContainer}>
        <h2 style={styles.operationModesTitle}>
          Operation Modes
        </h2>
        <p style={styles.operationModesText}>
          Trustpoint supports flexible deployment models to meet diverse industrial requirements,
          offering both Registration Authority (RA) and Certificate Authority (CA) operational capabilities.
        </p>
        <div style={styles.architectureImageContainer}>
          <img
            src="/images/operation_modes.svg"
            alt="Trustpoint Operation Modes - RA and CA"
            style={styles.architectureImage}
          />
        </div>
        <div style={styles.explanationContainer}>
          <div style={styles.explanationItem}>
            <h3 style={styles.explanationTitle}>Registration Authority (RA)</h3>
            <p style={styles.explanationText}>
              The RA handles certificate requests from devices and users, performing identity validation,
              policy enforcement, and initial approval before forwarding requests to the CA for issuance.
            </p>
          </div>
          <div style={styles.explanationItem}>
            <h3 style={styles.explanationTitle}>Certificate Authority (CA)</h3>
            <p style={styles.explanationText}>
              The CA is responsible for generating, signing, and issuing digital certificates,
              maintaining the certificate revocation list (CRL), and ensuring the overall security of the PKI infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default AboutPage
