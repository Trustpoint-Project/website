import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo
      title="Contact Trustpoint Team - Project Information & Team"
      description="Contact the Trustpoint development team. Learn about our research project funded by the German Federal Ministry, our team members, and how to get started with Trustpoint PKI."
      meta={[
        {
          name: `keywords`,
          content: `Trustpoint, contact, team, development team, research project, German Federal Ministry, PKI, industrial security, achelos, Keyfactor, universities`,
        },
        {
          property: `og:title`,
          content: `Contact Trustpoint - Development Team & Project Information`,
        },
        {
          property: `og:description`,
          content: `Contact the Trustpoint team. Learn about our research project, team members, and how to get started with our open-source PKI solution.`,
        },
        {
          property: `og:url`,
          content: `https://trustpoint-project.github.io/contact`,
        },
        {
          name: `twitter:title`,
          content: `Contact Trustpoint Team`,
        },
        {
          name: `twitter:description`,
          content: `Connect with the Trustpoint development team and learn about our research project for industrial PKI solutions.`,
        },
      ]}
    />
    <h1>Contact</h1>

    <h2>Initiative & Background</h2>
    <p>The Trustpoint research project has been funded by the German Federal Ministry of Research, Technology and Space since September 2023. The aim of the project is to develop an open source solution that ensures the secure provision of digital certificates in industrial networks and their management throughout their entire life cycle. Trustpoint helps companies to verify chains of trust. This makes it easier and better to secure machines and their components in factories.</p>

    <h2>Development Team</h2>
    <p>The Trustpoint development team consists of medium-sized companies (achelos, asvin, Keyfactor) with expertise in the field of security as well as research institutes and universities (Campus Schwarzwald, Hamm-Lippstadt University of Applied Sciences).</p>
    <p>The practical relevance to the user is ensured by the close exchange with our associated partners ARBURG, Belden Inc, HOMAG, Phoenix Contact, Schmalz, Siemens and Diebold Nixdorf.</p>

    <h2>Team Members</h2>
    <ul>
      <li><strong>Dr. Claudia Priesterjahn</strong> | achelos</li>
      <li><strong>Christian Schwinne</strong> | Hochschule Hamm-Lippstadt</li>
      <li><strong>Alexander Harig</strong> | Campus Schwarzwald</li>
      <li><strong>Rohit Bohara</strong> | asvin</li>
      <li><strong>Prof. Jan Pelzl</strong> | Hochschule Hamm-Lippstadt</li>
      <li><strong>Omkar Joglekar</strong> | asvin</li>
      <li><strong>Dominik Isaak</strong> | achelos</li>
      <li><strong>Florian Handke</strong> | Campus Schwarzwald</li>
    </ul>

    <h2>Contact Information</h2>
    <p><strong>Centrum für Digitalisierung, Führung und Nachhaltigkeit Schwarzwald gGmbH</strong><br />
    Herzog-Eberhard-Str. 56, 72250 Freudenstadt<br />
    trustpoint[at]campus-schwarzwald.de</p>

    <h2>Demo & Resources</h2>
    <p>Trustpoint is based on Python Django and can be up and running in just a few minutes. To make the installation even easier, we provide you with a Docker container.</p>

    <div style={{ marginTop: `2rem` }}>
      <a href="https://github.com/Trustpoint-Project" style={{ marginRight: `1rem` }}>Try Trustpoint</a>
      <a href="https://github.com/Trustpoint-Project/trustpoint-docker" style={{ marginRight: `1rem` }}>Docker Container</a>
      <a href="https://github.com/Trustpoint-Project/trustpoint-documentation" style={{ marginRight: `1rem` }}>Documentation</a>
      <a href="https://github.com/Trustpoint-Project/trustpoint-client" style={{ marginRight: `1rem` }}>Trustpoint Client</a>
    </div>
  </Layout>
)

export default ContactPage
