import {
  BadgeAlert,
  Camera,
  Clapperboard,
  Code2,
  FileSearch,
  Globe2,
  Megaphone,
  Music2,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Video,
} from 'lucide-react'

export const company = {
  name: 'FLUX Digital',
  email: 'hello@shieldx.lk',
  phoneDisplay: '+94 76 270 0777',
  phoneHref: '+94762700777',
  location: 'Colombo, Sri Lanka',
}

export const trustPrinciples = [
  'No password, OTP, or recovery-code collection',
  'Ownership verification before any case work',
  'Written scope and fee before remediation',
  'Response commitments, never platform-result guarantees',
]

export const serviceHubs = [
  {
    slug: 'emergency-reputation-rescue',
    navLabel: 'Rescue',
    eyebrow: 'Emergency reputation & account rescue',
    title: 'Recover control without compromising your security.',
    summary:
      'A confidential, evidence-led route for hacked accounts, restrictions, impersonation, harmful content, and post-incident hardening.',
    icon: ShieldCheck,
    accent: '#00F0FF',
    primaryCta: { label: 'Start a case assessment', to: '/emergency-reputation-rescue/book-case-assessment' },
    secondaryCta: { label: 'Read recovery terms', to: '/legal/recovery-service-terms' },
    proof: ['Independent agency', 'Official and lawful routes', 'Ownership check required'],
    forItems: [
      'Account owners who can document ownership or authority',
      'People and organizations facing a time-sensitive digital incident',
      'Teams that want a written assessment before committing to remediation',
    ],
    notFor: [
      'Requests to bypass platform security or impersonate an owner',
      'Anyone seeking a guaranteed platform decision',
      'Cases that require passwords, OTPs, or recovery codes to proceed',
    ],
    deliverables: [
      'Evidence checklist and risk triage',
      'Ownership and authority verification',
      'Official pathway map with realistic dependencies',
      'Written assessment, options, and next-step scope',
      'Optional monitoring and security-hardening plan',
    ],
    process: ['Submit safely', 'Verify ownership', 'Assess evidence', 'Issue written pathway', 'Authorize scoped work'],
    portfolio:
      'Case evidence is handled confidentially. Publishable examples use anonymized facts only after written client approval.',
    pricing:
      'Preliminary case assessment: LKR 3,000. Remediation, monitoring, or legal coordination is quoted separately after assessment.',
    exclusions: [
      'No guaranteed recovery, reinstatement, removal, or monetization outcome',
      'No access to private platform systems or unofficial contacts',
      'No work that violates platform rules, law, or third-party rights',
    ],
    reviewStandard:
      'We publish client feedback only when consent, engagement scope, and the relevant date range can be documented.',
    faqs: [
      {
        q: 'Can FLUX Digital guarantee recovery or removal?',
        a: 'No. Third-party platforms and rights holders control those decisions. FLUX Digital can guarantee only its own assessment, communication, and agreed work.',
      },
      {
        q: 'What should I never send?',
        a: 'Never send a password, OTP, backup code, recovery code, or full payment-card information. The assessment asks only for evidence needed to understand and verify the case.',
      },
      {
        q: 'What does the assessment payment cover?',
        a: 'It covers preliminary investigation and a written case assessment. It does not buy or guarantee remediation or a platform outcome.',
      },
    ],
  },
  {
    slug: 'cinematic-aerial-production',
    navLabel: 'Production',
    eyebrow: 'Cinematic media & aerial production',
    title: 'Create the story people remember.',
    summary:
      'Commercial films, hospitality stories, event coverage, drone imagery, and short-form cutdowns built around a clear campaign objective.',
    icon: Clapperboard,
    accent: '#73F7FF',
    primaryCta: { label: 'Plan a commercial shoot', to: '/contact?intent=production' },
    secondaryCta: { label: 'Explore production packages', to: '/packages#production' },
    proof: ['Written production scope', 'Rights-aware workflow', 'Permit and weather planning'],
    forItems: [
      'Hotels and resorts building a premium booking story',
      'Brands planning a campaign or product launch',
      'Event and wedding teams needing a coordinated capture plan',
    ],
    notFor: [
      'Productions without confirmed location or talent permissions',
      'Briefs that depend on misleading or unlicensed material',
      'Projects with an unsafe flight or production plan',
    ],
    deliverables: [
      'Creative brief and shot architecture',
      'Ground and aerial capture plan',
      'Hero edit plus format-specific cutdowns',
      'Music, talent, location, and asset rights checklist',
      'Delivery matrix for web, paid media, and social',
    ],
    process: ['Define objective', 'Confirm scope and rights', 'Pre-produce', 'Capture', 'Edit and deliver'],
    portfolio:
      'Portfolio publication is permission-based. Deliverables are presented with the brief, production scope, and release date.',
    pricing:
      'Production packages are planning baselines and require a location, crew, travel, permit, and rights review before a binding quote.',
    exclusions: [
      'Travel, permits, talent, licensing, and ad spend unless listed in the quote',
      'Unapproved flight areas or unsafe weather operations',
      'Unlimited revisions or raw footage unless explicitly scoped',
    ],
    reviewStandard:
      'Every showcased project identifies the agreed output and publication date; performance outcomes are shown only with a defined source.',
    faqs: [
      {
        q: 'Are drone permissions included?',
        a: 'Permission requirements depend on the location and flight plan. FLUX Digital confirms responsibilities and costs in writing during pre-production.',
      },
      {
        q: 'Do packages include travel and talent?',
        a: 'Only when the written quote says so. Planning prices exclude variable travel, permits, talent, licensing, and accommodation costs.',
      },
      {
        q: 'Can one shoot supply several channels?',
        a: 'Yes. The shot list can be designed for a hero film, vertical reels, stills, landing pages, and paid-media variants.',
      },
    ],
  },
  {
    slug: 'ai-video-studio',
    navLabel: 'AI Studio',
    eyebrow: 'Responsible AI video studio',
    title: 'Move from an idea to a campaign system.',
    summary:
      'AI-assisted ads, visualizers, teasers, prompt art, and hybrid live-action workflows with written consent and clear content provenance.',
    icon: Sparkles,
    accent: '#35C9FF',
    primaryCta: { label: 'Brief the AI studio', to: '/contact?intent=ai-studio' },
    secondaryCta: { label: 'Read our AI disclosure', to: '/legal/ai-use-disclosure' },
    proof: ['Written likeness consent', 'No deceptive impersonation', 'Synthetic-content labeling'],
    forItems: [
      'Brands that need a repeatable creative testing pipeline',
      'Artists planning visualizers, teasers, or hybrid music videos',
      'Campaign teams with cleared brand, likeness, and source assets',
    ],
    notFor: [
      'Unauthorized voice or likeness cloning',
      'Deceptive impersonation, fraud, or undisclosed manipulation',
      'Use of supplied assets without documented rights',
    ],
    deliverables: [
      'Creative direction and generation plan',
      'Rights and consent checklist',
      'AI-assisted video or visual asset set',
      'Human edit, quality control, and format exports',
      'Disclosure notes for channels that require labeling',
    ],
    process: ['Validate rights', 'Develop concepts', 'Prototype', 'Human edit and QC', 'Label and deliver'],
    portfolio:
      'Examples identify material AI assistance and are published only when the client has approved the work for display.',
    pricing:
      'AI and hybrid production prices vary with duration, shot complexity, licensed inputs, generation volume, and revision scope.',
    exclusions: [
      'Unauthorized deepfakes or misleading endorsements',
      'Rights clearance for assets the client warrants it owns',
      'Platform acceptance or campaign-performance guarantees',
    ],
    reviewStandard:
      'Client feedback is paired with a disclosed project type. We do not present generated demonstrations as paid client work.',
    faqs: [
      {
        q: 'Will you clone a voice or likeness?',
        a: 'Only with documented authorization from the person or authorized rights holder, and never for deceptive impersonation.',
      },
      {
        q: 'Will AI-generated content be labeled?',
        a: 'FLUX Digital provides disclosure guidance and labels content where the channel, law, contract, or campaign context requires it.',
      },
      {
        q: 'Can AI work with live-action footage?',
        a: 'Yes. Hybrid workflows can combine cleared live-action material with AI-assisted scenes, transitions, cleanup, or visual development.',
      },
    ],
  },
  {
    slug: 'web-growth-distribution',
    navLabel: 'Growth',
    eyebrow: 'Web, growth & distribution',
    title: 'Build the system that turns attention into action.',
    summary:
      'Conversion websites, landing pages, search, social, paid media, and artist smart links connected through clear measurement.',
    icon: Globe2,
    accent: '#00AFFF',
    primaryCta: { label: 'Plan a growth project', to: '/contact?intent=growth' },
    secondaryCta: { label: 'View packages', to: '/packages#growth' },
    proof: ['Scope before spend', 'First-party measurement', 'No invented performance claims'],
    forItems: [
      'Teams with a defined commercial objective and accountable owner',
      'Brands ready to connect creative, landing pages, and measurement',
      'Artists who need distribution onboarding and a focused launch path',
    ],
    notFor: [
      'Guaranteed ranking or revenue requests',
      'Campaigns using deceptive claims or unlicensed creative',
      'Projects without access to the required owned business assets',
    ],
    deliverables: [
      'Conversion-focused site or landing-page architecture',
      'Search, social, or paid-media campaign plan',
      'Measurement events and reporting definitions',
      'Creative and content production matrix',
      'Optional distribution onboarding and artist smart link',
    ],
    process: ['Define outcome', 'Audit the journey', 'Build', 'Launch with measurement', 'Optimize from evidence'],
    portfolio:
      'Growth work is documented with a baseline, date range, measurement source, and the specific contribution FLUX Digital made.',
    pricing:
      'Engagement pricing is confirmed after scope. Media spend, platform fees, licenses, and distribution charges are shown separately.',
    exclusions: [
      'Guaranteed rankings, revenue, reach, or return on ad spend',
      'Media spend and third-party fees unless explicitly included',
      'Claims that cannot be supported by the client or campaign data',
    ],
    reviewStandard:
      'Published outcomes must include a baseline, measurement window, source, and enough context to avoid misleading attribution.',
    faqs: [
      {
        q: 'Do you guarantee SEO rankings or ad return?',
        a: 'No. Search engines, auctions, markets, and customer behavior are outside any agency’s control. FLUX Digital commits to the agreed work and transparent measurement.',
      },
      {
        q: 'Is ad spend included?',
        a: 'No, unless a proposal explicitly says otherwise. Media spend and platform fees are separated from FLUX Digital service fees.',
      },
      {
        q: 'Can you connect the website and campaigns?',
        a: 'Yes. The service is designed to connect message, creative, landing experience, analytics events, and iteration.',
      },
    ],
  },
]

