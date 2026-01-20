import './Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
}

function Hero({
  title = 'Welcome to Our Club',
  subtitle = 'Building community through shared passion',
  tagline = 'Join 500+ members in making a difference',
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href="#join" className="hero-btn primary">Join Us</a>
          <a href="#events" className="hero-btn secondary">Upcoming Events</a>
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function HeroPreview() {
  return (
    <div className="preview-container">
      <Hero />
    </div>
  );
}

export { Hero };
