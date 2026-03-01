import { useVar } from 'orbitcode'
import './Join.css'

interface JoinProps {
  title?: string
  benefits?: string[]
}

const defaultBenefits = [
  'Access to all weekly events and activities',
  'Member-only workshops and training sessions',
  'Connect with like-minded individuals',
  'Discounts on tournaments and merchandise',
]

function Join({ title = 'Become a Member', benefits = defaultBenefits }: JoinProps) {
  const [name, setName] = useVar('clubJoinName', '')
  const [email, setEmail] = useVar('clubJoinEmail', '')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    alert(`Welcome to the club, ${name}! Check your email for next steps.`)
    setName('')
    setEmail('')
  }

  return (
    <section id="join" className="join">
      <div className="join-container">
        <div className="join-content">
          <h2 className="join-title">{title}</h2>
          <p className="join-subtitle">Join our community and unlock exclusive benefits:</p>
          <ul className="join-benefits">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className="benefit-check">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <form className="join-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Sign Up Today</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onInput={e => setName((e.target as HTMLInputElement).value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onInput={e => setEmail((e.target as HTMLInputElement).value)}
            required
          />
          <button type="submit">Join the Club</button>
          <p className="form-note">Free membership • No commitment required</p>
        </form>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function JoinPreview() {
  return (
    <div className="preview-container">
      <Join />
    </div>
  )
}

export { Join }
