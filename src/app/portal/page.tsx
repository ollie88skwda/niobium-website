'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';

const PORTAL_PASSWORD = 'lunchtime26';

const LINKS = [
  {
    category: 'TOOLS',
    accent: '#842bd2',
    items: [
      {
        label: 'CLICKUP',
        sub: 'Niobium Hub',
        href: 'https://app.clickup.com/90141049767/v/cn/7-90141049767-8',
        external: true,
      },
      { label: 'GMAIL', sub: 'Business inbox', href: 'https://mail.google.com', external: true },
      // { label: 'FIGMA', sub: 'Brand & design files', href: 'https://figma.com', external: true },
      {
        label: 'MIRO',
        sub: 'Online group whiteboard',
        href: 'https://miro.com/online-whiteboard/board/uXjVGtbHHno=/?boardAccessToken=FNjgMTkEHbnFXaKQ6vn8AcTDR1XMOROu',
        external: true,
      },
    ],
  },
  {
    category: 'WEBSITE',
    accent: '#842bd2',
    items: [
      { label: 'HOME', sub: 'Main landing page', href: '/', external: false },
      { label: 'ABOUT', sub: 'Team & mission statement', href: '/about', external: false },
      { label: 'CONTACT', sub: 'Client inquiry form', href: '/contact', external: false },
    ],
  },
  {
    category: 'SOCIAL',
    accent: '#842bd2',
    items: [
      { label: 'INSTAGRAM', sub: '@niobiumagency', href: 'https://instagram.com', external: true },
      { label: 'TWITTER / X', sub: '@niobiumagency', href: 'https://twitter.com', external: true },
      { label: 'GITHUB', sub: 'Github', href: 'https://github.com/ollie88skwda/niobium-website', external: true },
    ],
  },
];

