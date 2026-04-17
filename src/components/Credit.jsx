import React from 'react';
import { Button } from 'primereact/button';

const Credit = () => {
    const credits = [
        {
            name: "Kiki's Delivery Service",
            type: "Main Visual Theme",
            desc: "Visual inspiration and banner art representing speedy delivery and reliable service.",
            link: "https://www.google.com/search?q=kiki+delivery+service"
        },
        {
            name: "Lucide Icon",
            type: "Icon Library",
            desc: "Beautifully crafted open-source icons for the modern web.",
            link: "https://lucide.dev/"
        }
    ];

    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Platform <span className="gradient-text">Credits</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        EMARTS is built on top of world-class infrastructure and creative inspirations.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                    {credits.map((c, i) => (
                        <div key={i} className="glass animate-fade-in-up" style={{
                            padding: '40px',
                            background: 'white',
                            borderRadius: '32px',
                            border: '1px solid var(--surface-200)',
                            boxShadow: 'var(--shadow-xl)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 800,
                                        color: 'var(--primary-color)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>{c.type}</span>
                                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>{c.name}</h3>
                                </div>
                                <a href={c.link} target="_blank" rel="noopener noreferrer">
                                    <Button icon="pi pi-external-link" className="p-button-rounded p-button-text p-button-secondary" />
                                </a>
                            </div>
                            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>{c.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '80px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--surface-200)', paddingTop: '40px' }}>
                    <p>© 2026 EMARTS.ID. All rights reserved by Aisbir Cloud Nusantara.</p>
                </div>
            </div>
        </section>
    );
};

export default Credit;
