import React from 'react';

const APIIntegration = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--surface-0)', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Gradient Background */}
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    gap: '64px',
                    alignItems: 'center',
                    flexWrap: 'wrap-reverse', // Reversed for mobile logic
                    justifyContent: 'space-between'
                }}>
                    {/* Image Column (Left) - Bigger and cleaner */}
                    <div 
                        data-aos="fade-right"
                        style={{ 
                            flex: '1 1 650px',
                            background: 'transparent', 
                            padding: '0', 
                            borderRadius: '32px', 
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            background: '#f8fafc',
                            borderRadius: '32px',
                            padding: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-2xl)'
                        }}>
                            <img
                                src="https://id-cdn.aisbirnusantara.com/emarts-bucket/apidok.png"
                                alt="API Documentation Preview"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    display: 'block'
                                }}
                            />
                        </div>
                        
                        {/* Floating Label Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            color: '#16a34a',
                            padding: '6px 14px',
                            borderRadius: '100px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <i className="pi pi-check"></i>
                            OAS 3.0 Certified
                        </div>
                    </div>

                    {/* Text Column (Right) */}
                    <div 
                        style={{ flex: '1 1 400px' }}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>Developer First</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                            Advanced <span className="gradient-text">API Integration</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            EMARTS is built with a developer-first approach. Our robust OpenAPI (Swagger) documentation allows you to connect your ecommerce engine to any external system with ease.
                        </p>

                        <div style={{ display: 'grid', gap: '24px' }}>
                            {[
                                { title: 'Seamless Automation', desc: 'Sync inventory, orders, and customer data with your existing ERP or CRM systems.', icon: 'pi-sync' },
                                { title: 'Role-Based Security', desc: 'Manage access with personal API keys and fine-grained permissions for Admins and Resellers.', icon: 'pi-lock' }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginTop: '2px' }}>
                                        <i className={`pi ${item.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default APIIntegration;
