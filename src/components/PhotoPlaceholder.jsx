export function PhotoPlaceholder({ photoUrl, altText, placeholderText, helperText }) {
  return (
    <div className="photo-container" aria-label={altText || 'Fotografía profesional'}>
      <div className="photo-frame">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={altText || 'Emiliano Correa'}
            className="photo-image"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="photo-empty-state">
            <div className="photo-avatar-ring">
              <span className="photo-initials">EC</span>
            </div>
            <div className="photo-placeholder-meta">
              <div className="photo-badge">
                <svg
                  className="photo-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>{placeholderText || 'Fotografía'}</span>
              </div>
              {helperText && <p className="photo-helper-text">{helperText}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
