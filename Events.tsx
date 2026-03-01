import './Events.css'

interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
}

const defaultEvents: Event[] = [
  {
    title: 'Weekly Meetup',
    date: 'Every Tuesday',
    time: '6:00 PM',
    location: 'Main Hall',
    description: 'Join us for our regular weekly gathering with activities and discussions.',
  },
  {
    title: 'Annual Tournament',
    date: 'March 15',
    time: '10:00 AM',
    location: 'Sports Complex',
    description: 'Our biggest event of the year with prizes and refreshments.',
  },
  {
    title: 'Workshop: Getting Started',
    date: 'March 22',
    time: '2:00 PM',
    location: 'Room 101',
    description: 'Perfect for newcomers! Learn the basics and meet other members.',
  },
]

interface EventCardProps {
  event: Event
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="event-card">
      <div className="event-date-badge">
        <span className="event-time">{event.time}</span>
        <span className="event-day">{event.date}</span>
      </div>
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-location">📍 {event.location}</p>
        <p className="event-description">{event.description}</p>
      </div>
    </article>
  )
}

interface EventsProps {
  title?: string
  events?: Event[]
}

function Events({ title = 'Upcoming Events', events = defaultEvents }: EventsProps) {
  return (
    <section id="events" className="events">
      <div className="events-container">
        <h2 className="section-title">{title}</h2>
        <div className="events-list">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function EventsPreview() {
  return (
    <div className="preview-container">
      <Events />
    </div>
  )
}

export { Events, EventCard }
export type { Event }
