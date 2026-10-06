import { useState } from 'react'
import { SectionHeading } from './SectionHeading'

export function Contact({ contactData, email }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    if (navigator.clipboard && email) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  return (
    <section className="contact-banner" id="contacto">
      <div className="contact-banner-content">
        <SectionHeading
          eyebrow={contactData.eyebrow}
          title={contactData.title}
          subtitle={contactData.subtitle}
        />

        <div className="contact-action-group">
          <a
            className="button button-primary button-large"
            href={`mailto:${email}`}
          >
            {contactData.emailLabel} <span aria-hidden="true">✉️</span>
          </a>

          <button
            type="button"
            className="button button-secondary"
            onClick={handleCopyEmail}
            aria-label="Copiar correo electrónico al portapapeles"
          >
            {copied ? (
              <>
                <span aria-hidden="true">✓</span> {contactData.copyEmailSuccess}
              </>
            ) : (
              <>
                <span aria-hidden="true">📋</span> {email}
              </>
            )}
          </button>

          <a
            className="button button-outline"
            href="https://www.linkedin.com/in/emiliano-correa-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactData.linkedinLabel} <span aria-hidden="true">↗</span>
          </a>

          <a
            className="button button-ghost"
            href="https://github.com/emicorrea"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactData.githubLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
