import React from 'react';

const Terms = () => {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>

            <div style={{
                position: 'absolute',
                top: '5%',
                right: '5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Terms & <span className="gradient-text">Conditions</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Harap baca syarat dan ketentuan kami dengan seksama untuk kenyamanan bersama.
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
                    <div style={{ padding: '32px', background: '#fef2f2', borderRadius: '24px', border: '1px solid #fee2e2', marginBottom: '3rem' }}>
                        <h4 style={{ color: '#dc2626', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i className="pi pi-exclamation-triangle"></i>
                            Perhatian Penting
                        </h4>
                        <ul style={{ paddingLeft: '20px', color: '#991b1b', fontSize: '0.95rem' }}>
                            <li style={{ marginBottom: '8px' }}>Segala masalah yang timbul bukanlah tanggung jawab emarts.id. Hal tersebut sepenuhnya menjadi tanggung jawab pembuat situs web.</li>
                            <li style={{ marginBottom: '8px' }}>Kami hanya menyediakan layanan untuk penjualan yang sah/legal menurut hukum yang berlaku.</li>
                            <li style={{ marginBottom: '8px' }}>Jika Anda melanggar aturan, situs web Anda akan diturunkan secara paksa, dan tidak akan ada pengembalian dana (refund).</li>
                            <li style={{ marginBottom: '8px' }}>Kami melarang keras peniruan atau duplikasi desain situs web ini. Kami tidak segan untuk melakukan klaim hukum atas pelanggaran hak intelektual.</li>
                        </ul>
                    </div>

                    <div style={{ display: 'grid', gap: '3rem' }}>
                        <section>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Ketentuan Layanan</h3>
                            <p>
                                Selamat datang di emarts.id. Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini.
                                Emarts.id berafiliasi dengan <strong>Aisbir Cloud Nusantara</strong>.
                            </p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>1. Lisensi</h3>
                            <p>
                                Kecuali dinyatakan lain, Emarts.id dan/atau pemberi lisensinya memiliki hak kekayaan intelektual atas semua materi di situs ini.
                                Anda dapat mengakses ini untuk penggunaan pribadi dengan batasan yang telah ditetapkan.
                            </p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>2. Tanggung Jawab Pengguna</h3>
                            <p>
                                Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun dan untuk semua aktivitas yang terjadi.
                                Segera beri tahu kami jika mengetahui adanya pelanggaran keamanan.
                            </p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Kebijakan Privasi</h3>
                            <p>
                                Privasi Anda penting bagi kami. Kami hanya meminta informasi pribadi saat kami benar-benar membutuhkannya untuk memberikan layanan,
                                dengan cara yang adil dan sah.
                            </p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem' }}>Retensi Data</h3>
                            <p>
                                Kami menyimpan informasi selama diperlukan untuk memberikan layanan.
                                Data dilindungi secara komersial untuk mencegah kehilangan, pencurian, atau akses tidak sah.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;
