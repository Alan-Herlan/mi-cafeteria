import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2c1a0b',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: '2rem',
      }}
    >
      <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
        © 2025 Café Aromático. Todos los derechos reservados por casicompila.
      </p>

      <div style={{ fontSize: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#4267B2', transition: 'transform 0.3s' }}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#E1306C', transition: 'transform 0.3s' }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5491123456789"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#25D366', transition: 'transform 0.3s' }}
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


