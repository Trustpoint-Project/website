import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Florian Handke",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/florian-handke/",
      photo: "florian_handke.png"
    },
    {
      name: "Prof. Jan Pelzl",
      organization: "Hochschule Hamm-Lippstadt",
      linkedin: "https://www.linkedin.com/in/jan-pelzl-3677634/",
      photo: "jan_pelzl.png"
    },
    {
      name: "Christian Schwinne",
      organization: "Hochschule Hamm-Lippstadt",
      linkedin: "https://www.linkedin.com/in/christian-schwinne-3539a817b/",
      photo: "christian_schwinne.png"
    },
    {
      name: "Alexander Harig",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/alexhx8472/",
      photo: "alexander_harig.png"
    },
    {
      name: "Dominik Isaak",
      organization: "achelos GmbH",
      linkedin: "https://www.linkedin.com/in/dominik-i/",
      photo: "dominik_isaak.png"
    },
    {
      name: "Rohit Bohara",
      organization: "asvin GmbH",
      linkedin: "https://www.linkedin.com/in/rohit-bohara/",
      photo: "rohit_bohara.png"
    },
    {
      name: "Gavin Vaz",
      organization: "achelos GmbH",
      linkedin: "https://www.linkedin.com/in/gavin-vaz/",
      photo: "gavin_vaz.png"
    },
    {
      name: "Christof Schillinger",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/christof-schillinger-647844299/",
      photo: "christof_schillinger.png"
    },
    {
      name: "Mohammad Zeeshan",
      organization: "Campus Schwarzwald",
      linkedin: "https://www.linkedin.com/in/zeesh31/",
      photo: "mohammad_zeeshan.png"
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
              backgroundColor: 'white',
              border: '1px solid var(--border-color)',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex="0"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onClick={() => window.open(member.linkedin, '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(member.linkedin, '_blank');
              }
            }}
            >
              <div style={{
                width: '160px',
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                {member.photo ? (
                  <img 
                    src={`/images/team/${member.photo}`} 
                    alt={member.name} 
                    style={{
                      width: '160px',
                      height: '160px',
                      objectFit: 'cover'
                    }} 
                  />
                ) : (
                  <div style={{
                    width: '160px',
                    height: '160px',
                    backgroundColor: 'var(--link-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '4rem',
                    fontWeight: '600'
                  }}>
                    {member.name.replace('Prof. ', '').split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.25rem',
                color: '#000'
              }}>
                {member.name}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#555',
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
