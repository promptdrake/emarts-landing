import React from 'react';
import { Button } from 'primereact/button';

const ReadyToGo = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '120px 0',
            background: 'url("https://id-cdn.aisbirnusantara.com/emarts-bucket/kikis.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden'
        }}>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
                zIndex: 1
            }}></div>


            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <span style={{
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '8px 20px',
                        borderRadius: '100px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        border: '1px solid rgba(255,255,255,0.2)',
                        marginBottom: '2rem',
                        display: 'inline-block',
                        letterSpacing: '2px'
                    }}>
                        FINAL STEP
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}>
                        1, 2, 3 <br /> Ready to <span style={{ color: 'var(--primary-color)' }}>Go Public</span>
                    </h2>

                    <p style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.6
                    }}>
                        Stop dreaming and start selling. EMARTS takes your vision from local configuration to a global sales machine in record time. Your audience is waiting.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            label="Get Started"
                            icon="pi pi-bolt"
                            className="p-button-lg"
                            style={{
                                padding: '20px 40px',
                                borderRadius: '100px',
                                fontSize: '1.25rem',
                                fontWeight: 800,
                                background: 'white',
                                border: 'none',
                                color: 'var(--surface-900)',
                                boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                            }}
                            onClick={() => window.location.href = "https://portal.aisbirnusantara.com"} />
                    </div>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '100px',
                background: 'linear-gradient(to top, var(--surface-900), transparent)',
                zIndex: 3
            }}></div>
        </section>
    );
};

export default ReadyToGo;
