import { useVar } from 'orbitcode'
import './Header.css'

interface HeaderProps {
  name?: string
  links?: { label: string; href: string }[]
}

const defaultLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join', href: '#join' },
]

function Header({ name = 'Club Name', links = defaultLinks }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useVar('clubMenuOpen', false)

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="header-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">{name}</span>
        </a>
        <button
          className={`header-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

// Default export renders component in isolation for preview
export default function HeaderPreview() {
  return (
    <div className="preview-container">
      <Header />
    </div>
  )
}

export { Header }
