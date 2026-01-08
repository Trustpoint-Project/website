import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Value Proposition Tabs Component
const ValuePropositionTabs = () => {
  const [activeTab, setActiveTab] = React.useState('manufacturers')
  const [hoveredTab, setHoveredTab] = React.useState(null)

  const valueProps = {
    manufacturers: {
      title: 'Device Manufacturers',
      benefits: [
        'Embed certificate and identity management directly into your products',
        'Offer secure onboarding as a built-in product capability',
        'Extend existing device management solutions with standards-based PKI',
        'Support secure operation across factory, field, and service phases',
        'Reduce support cases caused by certificate failures or misconfiguration',
        'Avoid vendor lock-in while remaining compatible with customer infrastructures'
      ],
      description:
        'Trustpoint can be integrated into devices, machines, or management platforms to provide built-in certificate and identity management. Manufacturers can offer a standards-based security foundation that supports onboarding, operation, service, and reuse across the full product lifecycle—without binding customers to proprietary or cloud-only infrastructures.'
    },

    integrators: {
      title: 'System Integrators',
      benefits: [
        'Remotely manage certificates in segmented and air-gapped OT networks',
        'Standardize secure onboarding across vendors, machines, and plants',
        'Operate PKI-based security without permanent IT or cloud connectivity',
        'Reduce project risk from manual or ad-hoc certificate handling',
        'Reuse proven onboarding and lifecycle patterns across projects',
        'Deliver compliant security architectures without deep PKI expertise'
      ],
      description:
        'Trustpoint enables system integrators to centrally manage device identities and certificates even in restricted or offline industrial environments. By combining user-driven and automated onboarding with lifecycle management, integrators can securely operate and maintain OT infrastructures while respecting real-world network constraints.'
    },

    operators: {
      title: 'Operators',
      benefits: [
        'Operate secure machine identities with minimal operational effort',
        'Prevent downtime caused by expired or unmanaged certificates',
        'Maintain control over identities across vendors and service providers',
        'Support commissioning, maintenance, and decommissioning workflows',
        'Improve visibility and auditability of machine identities',
        'Support compliance with IEC 62443, NIS2, and future regulations'
      ],
      description:
        'Trustpoint helps operators securely manage machine identities throughout the entire lifecycle—from commissioning to decommissioning. Designed for industrial environments, it reduces operational risk while remaining usable in segmented, offline, and multi-vendor OT networks.'
    }
  };

  const getButtonStyle = (key) => ({
    padding: '1rem 2rem',
    border: activeTab === key ? '2px solid var(--accent-primary)' : '2px solid var(--border-color)',
    borderRadius: '8px',
    backgroundColor: activeTab === key ? '#004aad' : 'var(--bg-primary)',
    color: activeTab === key ? '#ffffff' : 'var(--text-primary)',
    fontSize: '1.1rem',
    fontWeight: activeTab === key ? '600' : '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    minWidth: '200px',
    boxShadow: activeTab === key ? '0 2px 8px rgba(0, 74, 170, 0.3)' : (hoveredTab === key ? '0 2px 4px rgba(0, 74, 170, 0.2)' : 'none'),
    borderColor: hoveredTab === key && activeTab !== key ? 'var(--accent-primary)' : (activeTab === key ? 'var(--accent-primary)' : 'var(--border-color)')
  })

  return (
    <div>
      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {Object.entries(valueProps).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            onMouseEnter={() => setHoveredTab(key)}
            onMouseLeave={() => setHoveredTab(null)}
            style={getButtonStyle(key)}
          >
            {value.title}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '12px',
        padding: '3rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '500',
          color: 'var(--text-primary)',
          marginBottom: '1rem'
        }}>
          {valueProps[activeTab].title}
        </h3>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          {valueProps[activeTab].description}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {valueProps[activeTab].benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--accent-primary)',
                textAlign: 'left'
              }}
            >
              <p style={{
                color: 'var(--text-primary)',
                lineHeight: '1.5',
                margin: 0
              }}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <Layout>
    <Seo
      title="Trustpoint - Open Source PKI for Industrial IoT"
      description="Trustpoint is the trust anchor for mechanical engineering and manufacturing. Secure digital certificate management for industrial environments and IoT devices. Open-source PKI solution."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, PKI, digital certificates, industrial IoT, manufacturing, mechanical engineering, cybersecurity, certificate management, open source, industrial security`,
        },
        {
          property: `og:title`,
          content: `Trustpoint - Open Source PKI for Industrial IoT`,
        },
        {
          property: `og:description`,
          content: `The trust anchor for mechanical engineering and manufacturing. Secure management of digital certificates in industrial environments.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io`,
        },
        {
          name: `twitter:title`,
          content: `Trustpoint - Open Source PKI for Industrial IoT`,
        },
        {
          name: `twitter:description`,
          content: `Trust anchor for mechanical engineering and manufacturing. Secure digital certificate management for industrial IoT.`,
        },
      ]}
    />

    {/* Structured Data for AI and Search Engines */}
    <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Trustpoint",
      "description": "Open-source PKI solution for secure digital certificate management in industrial environments",
      "url": "https://trustpoint-project.github.io",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Linux, Windows, macOS",
      "programmingLanguage": "Python",
      "softwareVersion": "0.4.0",
      "license": "https://opensource.org/licenses/Apache-2.0",
      "author": {
        "@type": "Organization",
        "name": "Trustpoint Project",
        "url": "https://trustpoint-project.github.io",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "trustpoint@campus-schwarzwald.de",
          "contactType": "technical support"
        }
      },
      "provider": {
        "@type": "Organization",
        "name": "Centrum für Digitalisierung, Führung und Nachhaltigkeit Schwarzwald gGmbH",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Herzog-Eberhard-Str. 56",
          "addressLocality": "Freudenstadt",
          "postalCode": "72250",
          "addressCountry": "DE"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/OpenSource"
      },
      "featureList": [
        "Certificate Authority (CA) functionality",
        "Certificate Management Protocol (CMP)",
        "Enrollment over Secure Transport (EST)",
        "REST API for certificate management",
        "Docker containerization",
        "Hardware Security Module (HSM) support"
      ],
      "applicationSubCategory": "PKI, Certificate Management, Industrial Security",
      "downloadUrl": "https://github.com/Trustpoint-Project/trustpoint-docker",
      "codeRepository": "https://github.com/Trustpoint-Project",
      "documentation": "https://github.com/Trustpoint-Project/trustpoint-documentation",
      "discussionUrl": "https://github.com/Trustpoint-Project/trustpoint/discussions",
      "potentialAction": {
        "@type": "UseAction",
        "target": "https://github.com/Trustpoint-Project/trustpoint-docker",
        "description": "Deploy Trustpoint using Docker"
      }
    })}
    </script>

    {/* Hero Section */}
    <section style={{
      padding: '4rem 0',
      textAlign: 'center',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          The trust anchor for mechanical engineering and manufacturing
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto 2rem auto'
        }}>
          Trustpoint supports organizations in the secure management of digital certificates in industrial environments.
        </p>

        {/* Free & Open Source Benefits */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          maxWidth: '1200px',
          margin: '0 auto 2rem auto',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            {/* Left Column - Title */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0'
              }}>
                Free & Open Source 
              </h3>
            </div>

            {/* Middle Column - Features */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <div style={{ textAlign: 'left', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: '#10b981' }}>✓</span> Air-gapped Certificate Management
              </div>
              <div style={{ textAlign: 'left', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: '#10b981' }}>✓</span> REST, CMP and EST support
              </div>
              <div style={{ textAlign: 'left', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: '#10b981' }}>✓</span> Workflow automation
              </div>
              <div style={{ textAlign: 'left', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: '#10b981' }}>✓</span> Docker container
              </div>
              <div style={{ textAlign: 'left', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: '#10b981' }}>✓</span> HSM support
              </div>
            </div>

            {/* Right Column - Tagline */}
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '1rem',
                color: 'var(--accent-primary)',
                fontWeight: '500',
                margin: '0 0 1rem 0'
              }}>
                Easy operation.<br />Open standards.
              </p>
              <Link
                to="/about"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '500',
                  transition: 'background-color 0.2s ease',
                  fontSize: '0.9rem'
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Link */}
      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '2rem'
      }}>
        <Link
          to="/success"
          style={{
            color: 'var(--brand-primary)',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.3rem',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--link-color)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--brand-primary)'}
        >
          Success stories →
        </Link>
      </div>

    </section>

    {/* Value Proposition Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Value for Your Business
        </h2>

        <ValuePropositionTabs />
      </div>
    </section>

    {/* Credibility Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem'
        }}>
          Institutional Context
        </h2>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-tertiary)',
              lineHeight: '1.7',
              marginBottom: '0'
            }}>
              The Trustpoint research project has been funded since September 2023 by the Federal Ministry of Research, Technology and Space.
            </p>
          </div>
          <div style={{
            flexShrink: '0',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src="/images/organization_logos/BMFTR_Logo.png"
              alt="Federal Ministry of Research, Technology and Space Logo"
              style={{
                maxWidth: '150px',
                height: 'auto',
                filter: 'var(--logo-filter)'
              }}
            />
          </div>
        </div>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-tertiary)',
          lineHeight: '1.7',
          marginBottom: '2rem'
        }}>
          The goal of the project is the development of an open-source solution that ensures digital certificates are securely provided in industrial networks and managed throughout their entire lifecycle. Trustpoint helps companies verify trust chains. This way, machines and their components in factories can be secured more easily and effectively.

          The Trustpoint development team consists of medium-sized companies (achelos, asvin) with expertise in the security sector as well as research institutions and universities (Campus Schwarzwald, Hochschule Hamm-Lippstadt).

          The practical relevance to the user is ensured through close exchange with our associated partners ARBURG, Belden Inc., HOMAG, Keyfactor, Phoenix Contact, Schmalz, Siemens and Diebold Nixdorf.
        </p>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          Funded Partners
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}>
          <a
            href="https://campus-schwarzwald.de/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/funded_partner_csw.png"
              alt="Campus Schwarzwald Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.achelos.de/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/funded_partner_achelos.png"
              alt="achelos Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.asvin.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/funded_partner_asvin.png"
              alt="asvin Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.hshl.de/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/funded_partner_hshl.png"
              alt="Hochschule Hamm-Lippstadt Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
        </div>

        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          Associated Partners
        </h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}>
          <a
            href="https://www.arburg.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_arburg.png"
              alt="ARBURG Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.belden.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_belden.png"
              alt="Belden Inc. Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.homag.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_homag.png"
              alt="HOMAG Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.keyfactor.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_keyfactor.png"
              alt="Keyfactor Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.phoenixcontact.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_phoenix_contact.png"
              alt="Phoenix Contact Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.schmalz.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_schmalz.png"
              alt="Schmalz Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.siemens.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_siemens.png"
              alt="Siemens Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
          <a
            href="https://www.dieboldnixdorf.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/images/organization_logos/associated_partner_diebold_nixdorf.png"
              alt="Diebold Nixdorf Logo"
              style={{
                maxWidth: '120px',
                height: 'auto',
                filter: 'var(--logo-filter)',
                transition: 'opacity 0.2s ease'
              }}
            />
          </a>
        </div>
      </div>
    </section>

    {/* Success Stories Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          Success Stories
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Case Study 1 */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Network Infrastructure
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Secure Onboarding - Belden Hirschmann
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              A Belden Hirschmann BOBCAT Switch is securely onboarded using its Initial Device Identifier (IDevID) for authentication. Trustpoint automates verification and issues domain-specific credentials.
            </p>
          </div>

          {/* Case Study 2 */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Industrial Automation
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              OPC UA Certificate Management - PHOENIX CONTACT
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              A PHOENIX CONTACT PLCnext Technology device is securely provisioned with digital certificates using an OPC UA Global Discovery Server (GDS) and Trustpoint.
            </p>
          </div>

          {/* Case Study 3 */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <span style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Industrial Control
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              EST Certificate Management - WAGO
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              A WAGO Compact Controller 100 integrates native certificate management using the EST protocol, allowing secure certificate enrollment and maintenance.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/success"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--brand-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'background-color 0.2s ease'
            }}
          >
            View All Success Stories →
          </Link>
        </div>
      </div>
    </section>

  </Layout>
)
}

export default IndexPage