export const serviceDetails = [
  {
    path: '/emergency-reputation-rescue/hacked-facebook-instagram',
    hub: 'emergency-reputation-rescue',
    icon: BadgeAlert,
    eyebrow: 'Account access incident',
    title: 'Hacked Facebook or Instagram account?',
    summary: 'Document the incident safely and start with an ownership-verified assessment.',
    deliverables: ['Access and incident timeline', 'Ownership evidence checklist', 'Official recovery pathway map'],
  },
  {
    path: '/emergency-reputation-rescue/youtube-monetization-appeals',
    hub: 'emergency-reputation-rescue',
    icon: Video,
    eyebrow: 'YouTube policy & monetization',
    title: 'Understand the restriction before you appeal.',
    summary: 'A structured review of notices, channel ownership, policy context, and available official appeal routes.',
    deliverables: ['Notice and policy review', 'Evidence gap list', 'Appeal-readiness assessment'],
  },
  {
    path: '/emergency-reputation-rescue/ad-account-restrictions',
    hub: 'emergency-reputation-rescue',
    icon: Megaphone,
    eyebrow: 'Advertising account incident',
    title: 'Restricted ad account? Start with the evidence.',
    summary: 'Map the business assets, notices, access roles, and official review paths without unsafe credential sharing.',
    deliverables: ['Asset and role map', 'Restriction timeline', 'Official review pathway'],
  },
  {
    path: '/emergency-reputation-rescue/sensitive-content-removal',
    hub: 'emergency-reputation-rescue',
    icon: FileSearch,
    eyebrow: 'Sensitive content response',
    title: 'Use lawful routes to address harmful content.',
    summary: 'Evidence preservation, rights analysis, and platform-specific pathways for content that may violate law, rights, or policy.',
    deliverables: ['URL and evidence register', 'Rights and policy pathway map', 'Tracked-request scope'],
  },
  {
    path: '/cinematic-aerial-production/hotels-resorts',
    hub: 'cinematic-aerial-production',
    icon: Camera,
    eyebrow: 'Hospitality production',
    title: 'Turn a property into a booking story.',
    summary: 'Ground, aerial, vertical, and landing-page assets designed around the guest journey.',
    deliverables: ['Guest-story architecture', 'Ground and aerial shot plan', 'Channel delivery matrix'],
  },
  {
    path: '/cinematic-aerial-production/weddings-events',
    hub: 'cinematic-aerial-production',
    icon: Video,
    eyebrow: 'Events & weddings',
    title: 'Capture the day without losing the feeling.',
    summary: 'A coordinated capture and edit plan for hero films, highlights, and social-ready moments.',
    deliverables: ['Event coverage plan', 'Hero and highlight edit scope', 'Delivery timeline'],
  },
  {
    path: '/cinematic-aerial-production/commercial-video',
    hub: 'cinematic-aerial-production',
    icon: Clapperboard,
    eyebrow: 'Commercial production',
    title: 'Build one campaign idea across every format.',
    summary: 'Commercial video production connected to cutdowns, landing pages, and paid-media requirements.',
    deliverables: ['Creative treatment', 'Production plan', 'Master and cutdown matrix'],
  },
  {
    path: '/cinematic-aerial-production/drone-photography',
    hub: 'cinematic-aerial-production',
    icon: Plane,
    eyebrow: 'Aerial capture',
    title: 'Plan the flight before the camera leaves the ground.',
    summary: 'Location-aware aerial photo and video with written responsibilities for permissions, weather, and safety.',
    deliverables: ['Flight and location plan', 'Permission responsibility matrix', 'Edited aerial selects'],
  },
  {
    path: '/ai-video-studio/ai-ad-creative',
    hub: 'ai-video-studio',
    icon: Sparkles,
    eyebrow: 'AI-assisted advertising',
    title: 'Create more testable ideas without losing control.',
    summary: 'A consent-aware workflow for rapid concepts, variants, and human-finished ad creative.',
    deliverables: ['Concept matrix', 'AI-assisted variants', 'Human-edited platform exports'],
  },
  {
    path: '/ai-video-studio/ai-music-videos',
    hub: 'ai-video-studio',
    icon: Music2,
    eyebrow: 'AI music visuals',
    title: 'Give the release a visual world of its own.',
    summary: 'Visualizers, teasers, and hybrid music videos built from authorized artist and label assets.',
    deliverables: ['Visual direction', 'Master video or visualizer', 'Teaser cutdowns'],
  },
  {
    path: '/ai-video-studio/responsible-ai',
    hub: 'ai-video-studio',
    icon: ShieldCheck,
    eyebrow: 'Responsible AI',
    title: 'Consent, provenance, and disclosure are part of the creative.',
    summary: 'How FLUX Digital handles likeness, voice, supplied assets, synthetic content, and client approvals.',
    deliverables: ['Consent checklist', 'Asset warranty record', 'Disclosure guidance'],
  },
  {
    path: '/web-growth-distribution/website-development',
    hub: 'web-growth-distribution',
    icon: Code2,
    eyebrow: 'Conversion web development',
    title: 'Build a faster path from interest to action.',
    summary: 'Responsive websites and landing pages designed around intent, performance, accessibility, and measurement.',
    deliverables: ['Information architecture', 'Responsive implementation', 'Analytics event map'],
  },
  {
    path: '/web-growth-distribution/seo-growth',
    hub: 'web-growth-distribution',
    icon: Search,
    eyebrow: 'Search & growth',
    title: 'Make discoverability measurable.',
    summary: 'Technical, content, and authority work documented against a baseline rather than a ranking promise.',
    deliverables: ['Technical audit', 'Content opportunity map', 'Measurement baseline'],
  },
  {
    path: '/web-growth-distribution/paid-advertising',
    hub: 'web-growth-distribution',
    icon: Megaphone,
    eyebrow: 'Paid media',
    title: 'Connect the ad, landing page, and evidence.',
    summary: 'Google and Meta campaign systems with separated media spend and clearly defined measurement.',
    deliverables: ['Campaign architecture', 'Creative testing plan', 'Reporting definitions'],
  },
  {
    path: '/web-growth-distribution/music-distribution',
    hub: 'web-growth-distribution',
    icon: Music2,
    eyebrow: 'Artist distribution',
    title: 'Give every release a clear destination.',
    summary: 'Distribution onboarding, smart links, release assets, and a focused campaign path.',
    deliverables: ['Distribution checklist', 'Artist smart-link page', 'Launch content matrix'],
  },
]

