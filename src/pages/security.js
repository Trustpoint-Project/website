import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecurityPage = () => {
  return (
    <Layout>
      <Seo title="Security Policy" />
      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '2rem',
        lineHeight: '1.6'
      }}>
        <h1>Security Policy</h1>
        <h2>Reporting a Vulnerability</h2>
        <p>The Trustpoint team takes security vulnerabilities seriously. We appreciate your efforts to responsibly disclose your findings.</p>

        <h2>How to Report a Security Vulnerability</h2>
        <p>Report vulnerabilities privately through GitHub's security advisory feature:</p>
        <p><a href="https://github.com/Trustpoint-Project/trustpoint/security/advisories/new" target="_blank" rel="noopener noreferrer">Submit a private vulnerability report</a></p>
        <p>This ensures your report remains private until we've addressed the issue and allows for secure collaboration.</p>

        <h2>What to Include in Your Report</h2>
        <p>Please include the following information in your report:</p>
        <ul>
          <li><strong>Description:</strong> A clear description of the vulnerability</li>
          <li><strong>Impact:</strong> The potential impact and severity of the issue</li>
          <li><strong>Steps to Reproduce:</strong> Detailed steps to reproduce the vulnerability</li>
          <li><strong>Proof of Concept:</strong> If possible, include a proof-of-concept or example code</li>
          <li><strong>Affected Versions:</strong> Which versions of Trustpoint are affected</li>
          <li><strong>Suggested Fix:</strong> If you have suggestions for how to fix the issue</li>
        </ul>

        <h2>What to Expect</h2>
        <ul>
          <li>We will acknowledge receipt of your vulnerability report within 5 business days</li>
          <li>We will provide an estimated timeline for a fix</li>
          <li>We will keep you informed about the progress of addressing the vulnerability</li>
          <li>Once the vulnerability is fixed, we will publicly acknowledge your responsible disclosure (unless you prefer to remain anonymous)</li>
        </ul>

        <h2>Contact</h2>
        <p>For general security questions or concerns, please contact:</p>
        <p><a href="mailto:trustpoint@campus-schwarzwald.de">trustpoint@campus-schwarzwald.de</a></p>
        <p>For general questions and discussions, visit our <a href="https://github.com/Trustpoint-Project/trustpoint/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>.</p>
      </div>
    </Layout>
  )
}

export default SecurityPage
