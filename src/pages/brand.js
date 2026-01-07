import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BrandPage = () => (
  <Layout>
    <Seo
      title="Trustpoint Brand Guidelines - Logos & Brand Assets"
      description="Download official Trustpoint logos, brand colors, and guidelines for consistent usage across all platforms. Access brand assets for marketing and communication materials."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, brand guidelines, logos, brand colors, brand assets, marketing materials, corporate identity, design guidelines`,
        },
        {
          property: `og:title`,
          content: `Trustpoint Brand Guidelines - Official Logos & Assets`,
        },
        {
          property: `og:description`,
          content: `Download Trustpoint's official logos and learn about our brand colors for consistent usage across all platforms and marketing materials.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/brand`,
        },
        {
          name: `twitter:title`,
          content: `Trustpoint Brand Guidelines`,
        },
        {
          name: `twitter:description`,
          content: `Download official Trustpoint logos and brand assets for consistent corporate identity usage.`,
        },
      ]}
    />

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
          Brand Guidelines
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Download our official logos and learn about our brand colors for consistent usage across all platforms.
        </p>
      </div>
    </section>

    {/* Color Palette */}
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
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Color Palette
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: '#004aad',
            padding: '3rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Primary
            </h3>
            <p style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              #004aad
            </p>
            <p style={{
              fontSize: '0.9rem',
              opacity: '0.9'
            }}>
              RGB(0, 74, 173)
            </p>
          </div>
          <div style={{
            backgroundColor: '#f4f4f4',
            padding: '3rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'var(--text-primary)',
            border: '2px solid var(--border-color)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Accent Light
            </h3>
            <p style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              #f4f4f4
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)'
            }}>
              RGB(244, 244, 244)
            </p>
          </div>
          <div style={{
            backgroundColor: 'var(--bg-tertiary)',
            padding: '3rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              Accent Dark
            </h3>
            <p style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              #17191E
            </p>
            <p style={{
              fontSize: '0.9rem',
              opacity: '0.9'
            }}>
              RGB(23, 25, 30)
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Logo Downloads */}
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
          Logo Downloads
        </h2>

        {/* Square Logo */}
        <div style={{
          marginBottom: '4rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Square Logo (300×300px)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Main Logo
              </h4>
              <img
                src="/logos/trustpoint_logo_square_main.svg"
                alt="Trustpoint Main Logo"
                style={{
                  width: '150px',
                  height: '150px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_logo_square_main.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_logo_square_main.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_logo_square_main.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Inverted Logo
              </h4>
              <img
                src="/logos/trustpoint_logo_square_inverted.svg"
                alt="Trustpoint Inverted Logo"
                style={{
                  width: '150px',
                  height: '150px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_logo_square_inverted.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_logo_square_inverted.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_logo_square_inverted.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Logo */}
        <div style={{
          marginBottom: '4rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Horizontal Logo (400×100px)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Main Logo
              </h4>
              <img
                src="/logos/trustpoint_logo_horizontal_main.svg"
                alt="Trustpoint Main Horizontal Logo"
                style={{
                  width: '300px',
                  height: '75px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_logo_horizontal_main.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_logo_horizontal_main.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_logo_horizontal_main.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Inverted Logo
              </h4>
              <img
                src="/logos/trustpoint_logo_horizontal_inverted.svg"
                alt="Trustpoint Inverted Horizontal Logo"
                style={{
                  width: '300px',
                  height: '75px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_logo_horizontal_inverted.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_logo_horizontal_inverted.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_logo_horizontal_inverted.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Favicon Downloads */}
        <div style={{
          marginBottom: '4rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Favicon Downloads
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Main Favicon
              </h4>
              <img
                src="/logos/trustpoint_favicon_main.svg"
                alt="Trustpoint Main Favicon"
                style={{
                  width: '64px',
                  height: '64px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_favicon_main.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_favicon_main.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_favicon_main.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
                <a
                  href="/logos/trustpoint_favicon_main_white_bg.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-primary)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG (White BG)
                </a>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-tertiary)',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Inverted Favicon
              </h4>
              <img
                src="/logos/trustpoint_favicon_inverted.svg"
                alt="Trustpoint Inverted Favicon"
                style={{
                  width: '64px',
                  height: '64px',
                  marginBottom: '1rem'
                }}
              />
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/logos/trustpoint_favicon_inverted.svg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  SVG
                </a>
                <a
                  href="/logos/trustpoint_favicon_inverted.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG
                </a>
                <a
                  href="/logos/trustpoint_favicon_inverted.jpg"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  JPG
                </a>
                <a
                  href="/logos/trustpoint_favicon_inverted_white_bg.png"
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--brand-accent)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '0.9rem'
                  }}
                >
                  PNG (White BG)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '3rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            Usage Guidelines
          </h3>
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <ul style={{
              color: 'var(--text-tertiary)',
              lineHeight: '1.7',
              paddingLeft: '1.5rem'
            }}>
              <li>Maintain clear space around the logo (minimum 1/4 of logo height)</li>
              <li>Do not distort, rotate, or modify the logo proportions</li>
              <li>Use the inverted version on dark backgrounds</li>
              <li>Ensure adequate contrast for readability</li>
              <li>Primary color (#004aad) should be the dominant brand color</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default BrandPage
