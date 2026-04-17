import React from 'react';
import { Button } from 'primereact/button';

const Hero = () => {
    return (
        <section className="section-padding" style={{ paddingTop: '4rem', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
            {/* Grid Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    linear-gradient(to right, rgba(14, 165, 233, 0.12) 1.5px, transparent 1.5px),
                    linear-gradient(to bottom, rgba(14, 165, 233, 0.12) 1.5px, transparent 1.5px)
                `,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle, black, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(circle, black, transparent 90%)',
                zIndex: -2
            }}></div>

            {/* Background Decorations (Glows) */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
                <div 
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <span
                        style={{
                            background: 'rgba(14, 165, 233, 0.1)',
                            color: 'var(--primary-color)',
                            padding: '6px 14px',
                            borderRadius: '100px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'inline-block',
                            border: '1px solid rgba(14, 165, 233, 0.2)',
                        }}
                    >
                        🚀 New: Version 1.0 Released
                    </span>
                    <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
                        Build your next Ecommerce <br />
                        <span className="gradient-text">with EMARTS.ID</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        The next generation of Ecommerce platform thats powered by Ai Machine Learning
                    </p>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '3rem' }}>
                        <a href="#pricing">
                            <Button label="Start Building Now" icon="pi pi-bolt" className="p-button-sm" style={{ background: 'var(--primary-color)', border: 'none', padding: '10px 20px' }} />
                        </a>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    style={{
                        background: 'var(--surface-100)',
                        borderRadius: '24px',
                        padding: '12px',
                        boxShadow: 'var(--shadow-xl)',
                        position: 'relative',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}
                >
                    <div
                        style={{
                            background: 'var(--surface-0)',
                            borderRadius: '16px',
                            aspectRatio: '16/9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Placeholder for complex UI or Image */}
                        <img
                            src="https://is3.cloudhost.id/id-cdn.aisbirnusantara.com/emarts-bucket/WhatsApp Image 2026-04-16 at 22.51.34.jpeg"
                            alt="Dashboard Preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
