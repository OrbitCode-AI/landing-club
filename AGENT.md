# Landing Club - Agent Guide

## Architecture

Single-page scrolling landing site for a club or community organization.
`App.tsx` composes seven section components in page order:

| File | Role |
|------|------|
| `Header.tsx` | Navigation header |
| `Hero.tsx` | Full-width hero with overlay, tagline, and dual CTA buttons |
| `Events.tsx` | Upcoming events list; renders `EventCard` sub-components |
| `Team.tsx` | Team/leadership member showcase |
| `Gallery.tsx` | Photo/image gallery section |
| `Join.tsx` | Membership sign-up form + benefits list; uses `useVar` for persistent state |
| `Footer.tsx` | Site footer |

Each component accepts props with defaults. Data (events, team members,
benefits) is defined as typed arrays with defaults inside each file.

`Join.tsx` is the only stateful component, using `useVar('clubJoinName', '')`
and `useVar('clubJoinEmail', '')` from `orbitcode` so form input persists
across reloads.

## Styling

- Global reset and base typography in `styles.css` (imported by `App.tsx`).
- Each component has a co-located CSS file (`Hero.css`, `Events.css`, etc.).
- Plain CSS class selectors with component-prefixed names (e.g. `.event-card`,
  `.join-form`, `.hero-overlay`). No CSS modules, no Tailwind.
- System font stack; smooth scroll enabled globally.

## Extension Points

- Add a section by creating `SectionName.tsx` + `SectionName.css` and inserting
  it into the render tree in `App.tsx`.
- Customize content by passing props; all text and data arrays have defaults.
- To persist more form fields, use `useVar(key, default)` from `orbitcode`
  (see `Join.tsx` for the pattern).

## Constraints

- Anchor links (`#join`, `#events`) depend on section `id` attributes --
  keep IDs in sync when renaming or reordering sections.
