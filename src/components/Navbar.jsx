import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar glass animate-fade-in-up" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
            <div className="container" style={{ height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}>
                    <img 
                        src="https://id-cdn.aisbirnusantara.com/emarts-bucket/emarts.png" 
                        alt="EMARTS Logo" 
                        style={{ height: '30px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                    />
                </Link>
                
                <div className="nav-links hide-mobile" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <a href="/#features" style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>Features</a>
                    <a href="/#pricing" style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>Pricing</a>
                    <a href="/#ai-training" style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>Process</a>
                    <a href="/#api-integration" style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text-main)', textDecoration: 'none' }}>API</a>
                </div>

                <div className="nav-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <a href="https://portal.aisbirnusantara.com" target="_blank" rel="noopener noreferrer">
                        <Button label="Login" className="p-button-text p-button-sm hide-mobile" style={{ fontSize: '0.85rem' }} />
                    </a>
                    <a href="/#pricing">
                        <Button label="Get Started" className="p-button-sm p-button-raised" style={{ background: 'var(--primary-color)', border: 'none', fontSize: '0.8rem', padding: '6px 14px' }} />
                    </a>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .hide-mobile {
                        display: none !important;
                    }
                    .container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
