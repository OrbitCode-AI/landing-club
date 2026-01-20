import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const defaultMembers: TeamMember[] = [
  { name: 'Alex Johnson', role: 'President', avatar: '👤' },
  { name: 'Sam Williams', role: 'Vice President', avatar: '👤' },
  { name: 'Jordan Smith', role: 'Treasurer', avatar: '👤' },
  { name: 'Casey Brown', role: 'Secretary', avatar: '👤' },
];

interface MemberCardProps {
  member: TeamMember;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="member-card">
      <div className="member-avatar">{member.avatar}</div>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
    </div>
  );
}

interface TeamProps {
  title?: string;
  members?: TeamMember[];
}

function Team({ title = 'Meet Our Team', members = defaultMembers }: TeamProps) {
  return (
    <section id="team" className="team">
      <div className="team-container">
        <h2 className="section-title">{title}</h2>
        <div className="team-grid">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Default export renders component in isolation for preview
export default function TeamPreview() {
  return (
    <div className="preview-container">
      <Team />
    </div>
  );
}

export { Team, MemberCard };
export type { TeamMember };
