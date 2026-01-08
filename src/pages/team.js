import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Florian Handke",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/florian-handke/"
    },
    {
      name: "Prof. Jan Pelzl",
      organization: "Hochschule Hamm-Lippstadt",
      linkedin: "https://www.linkedin.com/in/jan-pelzl-3677634/"
    },
    {
      name: "Christian Schwinne",
      organization: "Hochschule Hamm-Lippstadt",
      linkedin: "https://www.linkedin.com/in/christian-schwinne-3539a817b/"
    },
    {
      name: "Alexander Harig",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/alexhx8472/"
    },
    {
      name: "Dominik Isaak",
      organization: "achelos GmbH",
      linkedin: "https://www.linkedin.com/in/dominik-i/"
    },
    {
      name: "Rohit Bohara",
      organization: "asvin GmbH",
      linkedin: "https://www.linkedin.com/in/rohit-bohara/"
    },
    {
      name: "Gavin Vaz",
      organization: "achelos GmbH",
      linkedin: "https://www.linkedin.com/in/gavin-vaz/"
    }
  ]

  return (
    <Layout>
      <Seo title="Team" />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: 'var(--text-primary)',
          textAlign: 'center'
        }}>
          Our Team
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Meet the individuals behind Trustpoint who are advancing industrial IoT security.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--card-background)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onClick={() => window.open(member.linkedin, '_blank')}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--link-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: '600'
              }}>
                {member.name.replace('Prof. ', '').split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.25rem',
                color: 'var(--text-primary)'
              }}>
                {member.name}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                fontWeight: '500'
              }}>
                {member.organization}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--link-color)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                LinkedIn Profile →
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
