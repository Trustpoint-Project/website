import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PrivacyPage = () => (
  <Layout>
    <Seo
      title="Privacy Policy | Trustpoint"
      description="Learn about how Trustpoint handles your privacy and personal data, including our cookie policy and GDPR compliance."
    />

    <section style={{
      padding: '4rem 0',
      backgroundColor: 'var(--bg-primary)',
      minHeight: '60vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          color: 'var(--text-primary)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Privacy Policy
        </h1>

        <div style={{
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          fontSize: '1rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            1. Introduction
          </h2>
          <p>
            Trustpoint ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            2. Information We Collect
          </h2>
          <p>
            We may collect information about you in various ways, including:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li>Information you provide directly to us (e.g., contact forms, email communications)</li>
            <li>Information collected automatically through cookies and similar technologies</li>
            <li>Usage data and analytics information</li>
          </ul>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
          </p>

          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '1.5rem 0 0.5rem 0'
          }}>
            Types of Cookies We Use:
          </h3>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Necessary Cookies</strong>
            <p>These cookies are essential for the website to function properly. They enable core functionality
            such as page navigation and access to secure areas. The website cannot function properly without these cookies.</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Analytics Cookies</strong>
            <p>These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. This helps us improve our website's performance and user experience.</p>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Marketing Cookies</strong>
            <p>These cookies are used to deliver personalized advertisements and content based on your interests
            and browsing behavior. They may also be used to limit the number of times you see an advertisement.</p>
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            4. How We Use Your Information
          </h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li>To provide and maintain our website</li>
            <li>To improve our website and services</li>
            <li>To communicate with you about our products and services</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            5. Your Rights
          </h2>
          <p>
            Under GDPR and other applicable privacy laws, you have the following rights:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
            <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
            <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
          </ul>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            6. Cookie Preferences
          </h2>
          <p>
            You can manage your cookie preferences at any time by clicking the "Cookie Settings" link in the footer
            of our website or by adjusting your browser settings. Please note that disabling certain cookies may
            affect the functionality of our website.
          </p>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '2rem 0 1rem 0'
          }}>
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Email: trustpoint@campus-schwarzwald.de<br />
            Subject: Privacy Policy Inquiry
          </p>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1rem',
            marginTop: '2rem'
          }}>
            <em>Last updated: January 8, 2026</em>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default PrivacyPage