export const packages = [
  {
    id: 'privacy-cleanup',
    category: 'Rescue',
    title: 'Executive Digital Privacy & Brand Cleanup',
    description: 'A staged route from exposure mapping to tracked action and ongoing protection.',
    tiers: [
      {
        name: 'Audit – Exposure Map',
        lkr: '75,000',
        usd: '250',
        items: ['Audit of up to 25 URLs', 'Evidence checklist and pathway map', '60-minute strategy call', '14-day action plan'],
      },
      {
        name: 'Sprint – Cleanup Action',
        lkr: '225,000',
        usd: '750',
        items: ['Everything in Audit', 'Up to 10 tracked requests', '30-day case management', 'Weekly status update'],
      },
      {
        name: 'Shield – Executive Protection',
        lkr: '600,000',
        usd: '2,000',
        items: ['Up to 30 tracked items', '90-day monitoring', 'Security audit', 'Crisis playbook'],
      },
    ],
  },
  {
    id: 'production',
    category: 'Production',
    title: 'Luxury Hotel & Resort Cinematic Visual Suite',
    description: 'Hospitality production tiers spanning a booking story, a property experience, and a campaign library.',
    tiers: [
      {
        name: 'Essential – Booking Story',
        lkr: '250,000',
        usd: '1,250',
        items: ['Half-day shoot', 'Hero film', '3 vertical reels', 'Booking landing page'],
      },
      {
        name: 'Signature – Property Experience',
        lkr: '550,000',
        usd: '2,750',
        items: ['2-day shoot', '4K/6K drone and ground capture', 'Property film and 8 reels', 'One 360-degree tour point'],
      },
      {
        name: 'Destination – Campaign Library',
        lkr: '1,250,000',
        usd: '6,000',
        items: ['3-day shoot', 'Brand film and 30-second ad', 'Microsite', '30-day ad management, excluding spend'],
      },
    ],
  },
  {
    id: 'artist-launchpad',
    category: 'AI + Distribution',
    title: 'AI-Driven Artist & Music Launchpad',
    description: 'Release infrastructure connected to an authorized, clearly disclosed visual campaign.',
    tiers: [
      {
        name: 'Single – Release Ready',
        lkr: '120,000',
        usd: '450',
        items: ['Distribution onboarding', 'AI visualizer or teaser', 'Smart-link page'],
      },
      {
        name: 'Campaign – Visual Release',
        lkr: '280,000',
        usd: '950',
        items: ['AI-directed music video', '6 teasers', 'Smart-link landing page'],
      },
      {
        name: 'Label – Launch System',
        lkr: '650,000',
        usd: '2,200',
        items: ['Premium AI/hybrid video', '12 short-form assets', 'Release microsite'],
      },
    ],
  },
  {
    id: 'content-engine',
    category: 'AI + Growth',
    title: 'Automated AI Content Engine',
    description: 'A monthly creative operating cadence with human quality control.',
    recurring: true,
    tiers: [
      {
        name: 'Starter – Always On',
        lkr: '150,000',
        usd: '600',
        items: ['8 AI-assisted shorts', '8 visuals', '30-day content calendar'],
      },
      {
        name: 'Growth – Campaign Factory',
        lkr: '320,000',
        usd: '1,250',
        items: ['16 shorts', '12 visuals', '1 ad campaign setup, excluding spend'],
      },
      {
        name: 'Scale – Creative Operating System',
        lkr: '650,000',
        usd: '2,500',
        items: ['30 shorts', '20 visuals', '4 performance-ad concepts'],
      },
    ],
  },
  {
    id: 'enterprise-security',
    category: 'Security',
    title: 'Enterprise Account Security & Backup Blueprint',
    description: 'Asset inventory, access hardening, incident planning, and continuity drills.',
    tiers: [
      {
        name: 'Essential – Asset Baseline',
        lkr: '180,000',
        usd: '700',
        items: ['Inventory of 10 assets', 'MFA and recovery checklist', 'Incident playbook'],
      },
      {
        name: 'Resilience – Business Hardening',
        lkr: '450,000',
        usd: '1,750',
        items: ['Inventory of 30 assets', 'Access-role cleanup', '2 incident playbooks', '90-day advisory'],
      },
      {
        name: 'Enterprise – Multi-Brand Continuity',
        lkr: '950,000',
        usd: '3,750',
        items: ['Inventory of 75 assets', 'Risk register', '2 live tabletop drills', '6-month quarterly reviews'],
      },
    ],
  },
]

