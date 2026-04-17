import React from 'react';

const AITraining = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--surface-50)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Accents */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                    display: 'flex', 
                    gap: '64px', 
                    alignItems: 'center', 
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                    {/* Text Column */}
                    <div 
                        style={{ flex: '1 1 400px' }}
                        data-aos="fade-right"
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                            How we <span className="gradient-text">train the AI</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Our intelligent engine uses a proprietary conversational workflow to translate your business logic into a functional ecommerce store. 
                            As shown in the architectural diagram, we validate every shop niche, payment gateway, and asset requirements in real-time to ensure a 0% configuration error rate.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)', fontWeight: 700 }}>
                                <i className="pi pi-shield"></i>
                                <span>Verified Workflow</span>
                            </div>
                            <div style={{ width: '1px', height: '20px', background: 'var(--surface-300)' }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                                <i className="pi pi-check-circle"></i>
                                <span>Production Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div 
                        data-aos="fade-left"
                        data-aos-delay="200"
                        style={{ 
                            flex: '1 1 500px',
                            background: 'white', 
                            padding: '12px', 
                            borderRadius: '32px', 
                            boxShadow: 'var(--shadow-2xl)',
                            border: '1px solid var(--surface-200)',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            background: '#f8fafc',
                            borderRadius: '20px',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://id-cdn.aisbirnusantara.com/emarts-bucket/Screenshot%202026-04-17%20001237.png"
                                alt="AI Training Workflow Diagram"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AITraining;
