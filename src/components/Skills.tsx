const skillCategories = [
  {
    title: '☁️ Technical Skills',
    items: [
      'AWS (EC2, S3, Lambda)',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Infrastructure as Code',
      'DevOps & CI/CD',
      'Cloud Security',
      'Workflow Automation',
      'System Monitoring',
    ],
  },
  {
    title: '🎨 Design & UI Skills',
    items: [
      'UI/UX Design',
      'Visual Design',
      'Wireframing',
      'Storyboarding',
      'User Flow Mapping',
      'Process Flow Design',
      'Figma',
      'Canva',
    ],
  },
  {
    title: '💼 Soft Skills',
    items: [
      'Problem Solving',
      'Cross-team Collaboration',
      'Time Management',
      'Critical Thinking',
      'Written Communication',
      'Adaptability',
      'Attention to Detail',
      'Self-directed Learning',
    ],
  },
  {
    title: '🛠️ Software Proficiencies',
    items: [
      'Microsoft Office Suite',
      'Google Workspace',
      'Notion / Trello / Asana',
      'Slack',
      'Zoom / Loom',
      'Zapier',
      'GitHub',
      'VS Code',
    ],
  },
  {
    title: '🌐 Languages',
    items: [
      'English (Professional)',
      'Filipino / Tagalog (Native)',
      'Bisaya / Cebuano',
    ],
  },
  {
    title: '🔧 VA Services',
    items: [
      'Cloud Setup & Management',
      'Email & Calendar Management',
      'Tech Troubleshooting',
      'Data Entry & Organization',
      'Social Media Support',
      'Research & Reporting',
    ],
  },
]

const languageIcons = [
  { icon: '🐍', name: 'Python' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🐘', name: 'PHP' },
  { icon: '🎯', name: 'Laravel' },
  { icon: '⚛️', name: 'React' },
  { icon: '🔥', name: 'Svelte' },
  { icon: '🚀', name: 'Express JS' },
]

function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label">What I Bring</div>
        <h2 className="section-title">
          Core Skills <span>&</span> Services
        </h2>
        <p className="section-desc">
          A unique combination of cloud engineering mastery and virtual
          assistant capabilities - giving clients technical depth alongside
          operational support.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3>{category.title}</h3>
              {category.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>

        <h3 className="specialized-services-title">Core Languages & Frameworks</h3>
        <div className="language-marquee" aria-label="Core languages and frameworks">
          <div className="language-marquee-track">
            {[...languageIcons, ...languageIcons].map((item, index) => (
              <div className="language-pill" key={`${item.name}-${index}`}>
                <span className="language-pill-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="language-marquee-fade language-marquee-fade-left" aria-hidden="true"></div>
          <div className="language-marquee-fade language-marquee-fade-right" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}

export default Skills