export default function PortalPage() {
  const [phase, setPhase] = useState<'login' | 'unlocking' | 'portal'>('login');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('nb_auth') === '1') {
      setPhase('portal');
    }
  }, []);

  useEffect(() => {
    if (phase === 'login') {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [phase]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PORTAL_PASSWORD) {
      sessionStorage.setItem('nb_auth', '1');
      setPhase('unlocking');
      setTimeout(() => setPhase('portal'), 600);
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => {
        setShake(false);
        setError(false);
      }, 800);
      inputRef.current?.focus();
    }
  }

  function handleLogout() {
    sessionStorage.removeItem('nb_auth');
    setPassword('');
    setPhase('login');
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0e0e0e',
        fontFamily: "'Space Grotesk', sans-serif",
        overflowY: phase === 'portal' ? 'auto' : 'hidden',
      }}
    >
      <Navbar />

      {/* Push portal UI below the fixed Navbar */}
      <div style={{ paddingTop: '5.5rem' }}>
        {/* ─── LOGIN ─── */}
        {(phase === 'login' || phase === 'unlocking') && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              padding: '2rem',
              opacity: phase === 'unlocking' ? 0 : 1,
              transition: 'opacity 0.5s linear',
            }}
          >
            {/* Wordmark */}
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.4em',
                  color: '#474747',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                RESTRICTED ACCESS
              </div>
              <div
                style={{
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                NIOBIUM
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.35em',
                  color: '#474747',
                  textTransform: 'uppercase',
                  marginTop: '0.75rem',
                }}
              >
                OWNER PORTAL
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '360px' }}>
              <div
                style={{
                  animation: shake ? 'shake 0.4s ease' : 'none',
                }}
              >
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.25em',
                    color: error ? '#ef4444' : '#474747',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    transition: 'color 0s',
                  }}
                >
                  {error ? 'ACCESS DENIED' : 'PASSCODE'}
                </label>
                <input
                  ref={inputRef}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  autoComplete="current-password"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `1px solid ${error ? '#ef4444' : '#474747'}`,
                    padding: '0.875rem 0',
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    letterSpacing: '0.2em',
                    outline: 'none',
                    transition: 'border-color 0s',
                    caretColor: '#842bd2',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    if (!error) e.currentTarget.style.borderBottomColor = '#842bd2';
                  }}
                  onBlur={(e) => {
                    if (!error) e.currentTarget.style.borderBottomColor = '#474747';
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '2.5rem',
                  width: '100%',
                  padding: '1.125rem',
                  background: '#ffffff',
                  color: '#0e0e0e',
                  border: 'none',
                  borderRadius: 0,
                  fontSize: '0.6875rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0s, color 0s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#842bd2';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0e0e0e';
                }}
              >
                ENTER
              </button>
            </form>

            {/* Decorative line */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, #842bd2, transparent)',
                opacity: 0.3,
              }}
            />
          </div>
        )}

        {/* ─── PORTAL ─── */}
        {phase === 'portal' && (
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* (Removed old portal internal header; using shared Navbar instead) */}

            {/* Hero label */}
            <div
              style={{
                padding: '4rem 2.5rem 2rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.35em',
                  color: '#842bd2',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                QUICK ACCESS
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  color: '#ffffff',
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                ALL LINKS
              </h1>
            </div>

            {/* Link sections */}
            <main style={{ flex: 1, padding: '0 2.5rem 6rem' }}>
              {LINKS.map((section) => (
                <div key={section.category} style={{ marginBottom: '3rem' }}>
                  {/* Category label */}
                  <div
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.35em',
                      color: '#474747',
                      textTransform: 'uppercase',
                      padding: '0 0 1rem 0',
                      borderBottom: '1px solid #1b1b1b',
                      marginBottom: '0',
                    }}
                  >
                    {section.category}
                  </div>

                  {/* Link tiles */}
                  {section.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '2rem 0',
                        borderBottom: '1px solid #1b1b1b',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'background 0s, padding 0s',
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = '#131313';
                        el.style.padding = '2rem 1.5rem';
                        el.style.marginLeft = '-1.5rem';
                        el.style.marginRight = '-1.5rem';
                        const arrow = el.querySelector('.link-arrow') as HTMLElement;
                        if (arrow) arrow.style.color = '#842bd2';
                        const label = el.querySelector('.link-label') as HTMLElement;
                        if (label) label.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = 'transparent';
                        el.style.padding = '2rem 0';
                        el.style.marginLeft = '0';
                        el.style.marginRight = '0';
                        const arrow = el.querySelector('.link-arrow') as HTMLElement;
                        if (arrow) arrow.style.color = '#474747';
                        const label = el.querySelector('.link-label') as HTMLElement;
                        if (label) label.style.color = '#e2e2e2';
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <span
                          className="link-label"
                          style={{
                            fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            color: '#e2e2e2',
                            lineHeight: 1,
                            transition: 'color 0s',
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            color: '#474747',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.sub}
                          {item.external && (
                            <span style={{ marginLeft: '0.5rem', color: '#353535' }}>↗</span>
                          )}
                        </span>
                      </div>

                      <div
                        className="link-arrow"
                        style={{
                          fontSize: '2rem',
                          color: '#474747',
                          transition: 'color 0s',
                          flexShrink: 0,
                          marginLeft: '2rem',
                        }}
                      >
                        →
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </main>

            {/* Footer */}
            <footer
              style={{
                padding: '1.5rem 2.5rem',
                borderTop: '1px solid #1b1b1b',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: '#353535',
                  textTransform: 'uppercase',
                }}
              >
                NIOBIUM AGENCY — RESTRICTED
              </span>

              <button
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: '1px solid #474747',
                  color: '#919191',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.6rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: 0,
                  transition: 'border-color 0s, color 0s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffffff';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#474747';
                  e.currentTarget.style.color = '#919191';
                }}
              >
                LOCK
              </button>
            </footer>
          </div>
        )}

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
          }

          * { box-sizing: border-box; }
          ::selection { background: #842bd2; color: white; }
        `}</style>
      </div>
    </div>
  );
}
