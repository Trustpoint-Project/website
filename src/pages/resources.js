import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <Seo
      title="Resources - Papers, Articles & Videos"
      description="Explore Trustpoint's research papers, technical articles, and educational videos about open-source PKI, digital certificate management, and industrial IoT security. Download peer-reviewed publications and watch expert presentations."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, PKI, digital certificates, industrial IoT, cybersecurity, open source, certificate management, research papers, technical articles, educational videos`,
        },
        {
          property: `og:title`,
          content: `Trustpoint Resources - Papers, Articles & Educational Videos`,
        },
        {
          property: `og:description`,
          content: `Access comprehensive resources about Trustpoint's open-source PKI solution for industrial IoT security. Download research papers, read technical articles, and watch educational videos.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/resources`,
        },
        {
          name: `twitter:title`,
          content: `Trustpoint Resources - Papers, Articles & Videos`,
        },
        {
          name: `twitter:description`,
          content: `Explore Trustpoint's research papers, technical articles, and educational videos about PKI and industrial IoT security.`,
        },
      ]}
    />

    {/* Structured Data for SEO */}
    <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Trustpoint Resources - Papers, Articles & Videos",
      "description": "Explore Trustpoint's research papers, technical articles, and educational videos about open-source PKI, digital certificate management, and industrial IoT security.",
      "url": "https://trustpoint-project.github.io/resources",
      "publisher": {
        "@type": "Organization",
        "name": "Trustpoint Project",
        "url": "https://trustpoint-project.github.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://trustpoint-project.github.io/static/logos/trustpoint-logo.svg"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Trustpoint Resources",
        "description": "Collection of research papers, articles, and educational videos about Trustpoint PKI",
        "numberOfItems": 9,
        "itemListElement": [
          {
            "@type": "Article",
            "name": "Ende-zu-Ende gedacht: Industrielle Nutzung digitaler Identitäten",
            "description": "A comprehensive overview of Trustpoint's architecture and its application in securing industrial environments.",
            "datePublished": "2024",
            "publisher": {
              "@type": "Organization",
              "name": "atp-Magazin"
            },
            "url": "https://trustpoint-project.github.io/files/atp_magazin_9_2024_trustpoint.pdf"
          },
          {
            "@type": "Article",
            "name": "Certificate Lifecycle Management in OT Networks",
            "description": "Exploring the challenges and solutions for managing digital certificates in operational technology environments.",
            "datePublished": "2024"
          },
          {
            "@type": "Article",
            "name": "Zero-Trust Architecture for Manufacturing",
            "description": "Implementing zero-trust principles in industrial manufacturing environments using Trustpoint.",
            "datePublished": "2023"
          },
          {
            "@type": "VideoObject",
            "name": "Trustpoint Tech Intro",
            "description": "Join Alexander Harig and Christian Schwinne as they walk you through the core features of Trustpoint.",
            "duration": "PT42M",
            "uploadDate": "2024"
          },
          {
            "@type": "VideoObject",
            "name": "Trustpoint CI/CD Testing",
            "description": "Join Sven Bergmann as he walks you through the CI/CD and testing framework of Trustpoint.",
            "duration": "PT12M",
            "uploadDate": "2024"
          },
          {
            "@type": "VideoObject",
            "name": "Asymetrische Verschlüsselung & Zertifikate",
            "description": "Prof. Jan Pelzl provides an introduction to Diffie-Hellman and RSA methods.",
            "duration": "PT35M",
            "uploadDate": "2024",
            "inLanguage": "de"
          },
          {
            "@type": "VideoObject",
            "name": "Blaupause PKI",
            "description": "Andreas Philipp reports on setting up and operating your own public key infrastructure.",
            "duration": "PT32M",
            "uploadDate": "2024",
            "inLanguage": "de"
          },
          {
            "@type": "VideoObject",
            "name": "CRA, IEC 62443 und digitale Geräteidentitäten",
            "description": "Dr. Michael Jahnich on how digital device identities contribute to compliance with IEC 62443 and Cyber Resilience Act.",
            "duration": "PT29M",
            "uploadDate": "2024",
            "inLanguage": "de"
          },
          {
            "@type": "VideoObject",
            "name": "OPC UA Zertifikate",
            "description": "Arno Fast explains mechanisms for managing certificates in OPC UA.",
            "duration": "PT26M",
            "uploadDate": "2024",
            "inLanguage": "de"
          }
        ]
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
          Resources
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Explore our research papers, articles, and educational videos about Trustpoint and digital certificate management.
        </p>
      </div>
    </section>

    {/* Training Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
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
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Training
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Interactive PKI Tutorial */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--brand-primary)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Interactive PKI Tutorial
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Learn the fundamentals of Public Key Infrastructure (PKI) with our interactive certificate explainer. Explore X.509 certificates, chain of trust, and PKI concepts through hands-on examples with real certificate data.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                backgroundColor: 'var(--brand-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                Interactive
              </span>
              <span style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                Free
              </span>
            </div>
            <a
              href="/certificate-explainer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Start Tutorial →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Papers & Articles Section */}
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
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Papers & Articles
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Paper/Article 1 */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--brand-primary)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              End-to-end considerations: Industrial utilization of digital identities [German]
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
The IT security requirements for machines and systems are becoming increasingly complex. As a result, the use of machine   
identities is becoming increasingly important. They play a decisive role in establishing IT security in industrial networks. Machine   
identities enable the establishment of trust between manufacturers and operators, e.g. by proving the origin of components   
and creating secure traceability. However, digital identities are currently still difficult to introduce and manage in industrial   
environments. Commissioning - combined with the initial secure integration of devices into the network (onboarding) - is a   
particularly critical step. In this article, we look at the importance of digital identities for components and systems, describe   
necessary solutions such as secure onboarding and, with our Trustpoint research project, provide an example of how secure   
management of digital identities can work in industry.            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                backgroundColor: 'var(--brand-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                atp-Magazin (Peer-Reviewed)
              </span>
              <span style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                2024
              </span>
            </div>
            <a
              href="/files/atp_magazin_9_2024_trustpoint.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Download PDF →
            </a>
          </div>

          {/* Paper/Article 2 */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--brand-primary)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Effective Certificate Management in the Industry [German]
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
In industrial automation environments, digital certificates are crucial for ensuring authentication, integrity, and confidentiality. With increasing connectivity and the introduction of technologies such as Industry 4.0 and IoT, operators are faced with the challenge of securely integrating and managing distributed machines and devices. Our article highlights the most important security aspects and challenges involved in introducing and managing digital certificates in industrial environments and presents solutions that are being developed in the Trustpoint research project.             
 </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                backgroundColor: 'var(--brand-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                IT-SICHERHEIT
              </span>
              <span style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                2024
              </span>
            </div>
            <a
              href="/files/IT-S_2024_6_eMag copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Download PDF →
            </a>
          </div>

          {/* Paper/Article 3 */}
          <div style={{
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--brand-primary)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Trustpoint: Digital identities for a secure industry [German]
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
The Trustpoint project was launched in September 2023 by Campus Schwarzwald, medium-sized companies (PrimeKey Labs GmbH, asvin GmbH, achelos GmbH), and Hamm-Lippstadt University of Applied Sciences. The project is supported by ARBURG GmbH + Co KG, HOMAG GmbH, FANUC Deutschland GmbH, PHOENIX CONTACT GmbH & Co. KG, and Siemens AG as associated partners. The aim of the project is to develop an open source solution for the secure management of digital identities of machines and components in an industrial environment. Trustpoint is funded by the German Federal Ministry of Education and Research  as part of the SME Innovation Initiative with €1.41 million.            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <span style={{
                backgroundColor: 'var(--brand-primary)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '500'
              }}>
                20. German IT-Security Conference 
              </span>
              <span style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-secondary)',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                2024
              </span>
            </div>
            <a
              href="/files/trustpoint_beitrag_20_it_sicherheitskongress.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Download PDF →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Videos Section */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
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
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Videos
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Video 1 - Trustpoint Tech Intro */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=Xowxd75lNdk', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=Xowxd75lNdk', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/Xowxd75lNdk/maxresdefault.jpg"
                alt="Trustpoint Tech Intro"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Trustpoint Tech Intro
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Join Alexander Harig (Campus Schwarzwald) and Christian Schwinne (Hamm-Lippstadt University of Applied Sciences) as they walk you through the core features of Trustpoint.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Overview
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  42 min
                </span>
              </div>
            </div>
          </div>

          {/* Video 2 - CICD Testing */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=5HhKC1rGzZQ', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=5HhKC1rGzZQ', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/5HhKC1rGzZQ/maxresdefault.jpg"
                alt="Installing Trustpoint - Step by Step Guide"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Trustpoint CI/CD Testing
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Join Sven Bergmann (achelos GmbH) as he walks you through the CI/CD and testing framework of Trustpoint.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Overview
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  12 min
                </span>
              </div>
            </div>
          </div>

          {/* Video 3 - Technical Deep Dive */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=bB-9h1drfSk', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=bB-9h1drfSk', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/bB-9h1drfSk/maxresdefault.jpg"
                alt="Asymetrische Verschlüsselung & Zertifikate"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Asymetrische Verschlüsselung & Zertifikate [German]
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Prof. Jan Pelzl from Hamm-Lippstadt University of Applied Sciences provides an introduction to the widely used Diffie-Hellman and RSA methods and explains the theoretical principles behind them.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Educational
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  35 min
                </span>
              </div>
            </div>
          </div>

          {/* Video 4 - Blaupause PKI */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=VlxS0ADxX0Q', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=VlxS0ADxX0Q', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/VlxS0ADxX0Q/maxresdefault.jpg"
                alt="Blaupause PKI"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                Blaupause PKI [German]
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Andreas Philipp from Keyfactor reports on “Blueprint PKI: Setting up and operating your own public key infrastructure”
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Educational
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  32 min
                </span>
              </div>
            </div>
          </div>

          {/* Video 5 - Community Demo */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=fVm8D4A0-p8', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=fVm8D4A0-p8', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/fVm8D4A0-p8/maxresdefault.jpg"
                alt=" CRA, IEC 62443 und digitale Geräteidentitäten "
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                 CRA, IEC 62443 und digitale Geräteidentitäten [German]
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Dr. Michael Jahnich from achelos GmbH on how digital device identities can contribute to compliance with IEC 62443 and the upcoming Cyber Resilience Act.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Educational
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  29 min
                </span>
              </div>
            </div>
          </div>

          {/* Video 6 - Getting Started Series */}
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.youtube.com/watch?v=CMssNfKeM3A', '_blank')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open('https://www.youtube.com/watch?v=CMssNfKeM3A', '_blank'); } }}
            >
              <img
                src="https://img.youtube.com/vi/CMssNfKeM3A/maxresdefault.jpg"
                alt="OPC UA Zertifikate [German"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: 'none'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px'
              }}>
                ▶
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                OPC UA Zertifikate [German]
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Arno Fast from PHOENIX CONTACT will explain the mechanisms for managing certificates in OPC UA and demonstrate this using a practical exampl
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  backgroundColor: 'var(--brand-primary)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}>
                  Series
                </span>
                <span style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  26 min
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>

  </Layout>
)

export default ResourcesPage
