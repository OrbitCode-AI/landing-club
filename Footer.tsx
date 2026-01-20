import './Footer.css';

interface FooterProps {
  name?: string;
}

function Footer({ name = 'Club Name' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">⚡ {name}</span>
          <p className="footer-tagline">Building community since 2020</p>
        </div>
        <div className="footer-links">
          <a href="#events">Events</a>
          <a href="#team">Team</a>
          <a href="#gallery">Gallery</a>
          <a href="#join">Join</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Discord">DC</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Default export renders component in isolation for preview
export default function FooterPreview() {
  return (
    <div className="preview-container">
      <Footer />
    </div>
  );
}

export { Footer };
