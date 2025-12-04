import welderCover from '../assets/welder-cover.svg'
import photographyCover from '../assets/photography-cover.svg'
import sculptureCover from '../assets/sculpture-cover.svg'

export const projects = [
  {
    title: 'Welder Dave',
    label: 'Tradesman portfolio',
    url: 'https://welderdave.co.uk/',
    description: 'A tradesman portfolio highlighting welding services with bold imagery and clear calls to action.',
    tools: ['WordPress', 'SEO', 'Responsive Design'],
    role: 'Design · Dev · Launch',
    impact: '+42% quote requests in 60 days',
    awards: 'Local business uplift',
    cover: welderCover,
    cta: 'Read the build',
    heroMedia: {
      type: 'image',
      src: welderCover,
      alt: 'Welding portfolio hero mockup',
    },
    stats: [
      { label: 'Conversion', value: '+42%' },
      { label: 'Lighthouse', value: '95 / 100' },
    ],
    challenge: {
      title: 'Translate gritty craftsmanship into a modern, trustworthy brand.',
      copy:
        'The client needed a site that felt as confident as their onsite work, while quickly routing visitors to quotes and services.',
    },
    solution: {
      title: 'Built a conversion-focused funnel with tactile visuals.',
      copy:
        'Balanced hero copy, service tiles, and proof points with a responsive layout designed for busy trade clients on mobile.',
      bullets: [
        'Custom WordPress theme with modular blocks',
        'Schema + SEO for local discovery',
        'Sticky request-a-quote CTA with inline validation',
      ],
    },
    results: {
      title: 'More calls, faster responses, happier customers.',
      copy: 'Organic traffic uptick paired with frictionless quote capture improved qualified leads and turnaround time.',
    },
    tech: ['WordPress', 'GSAP micro-interactions', 'Local SEO', 'Cloudflare'],
  },
  {
    title: 'Kirsty Doran Photography',
    label: 'Portfolio & booking',
    url: 'https://kirstydoranphotography.co.uk/',
    description: 'Photography showcase with immersive galleries and booking-friendly navigation.',
    tools: ['Photography CMS', 'UX Writing', 'Performance'],
    role: 'UX · UI · Frontend',
    impact: 'Bookings up 28% post-launch',
    awards: 'Editorial feature',
    cover: photographyCover,
    cta: 'See the gallery system',
    heroMedia: {
      type: 'image',
      src: photographyCover,
      alt: 'Photography portfolio preview',
    },
    stats: [
      { label: 'Engagement', value: '+31%' },
      { label: 'Accessibility', value: 'WCAG AA' },
    ],
    challenge: {
      title: 'Showcase high-res galleries without sacrificing speed.',
      copy:
        'Sessions were bouncing due to slow loads and unclear booking paths. The goal was to keep the art center stage while trimming friction.',
    },
    solution: {
      title: 'Immersive storytelling with pragmatic performance.',
      copy: 'Optimized image delivery, narrative captions, and a guided booking flow for weddings and editorials.',
      bullets: [
        'Preload strategy and lazy-loading galleries',
        'Tone-of-voice aligned call-to-actions',
        'Date availability prompts to speed inquiries',
      ],
    },
    results: {
      title: 'A portfolio that converts fans into clients.',
      copy:
        'Visitors spend longer in galleries and reach out with clearer intent, keeping admin light and conversations focused.',
    },
    tech: ['Headless CMS', 'Static generation', 'Lazy loading', 'Cloud image CDN'],
  },
  {
    title: 'AD Jenkins Sculpture',
    label: 'Artist showcase',
    url: 'https://adjenkinsculpture.co.uk/',
    description: 'Artist portfolio presenting sculpture collections with elegant typography and structure.',
    tools: ['Portfolio UX', 'Content Strategy', 'Accessibility'],
    role: 'Art direction · Dev',
    impact: '+3 min avg. session duration',
    awards: 'Gallery-ready polish',
    cover: sculptureCover,
    cta: 'Dive into the exhibit',
    heroMedia: {
      type: 'image',
      src: sculptureCover,
      alt: 'Sculpture gallery layout',
    },
    stats: [
      { label: 'Time on page', value: '+3m' },
      { label: 'Bounce rate', value: '-22%' },
    ],
    challenge: {
      title: 'Elevate the work without overshadowing it.',
      copy:
        'Needed to frame sculptures with an editorial feel, preserving detail while guiding collectors to inquire.',
    },
    solution: {
      title: 'Intentional curation that respects every piece.',
      copy: 'Built a calm, gallery-inspired grid with spotlight states and accessible navigation.',
      bullets: [
        'Section-driven narrative for each collection',
        'Keyboard-friendly lightboxes',
        'Warm gradients to complement raw materials',
      ],
    },
    results: {
      title: 'Collectors linger and explore deeper.',
      copy: 'Longer view times and improved contact quality signal the story-first presentation is working.',
    },
    tech: ['Vue + Vite', 'ARIA-driven navigation', 'Intersection observers', 'SVG textures'],
  },
]