export const proofLedger = [
  {
    value: 25,
    suffix: '',
    label: 'URLs in Exposure Map audit',
    definition: 'Maximum URLs reviewed in the Audit tier.',
    source: 'Published package scope',
    period: 'July 2026',
  },
  {
    value: 10,
    suffix: '',
    label: 'Tracked requests in Cleanup Sprint',
    definition: 'Maximum tracked requests in the Sprint tier.',
    source: 'Published package scope',
    period: 'July 2026',
  },
  {
    value: 90,
    suffix: ' days',
    label: 'Executive monitoring window',
    definition: 'Monitoring period included in the Shield tier.',
    source: 'Published package scope',
    period: 'July 2026',
  },
  {
    value: 0,
    suffix: '',
    label: 'Passwords or OTPs requested',
    definition: 'Credential collection prohibited by FLUX Digital intake policy.',
    source: 'Service safety policy',
    period: 'Current',
  },
]

export const caseStudies = [
  {
    id: 'case-framework-01',
    label: 'Anonymized case-study standard',
    title: 'Every result needs context before it becomes a claim.',
    summary:
      'FLUX Digital case studies will state the baseline, date range, evidence source, work performed, dependencies, and client publication consent.',
    facts: ['Baseline recorded', 'Date range disclosed', 'Source named', 'Client consent logged'],
    status: 'Publication framework ready',
  },
  {
    id: 'case-framework-02',
    label: 'Recovery evidence',
    title: 'Platform-controlled outcomes are never represented as guarantees.',
    summary:
      'Recovery and removal cases distinguish FLUX Digital actions from decisions made by platforms, hosts, search engines, or rights holders.',
    facts: ['Official route identified', 'Submission evidence retained', 'Platform decision separated', 'No result guarantee'],
    status: 'Awaiting approved case evidence',
  },
  {
    id: 'case-framework-03',
    label: 'Growth evidence',
    title: 'Performance reporting begins with a defined measurement window.',
    summary:
      'Growth cases identify the analytics source, starting point, campaign period, media spend, and attribution limits.',
    facts: ['Source identified', 'Baseline locked', 'Spend separated', 'Attribution qualified'],
    status: 'Awaiting approved case evidence',
  },
]

