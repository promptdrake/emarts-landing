import React from 'react';

const CookiePolicy = () => {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
            {/* Background Glows to match Main Page */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Cookie <span className="gradient-text">Policy</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        How we use cookies to improve your experience on EMARTS.ID.
                    </p>
                </div>

                <div className="glass" style={{ 
                    padding: '60px', 
                    borderRadius: '40px', 
                    background: 'white', 
                    boxShadow: 'var(--shadow-2xl)',
                    border: '1px solid var(--surface-200)',
                    lineHeight: 1.8,
                    color: 'var(--text-main)'
                }}>
                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>1. What are cookies?</h3>
                        <p>
                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                            They help the website recognize your device and remember information about your visit.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>2. How we use cookies</h3>
                        <p>We use cookies for several reasons, including:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Necessary Cookies:</strong> Required for the website to function correctly (e.g., authentication, security).</li>
                            <li style={{ marginBottom: '10px' }}><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site so we can improve it.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Functionality Cookies:</strong> Remember your preferences and settings.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>3. Your Choices</h3>
                        <p>
                            Most web browsers allow you to control cookies through their settings. 
                            However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>4. Contact Us</h3>
                        <p>
                            If you have any questions about our use of cookies, please contact our support team at 
                            <a href="mailto:support@aisbirnusantara.com" style={{ color: 'var(--primary-color)', fontWeight: 600, marginLeft: '5px' }}>
                                support@aisbirnusantara.com
                            </a>.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default CookiePolicy;
