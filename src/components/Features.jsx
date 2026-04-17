import React from 'react';
import { Card } from 'primereact/card';

const Features = () => {
    const features = [
        {
            title: 'Ai Configuration',
            desc: 'Our Sites can be configured using Ai Machine Learning, so you can get your site up and running in no time.',
            icon: 'pi-mobile'
        },
        {
            title: 'Multiple Statistics',
            desc: 'Our Admin Dashboard provided about your sales, visitors, and more.',
            icon: 'pi-chart-line'
        },
        {
            title: 'Cdn Hosting',
            desc: 'Our Sites are hosted on a global CDN, so you can get your site up and running in no time.',
            icon: 'pi-cloud'
        },
        {
            title: 'Multiple Payment Gateway',
            desc: 'We provide multiple payment gateway options, so you can get your favorite payment option.',
            icon: 'pi-wallet'
        },
        {
            title: 'Api Intergration',
            desc: 'Our sites provided API for intergration with other sites.',
            icon: 'pi-bolt'
        },
        {
            title: 'Websocket Connection',
            desc: 'We Connected Telegram Bot Using websocket technology',
            icon: 'pi-wifi'
        },
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--surface-50)' }}>
            <div className="container">
                <div 
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                    data-aos="fade-up"
                >
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                        Everything you need to <span className="gradient-text">scale</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                        Powered by modern technology and premium design principles to help you launch your SaaS in record time.
                    </p>
                </div>

                <div 
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px'
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {features.map((f, i) => (
                        <Card
                            key={i}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                transition: 'transform 0.3s ease',
                                width: '320px',
                                maxWidth: '100%'
                            }}
                            className="feature-card"
                        >
                            <div
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--primary-gradient)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.25rem',
                                    marginBottom: '1.25rem'
                                }}
                            >
                                <i className={`pi ${f.icon}`}></i>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .feature-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>
        </section>
    );
};

export default Features;
