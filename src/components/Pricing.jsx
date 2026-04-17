import React from 'react';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

const Pricing = () => {
    const plans = [
        {
            name: 'Standard Cloud',
            price: 'Rp 40.000',
            badge: 'PERFECT FOR STARTING',
            popular: false,
            features: [
                { t: '1GB Storage (For Image Only)', b: true },
                { t: 'Unlimited Bandwith', b: false },
                { t: 'Custom .emarts.id / Own Domain', b: false },
                { t: 'AI Configuration Access', b: false },
                { t: 'Free SSL', b: false },
                { t: 'Unlimited Transactions', b: false },
                { t: '24/7 Priority Support', b: false }
            ]
        },
        {
            name: 'Epic Sales',
            price: 'Rp 50.000',
            badge: 'MOST POWERFUL',
            popular: true,
            features: [
                { t: '1GB Storage (For Image Only)', b: true },
                { t: 'Telegram Bot (Free Create)', b: true },
                { t: 'Unlimited Bandwith', b: false },
                { t: 'Custom .emarts.id / Own Domain', b: false },
                { t: 'AI Configuration Access', b: false },
                { t: 'Free SSL', b: false },
                { t: 'Unlimited Transactions', b: false },
                { t: '24/7 Priority Support', b: false }
            ]
        }
    ];

    return (
        <section className="section-padding" style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: -1
            }}></div>

            <div className="container">
                <div 
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                    data-aos="fade-up"
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Simple, <span className="gradient-text">Flat Pricing</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Transparent plans designed to help you launch and scale your ecommerce business.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    flexWrap: 'wrap',
                    alignItems: 'stretch'
                }}>
                    {plans.map((p, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            style={{
                                background: p.popular ? 'var(--surface-900)' : 'var(--surface-0)',
                                color: p.popular ? 'white' : 'var(--text-main)',
                                borderRadius: '32px',
                                padding: '40px',
                                width: '100%',
                                maxWidth: '380px',
                                textAlign: 'center',
                                boxShadow: p.popular ? '0 25px 50px -12px rgba(14, 165, 233, 0.25)' : 'var(--shadow-lg)',
                                position: 'relative',
                                overflow: 'hidden',
                                border: p.popular ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--surface-200)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {p.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    left: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 50%)',
                                    pointerEvents: 'none'
                                }}></div>
                            )}

                            <span style={{
                                background: p.popular ? 'var(--primary-color)' : 'rgba(14, 165, 233, 0.1)',
                                color: p.popular ? 'white' : 'var(--primary-color)',
                                padding: '6px 16px',
                                borderRadius: '100px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                display: 'inline-block',
                                marginBottom: '20px',
                                alignSelf: 'center'
                            }}>
                                {p.badge}
                            </span>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>{p.name}</h3>

                            <div style={{ margin: '24px 0' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>{p.price}</span>
                                    <span style={{ color: p.popular ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)', fontSize: '1rem' }}>/mo</span>
                                </div>
                            </div>

                            <Divider style={{ borderColor: p.popular ? 'rgba(255,255,255,0.1)' : 'var(--surface-200)' }} />

                            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', textAlign: 'left', flexGrow: 1 }}>
                                {p.features.map((f, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                                        <i className="pi pi-check-circle" style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '3px' }}></i>
                                        <span style={{ fontSize: '0.9rem', fontWeight: f.b ? 700 : 400, lineHeight: '1.4' }}>{f.t}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                label="Get Started"
                                icon="pi pi-bolt"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: '16px',
                                    background: p.popular ? 'white' : 'var(--primary-gradient)',
                                    border: 'none',
                                    color: p.popular ? 'var(--surface-900)' : 'white',
                                    fontSize: '1rem',
                                    fontWeight: 700
                                }}
                                className="p-button-raised"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;





