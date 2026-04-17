import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--surface-50)', color: 'var(--text-main)', padding: '80px 0 40px', borderTop: '1px solid var(--surface-200)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    marginBottom: '64px'
                }}>
                    <div style={{ gridColumn: 'span 2' }}>
                        <div className="logo" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginBottom: '24px'
                        }}>
                            <img
                                src="https://id-cdn.aisbirnusantara.com/emarts-bucket/emarts.png"
                                alt="EMARTS Logo"
                                style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.6 }}>
                            A high-performance ecommerce orchestration platform designed for speed, security, and global scale. Build your future with EMARTS.
                        </p>
                        <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                            <i className="pi pi-envelope"></i>
                            <a href="mailto:support@aisbirnusantara.com" style={{ color: 'inherit', fontSize: '0.9rem' }}>support@aisbirnusantara.com</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px', fontWeight: 600 }}>Resources</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '12px' }}><a href="https://sensei.aisbirnusantara.com" target="_blank" className="footer-link">Guide</a></li>
                            <li style={{ marginBottom: '12px' }}><a href="https://storetes.aisbirnusantara.com/api-docs" target="_blank" className="footer-link">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px', fontWeight: 600 }}>Social</h4>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            {[
                                { icon: 'instagram', url: 'https://instagram.com/aisbirnusantara' },
                                { icon: 'telegram', url: 'https://t.me/aisbirnusantara' }
                            ].map(social => (
                                <a
                                    key={social.icon}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'var(--surface-200)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-main)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className={`pi pi-${social.icon}`} style={{ fontSize: '1.2rem' }}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .footer-link {
                        color: var(--text-muted);
                        text-decoration: none;
                        font-size: 0.95rem;
                        transition: color 0.2s ease;
                    }
                    .footer-link:hover {
                        color: var(--primary-color);
                    }
                    .social-icon:hover {
                        background: var(--primary-color) !important;
                        color: white !important;
                        transform: translateY(-3px);
                        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
                    }
                `}</style>

                <div style={{
                    borderTop: '1px solid var(--surface-200)',
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        © 2026 EMARTS.ID
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Ketentuan</a>
                        <a href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Privasi</a>
                        <a href="/cookies" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Cookie Policy</a>
                        <a href="/credit" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Credit</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