export const faqs = [
  ...serviceHubs[0].faqs,
  {
    q: 'Is FLUX Digital affiliated with Meta, Google, YouTube, or another platform?',
    a: 'No. FLUX Digital is an independent agency. Work uses lawful, official platform and rights-enforcement routes.',
  },
  {
    q: 'What happens after a preliminary assessment?',
    a: 'You receive a written assessment. If FLUX Digital can lawfully assist further, a separate scope and fee quotation is provided before work begins.',
  },
  {
    q: 'Are the package prices final?',
    a: 'No. They are launch-planning baselines and require scope, cost, margin, tax, travel, rights, and capacity validation before a binding offer.',
  },
  ...serviceHubs[1].faqs.slice(0, 2),
  ...serviceHubs[2].faqs.slice(0, 2),
  ...serviceHubs[3].faqs.slice(0, 2),
]

export const legalDocuments = {
  privacy: {
    title: 'Privacy notice',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'This draft explains the data FLUX Digital expects to handle through website enquiries and preliminary case assessments. It must be reviewed against actual operating systems and Sri Lankan law before launch.',
    sections: [
      ['Information we ask for', 'Contact details, case type, incident timeline, links, non-secret evidence, ownership indicators, consent records, and communication preferences. Do not submit passwords, OTPs, recovery codes, or full payment-card data.'],
      ['Why we use it', 'To respond to enquiries, verify authority, assess a case, prevent abuse, prepare a written scope, maintain security, and meet legal obligations.'],
      ['Sharing and processors', 'Data may be handled by approved hosting, form, payment, communication, and professional-service providers under appropriate terms. The final notice must name the processors actually used.'],
      ['Retention and security', 'Retention periods must match the final CRM, evidence, payment, and legal workflows. Access should be limited to authorized personnel and recorded where appropriate.'],
      ['Your choices', 'You may ask FLUX Digital about access, correction, deletion, or another applicable privacy right by emailing the address shown on this site. Some records may need to be retained for legal or security reasons.'],
    ],
  },
  terms: {
    title: 'Website terms',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'These draft terms govern use of the FLUX Digital website. A signed proposal or service agreement governs paid work and prevails where it conflicts with general website content.',
    sections: [
      ['No platform affiliation', 'FLUX Digital is an independent agency and is not Meta, Google, YouTube, TikTok, or another third-party platform.'],
      ['No outcome guarantee', 'Website information does not promise recovery, reinstatement, removal, ranking, revenue, reach, platform approval, or another third-party decision.'],
      ['Acceptable use', 'You may not use the site or submit information to facilitate unauthorized access, impersonation, infringement, harassment, fraud, or unlawful activity.'],
      ['Intellectual property', 'FLUX Digital website content and brand assets may not be copied or reused except as allowed by law or written permission. Client-supplied material remains subject to the client’s rights warranties.'],
      ['Changes and governing terms', 'The final version must identify the contracting legal entity, governing law, dispute terms, and effective date after counsel review.'],
    ],
  },
  'recovery-service-terms': {
    title: 'Recovery service terms',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'These terms are specific to account rescue, content removal, impersonation, restriction, appeal, and related assessment work.',
    sections: [
      ['Preliminary assessment only', 'The LKR 3,000 assessment fee covers preliminary investigation and a written assessment. It does not buy or guarantee recovery, reinstatement, removal, or a platform decision.'],
      ['Ownership verification', 'FLUX Digital may pause or decline work unless the requester can establish ownership, authority, or an applicable legal right.'],
      ['Credential safety', 'FLUX Digital will not request passwords, OTPs, backup codes, or recovery codes. Clients remain responsible for account and device security.'],
      ['Third-party control', 'Platforms, hosts, registrars, search engines, rights holders, and authorities control their own decisions and timelines. FLUX Digital is responsible only for the work expressly listed in the written scope.'],
      ['Separate remediation scope', 'If further lawful work is available, FLUX Digital provides a separate scope and fee. No further work begins until it is accepted and any required payment is made.'],
    ],
  },
  'refund-cancellation': {
    title: 'Refund & cancellation policy',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'This draft separates payment for an assessment from later project work. Final refund windows and statutory rights require counsel and payment-provider review.',
    sections: [
      ['Assessment payment', 'Once substantive assessment work has begun, the assessment fee is generally allocated to that work. If FLUX Digital cancels before work begins, the assessment fee should be refunded.'],
      ['No outcome-based refund promise', 'A platform’s refusal, delay, or other third-party decision does not by itself mean the assessment was not delivered.'],
      ['Project cancellations', 'Production, growth, security, and remediation cancellations are governed by the signed proposal, including committed crew, travel, media, licensing, and third-party costs.'],
      ['How to request review', 'Contact FLUX Digital with the case or project ID, payer name, and reason. Never email full card details or credentials.'],
    ],
  },
  'ai-use-disclosure': {
    title: 'AI use disclosure',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'FLUX Digital uses AI only within an agreed creative or operational scope and applies human review, rights checks, and disclosure practices.',
    sections: [
      ['Consent and likeness', 'A person’s likeness or voice may be synthesized only with documented authorization from that person or an authorized rights holder.'],
      ['Prohibited use', 'FLUX Digital does not create deceptive impersonation, unauthorized deepfakes, fraudulent endorsements, or material intended to mislead people about a real event or speaker.'],
      ['Client-supplied assets', 'Clients must have the rights and permissions needed for prompts, footage, recordings, logos, music, images, and other supplied inputs.'],
      ['Human review', 'AI-assisted outputs receive human creative and quality review before delivery. Limitations or material artifacts are addressed within the agreed revision scope.'],
      ['Disclosure', 'Synthetic or materially altered content is labeled when required by law, contract, platform policy, or the reasonable expectations of the audience.'],
    ],
  },
  'content-rights': {
    title: 'Content rights policy',
    updated: 'Draft for counsel review – 24 July 2026',
    intro:
      'This draft describes the rights information FLUX Digital needs before it publishes, edits, distributes, removes, or submits a claim concerning content.',
    sections: [
      ['Client warranties', 'Clients must have the authority, licenses, permissions, or legal basis needed for supplied footage, images, music, copy, marks, data, locations, and talent.'],
      ['Removal requests', 'A request to remove or restrict content must identify the applicable ownership, privacy, policy, contractual, or legal basis. FLUX Digital may decline a request that cannot be supported.'],
      ['Production releases', 'Talent, location, aerial, music, stock, and other releases are allocated in the written scope. Nothing is assumed to be cleared merely because a file was supplied.'],
      ['Portfolio use', 'FLUX Digital does not publish identifiable client work, quotes, or case details without the permissions required by the engagement and applicable rights.'],
      ['Claims and disputes', 'If a rights concern is raised, FLUX Digital may pause use or delivery while authority and evidence are reviewed. Final notice and dispute steps require counsel review.'],
    ],
  },
}

export const assessmentSteps = ['Incident', 'Access', 'Ownership', 'Evidence', 'Contact', 'Consent', 'Payment', 'Confirmation']

export const caseStatuses = [
  'Received',
  'Ownership Check',
  'Under Assessment',
  'More Evidence Needed',
  'Assessment Issued',
  'Quote Offered',
  'Authorized',
  'Submitted / Active',
  'Monitoring',
  'Resolved / Closed',
]
