import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Case Study Card Component
const CaseStudyCard = ({ title, company, industry, description, link }) => (
  <div style={{
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid var(--border-color)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: link ? 'pointer' : 'default'
  }}
  onMouseEnter={(e) => {
    if (link) {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
    }
  }}
  onMouseLeave={(e) => {
    if (link) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
    }
  }}
  onClick={() => link && window.open(link, '_blank')}
  >
    <div style={{ padding: '2rem' }}>
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
          {industry}
        </span>
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1rem'
      }}>
        {company}
      </p>
      <p style={{
        fontSize: '0.95rem',
        color: 'var(--text-tertiary)',
        lineHeight: '1.6',
        margin: '0'
      }}>
        {description}
      </p>
      {link && (
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <span style={{
            color: 'var(--accent-primary)',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Read full story →
          </span>
        </div>
      )}
    </div>
  </div>
)

const SuccessPage = () => (
  <Layout>
    <Seo
      title="Success Stories - Trustpoint Case Studies"
      description="Discover how organizations are successfully implementing Trustpoint for secure certificate management in industrial environments. Real-world case studies and success stories."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, success stories, case studies, industrial IoT, certificate management, PKI implementation, manufacturing security`,
        },
        {
          property: `og:title`,
          content: `Success Stories - Trustpoint Case Studies`,
        },
        {
          property: `og:description`,
          content: `Real-world success stories of organizations implementing Trustpoint for secure industrial certificate management.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/success`,
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
          Success Stories
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Discover how Trustpoint helps organizations achieve secure and efficient certificate management in industrial environments.
        </p>
      </div>
    </section>

    {/* Case Studies Grid */}
    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-secondary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Case Study 1 */}
          <CaseStudyCard
            title="Secure Onboarding"
            company="Belden Hirschmann"
            industry="Network Infrastructure"
            description="A Belden Hirschmann BOBCAT Switch is securely onboarded using its Initial Device Identifier (IDevID) for authentication. Trustpoint automates verification, integrates the device into a secure domain, and issues domain-specific credentials, ensuring efficient and reliable identity management in industrial networks."
          />

          {/* Case Study 2 */}
          <CaseStudyCard
            title="OPC UA Certificate Management"
            company="PHOENIX CONTACT"
            industry="Industrial Automation"
            description="A PHOENIX CONTACT PLCnext Technology device is securely provisioned with digital certificates using an OPC UA Global Discovery Server (GDS) and Trustpoint. Trustpoint, acting as a trusted certificate management backend, enables automated certificate issuance, renewal, and revocation via the EST protocol."
          />

          {/* Case Study 3 */}
          <CaseStudyCard
            title="OPC UA Certificate Management"
            company="Siemens & Unified Automation"
            industry="Industrial Automation"
            description="Certificates are issued to a Siemens S7-1500 via UaGDS, which handles centralized certificate provisioning, trust list management, and automated renewal using CMP. Trustpoint operates as the backend CA, enabling consistent and automated certificate lifecycle management."
          />

          {/* Case Study 4 */}
          <CaseStudyCard
            title="Zero-touch Onboarding"
            company="Trustpoint Project"
            industry="Research & Development"
            description="Automated Onboarding Key Infrastructure (AOKI) is a proof-of-concept protocol developed within the Trustpoint project to enable offline zero-touch onboarding of devices without relying on external services like MASA or a rendezvous server. It relies on mutual authentication using device-identities (IDevID) and owner-certificates (DevOwnerID)."
          />

          {/* Case Study 5 */}
          <CaseStudyCard
            title="EST Certificate Management"
            company="WAGO"
            industry="Industrial Control"
            description="A WAGO Compact Controller 100 integrates native certificate management using the EST protocol, allowing the device to securely request, enroll, and maintain its digital certificates. The resulting certificates can be applied to secure IPsec VPN connections or to protect the controller's integrated web server."
          />
        </div>

      </div>
    </section>
  </Layout>
)

export default SuccessPage
