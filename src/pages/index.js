import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Custom LinkedIn carousel component
const TrustpointLinkedInPost = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const linkedinPosts = [
    '7407704242054131714', // V0.4.0 Release
    '7382380345561731072', // GitHub announcement
    '7377248589384720385', // Additional post
    '7366789607457300480', // Additional post
    '7331587816541339648'  // Additional post
  ]

  const nextPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === linkedinPosts.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? linkedinPosts.length - 1 : prevIndex - 1
    )
  }

  const goToPost = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '1rem 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 80px'
      }}>
        {/* Navigation buttons */}
        <button
          onClick={prevPost}
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
            color: 'var(--text-primary)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2)';
            e.target.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.opacity = '1';
          }}
          aria-label="Previous post"
        >
          ‹
        </button>

        {/* Main carousel container */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '600px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          maxWidth: '504px'
        }}>
          <div
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.3s ease-in-out',
              width: '504px'
            }}
          >
            {linkedinPosts.map((activityId, index) => (
              <div key={activityId} style={{ minWidth: '504px', flexShrink: 0 }}>
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`}
                  height="600"
                  width="504"
                  frameBorder="0"
                  allowFullScreen=""
                  title={`Embedded LinkedIn post ${index + 1}`}
                  style={{ border: 'none', overflow: 'hidden', borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextPost}
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
            color: 'var(--text-primary)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2)';
            e.target.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.opacity = '1';
          }}
          aria-label="Next post"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '1rem'
      }}>
        {linkedinPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPost(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentIndex === index ? '#007bff' : '#dee2e6',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            aria-label={`Go to post ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const IndexPage = () => (
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
        maxWidth: '800px',
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
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Trustpoint supports organizations in the secure management of digital certificates in industrial environments.
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
            transition: 'background-color 0.2s ease'
          }}
        >
          Learn More
        </Link>
      </div>
    </section>

    {/* Mission Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
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
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Our Mission
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-tertiary)',
          lineHeight: '1.7',
          textAlign: 'center'
        }}>
          Trustpoint provides a comprehensive solution for certificate lifecycle management in industrial settings.
          We enable organizations to implement robust security mechanisms through standardized interfaces,
          ensuring trust and reliability in digital certificate ecosystems.
        </p>
      </div>
    </section>

    {/* Key Focus Areas */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '1000px',
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
          Key Capabilities
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Certificate Lifecycle Management
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Complete lifecycle support for digital certificates from issuance to revocation.
            </p>
          </div>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Industrial Standards
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Support for CMP, EST, and REST protocols ensuring interoperability.
            </p>
          </div>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Docker Deployment
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Easy deployment and scaling through containerized architecture.
            </p>
          </div>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Open Source
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              MIT licensed solution built with Python Django for transparency and community collaboration.
            </p>
          </div>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              PKCS#11 Support
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Hardware Security Module (HSM) integration through PKCS#11 standard for enhanced security.
            </p>
          </div>
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Workflow Engine
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Advanced workflow automation with manual approval processes, webhooks, and email notifications.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Credibility Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div style={{
        maxWidth: '800px',
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
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
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            />
          </a>
        </div>
      </div>
    </section>

    {/* Latest Updates */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-primary)'
    }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Latest Updates
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Stay updated with our latest announcements and community highlights
        </p>
        <div style={{
          borderRadius: '8px',
          borderLeft: '4px solid var(--brand-primary)',
          marginBottom: '2rem'
        }}>
          <TrustpointLinkedInPost />
        </div>
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://www.linkedin.com/company/99494956"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0077b5',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '500',
              fontSize: '0.9rem',
              transition: 'background-color 0.2s ease'
            }}
          >
            Follow us on LinkedIn →
          </a>
        </div>
    </section>

  </Layout>
)

export default IndexPage
