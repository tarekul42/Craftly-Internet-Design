import { FeedPost, Orchestrator, WorkbenchItem } from "@/types";

export const feedData: FeedPost[] = [
  {
    id: "1",
    type: "project",
    creator: "Julian Voss",
    signature: "Julian",
    timestamp: "2024-04-24T08:00:00Z",
    name: "Aura Architect",
    tagline: "Neural spatial reasoning for high-end digital lookbooks.",
    description: "An orchestrator that bypasses standard web grids to generate asymmetrical, editorial layouts based on brand 'vibe' tokens.",
    heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Standard SaaS templates strip the luxury 'soul' from high-fashion digital experiences.",
      solution: "Aura uses an LLM to interpret brand adjectives into CSS Grid coordinates, creating a unique 'non-repetitive' UI.",
      impact: "40% increase in dwell time for boutique e-commerce clients."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Semantic Analysis", detail: "LLM parses brand adjectives (e.g., 'Ethereal', 'Brutalist')." },
        { id: "2", label: "Grid Synthesis", detail: "Translates adjectives into CSS fractional unit arrays." },
        { id: "3", label: "Component Orchestration", detail: "Dynamic injection of React components into generated nodes." }
      ]
    },
    metrics: { acknowledgements: 142, audits: 12, forks: 8 },
    replies: [
      {
        id: "r1",
        creator: "Sarah Chen",
        signature: "S.Chen",
        content: "The semantic mapping approach is brilliant. How do you handle overlapping grid constraints?",
        timestamp: "2h ago"
      },
      {
        id: "r2",
        creator: "Julian Voss",
        signature: "Julian",
        content: "We use a priority-weighting system for the vibe tokens. If 'Brutalist' conflicts with 'Ethereal', we lean into the raw structure but soften the borders.",
        timestamp: "1h ago"
      }
    ]
  },
  {
    id: "e1",
    type: "experience",
    creator: "David Kim",
    signature: "D.Kim",
    timestamp: "2024-04-24T09:30:00Z",
    content: "I've been thinking a lot about the friction between generative AI output and rigid design systems. If we let the AI generate the components, we lose the brand consistency. If we force the AI into our components, we lose the magic. The sweet spot is letting the AI orchestrate the *layout* while using our predefined *atoms*. Building a showcase for this concept next week.",
    tags: ["architecture", "thoughts", "design-systems"],
    metrics: { acknowledgements: 89, audits: 3, forks: 1 },
    replies: [
      {
        id: "r3",
        creator: "Elena Rossi",
        signature: "E. Rossi",
        content: "Exactly this. We treat the AI as the art director, not the manufacturer.",
        timestamp: "30m ago"
      }
    ]
  },
  {
    id: "2",
    type: "project",
    creator: "Elena Rossi",
    signature: "E. Rossi",
    timestamp: "2024-04-24T10:15:00Z",
    name: "Quantify.AI",
    tagline: "High-stakes financial anomaly detection via Zero-UI principles.",
    description: "A professional monitoring tool that remains invisible until a 3-sigma deviation is detected, presenting data with architectural precision.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    caseStudy: {
      problem: "Traditional dashboards lead to cognitive fatigue and missed fiscal opportunities.",
      solution: "Quantify uses an AI 'Gatekeeper' that suppresses 99% of data, only surfacing critical alerts in a high-contrast monochrome view.",
      impact: "Reduced decision-making latency by 12 seconds per incident."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Data Sifting", detail: "Continuous ingestion of real-time market volatility indices." },
        { id: "2", label: "Noise Suppression", detail: "Heuristic filtering of non-impactful market movements." },
        { id: "3", label: "Executive Render", detail: "Generation of 1:1 B&W summary for C-suite approval." }
      ]
    },
    metrics: { acknowledgements: 205, audits: 8, forks: 45 },
    replies: [
      {
        id: "r4",
        creator: "Marcus Thorne",
        signature: "M.Thorne",
        content: "12 seconds is huge in HFT. Is the AI Gatekeeper running on-edge?",
        timestamp: "45m ago"
      }
    ]
  },
  {
    id: "3",
    type: "project",
    creator: "Marcus Thorne",
    signature: "M.Thorne",
    timestamp: "2024-04-24T11:20:00Z",
    name: "Lumen Logic",
    tagline: "Attention-aware dynamic lighting systems.",
    description: "A framework that adjusts UI illumination and contrast in real-time based on eye-tracking data and cognitive load signals.",
    heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Static UI brightness causes eye strain during long engineering sessions.",
      solution: "Lumen implements a 'Focus Heatmap' that selectively brightens active logic branches while dimming background noise.",
      impact: "Reported 25% reduction in digital eye strain across beta users."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Gaze Tracking", detail: "Integration with web-cam based pupil dilation sensors." },
        { id: "2", label: "Contrast Ramping", detail: "Dynamic adjustment of CSS custom properties for luminosity." },
        { id: "3", label: "Logic Dimming", detail: "Recursive opacity reduction for inactive component trees." }
      ]
    },
    metrics: { acknowledgements: 512, audits: 34, forks: 89 }
  },
  {
    id: "e4",
    type: "experience",
    creator: "Alex Rivera",
    signature: "A.Riv",
    timestamp: "2024-04-24T12:00:00Z",
    content: "Refactoring the monolithic authentication service today. Sometimes the most beautiful architecture is just deleting 5,000 lines of over-engineered middleware and replacing it with a clean, stateless token exchange. Less code is always the correct answer.",
    attachment: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["refactoring", "performance", "minimalism"],
    metrics: { acknowledgements: 342, audits: 18, forks: 5 }
  },
  {
    id: "4",
    type: "project",
    creator: "Sarah Chen",
    signature: "S.Chen",
    timestamp: "2024-04-24T13:15:00Z",
    isLead: true,
    name: "Grid Ghost",
    tagline: "The invisible architecture of asymmetrical chaos.",
    description: "An experimental layout engine that uses Poisson-disk sampling to distribute UI elements in a way that feels organic yet mathematically balanced.",
    heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Standard 12-column grids are too predictable for high-end editorial content.",
      solution: "Ghost generates 'force fields' around elements to ensure breathing room without rigid alignment.",
      impact: "Used by three 'Agency of the Year' winners for 2024 portfolios."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Point Generation", detail: "Poisson-disk algorithm for high-entropy distribution." },
        { id: "2", label: "Constraint Solving", detail: "Verlet integration to prevent element overlap." },
        { id: "3", label: "SVG Pathing", detail: "Automatic generation of connecting 'logic threads' between nodes." }
      ]
    },
    metrics: { acknowledgements: 890, audits: 56, forks: 120 }
  },
  {
    id: "e5",
    type: "experience",
    creator: "Julian Voss",
    signature: "Julian",
    timestamp: "2024-04-24T14:00:00Z",
    content: "The industry is obsessed with 'User Friendly'. We should be striving for 'Expert Empowering'. A tool that takes 10 hours to master but allows for 10x the output is infinitely more valuable than a tool that takes 10 seconds to master but caps your creativity.",
    tags: ["philosophy", "tools", "productivity"],
    metrics: { acknowledgements: 1205, audits: 42, forks: 15 }
  },
  {
    id: "5",
    type: "project",
    creator: "David Kim",
    signature: "D.Kim",
    timestamp: "2024-04-24T15:30:00Z",
    name: "Mono-Morphism",
    tagline: "Redefining depth through 0% color.",
    description: "A comprehensive UI kit and generator that achieves glassmorphism and depth entirely through varying levels of noise, grain, and high-contrast shadows.",
    heroImage: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Color-coded state management often fails in high-glare or accessibility-critical environments.",
      solution: "Morphism uses 'Tactile Shadows' and 'Grain Density' to represent priority and state.",
      impact: "Passed Triple-A accessibility standards without using a single hex code outside of #000 and #FFF."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Grain Synthesis", detail: "Procedural SVG filter generation for surface texture." },
        { id: "2", label: "Luma Balancing", detail: "Automatic shadow-weight calculation based on background luminance." },
        { id: "3", label: "Motion Blur", detail: "CSS-only directional blur for state transitions." }
      ]
    },
    metrics: { acknowledgements: 312, audits: 9, forks: 67 }
  },
  {
    id: "e6",
    type: "experience",
    creator: "Elena Rossi",
    signature: "E. Rossi",
    timestamp: "2024-04-24T16:45:00Z",
    content: "If your AI agent doesn't have a 'Stop' button that is physically larger than its 'Go' button, you aren't building an orchestrator, you're building a liability. Determinism is the highest form of luxury in the age of generative noise.",
    tags: ["safety", "ethics", "engineering"],
    metrics: { acknowledgements: 678, audits: 89, forks: 2 }
  },
  {
    id: "6",
    type: "project",
    creator: "Alex Rivera",
    signature: "A.Riv",
    timestamp: "2024-04-24T17:20:00Z",
    name: "The Architect's Quill",
    tagline: "Context-aware technical documentation that writes itself.",
    description: "An orchestrator that watches your Git commits and generates blueprint-style technical diagrams and high-level summaries in real-time.",
    heroImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
    caseStudy: {
      problem: "Documentation is always the first casualty of fast-paced development cycles.",
      solution: "Quill uses AST parsing and an LLM to maintain a living, breathing map of the system's logic.",
      impact: "Reduced onboarding time for new engineers by an average of 3 days."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "AST Ingestion", detail: "Real-time monitoring of TypeScript Abstract Syntax Trees." },
        { id: "2", label: "Relation Mapping", detail: "Graph-based identification of dependency clusters." },
        { id: "3", label: "Natural Summary", detail: "LLM-driven explanation of 'Why' instead of just 'What'." }
      ]
    },
    metrics: { acknowledgements: 456, audits: 21, forks: 12 }
  },
  {
    id: "e7",
    type: "experience",
    creator: "Marcus Thorne",
    signature: "M.Thorne",
    timestamp: "2024-04-24T18:00:00Z",
    content: "Just spent 4 hours optimizing a single hover transition. Some might call it bike-shedding, but in a world of 60fps displays, a 150ms cubic-bezier curve is the difference between a tool that feels like an extension of your hand and a tool that feels like a chore.",
    tags: ["ui", "motion", "craftmanship"],
    metrics: { acknowledgements: 234, audits: 5, forks: 0 }
  },
  {
    id: "7",
    type: "project",
    creator: "Sarah Chen",
    signature: "S.Chen",
    timestamp: "2024-04-24T19:30:00Z",
    isLead: true,
    name: "Latency Layer",
    tagline: "Visualizing the 'Thought Process' of AI.",
    description: "A UI wrapper for streaming LLM outputs that turns latency into an aesthetic feature through typographic pulsing and 'thinking' skeletons.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    caseStudy: {
      problem: "Users perceive AI as 'broken' during the 2-3 second initial inference window.",
      solution: "Latency Layer uses that time to display the semantic clusters the AI is currently navigating.",
      impact: "90% reduction in user-aborted requests."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Token Streamer", detail: "Real-time interceptor for OpenAI/Anthropic stream chunks." },
        { id: "2", label: "Visual Heartbeat", detail: "SVG-based pulse synchronized with token arrival frequency." },
        { id: "3", label: "Cluster Reveal", detail: "Progressive disclosure of the model's top-k logprobs." }
      ]
    },
    metrics: { acknowledgements: 1200, audits: 12, forks: 450 }
  },
  {
    id: "e8",
    type: "experience",
    creator: "David Kim",
    signature: "D.Kim",
    timestamp: "2024-04-24T20:15:00Z",
    content: "The best design system is the one that prevents you from making bad decisions. We've moved our spacing tokens into a strict prime-number sequence. If the gap isn't 2, 3, 5, 7, 11, or 13 pixels, the linter errors. Chaos is the enemy of professional software.",
    tags: ["systems", "linting", "perfection"],
    metrics: { acknowledgements: 89, audits: 14, forks: 3 }
  },
  {
    id: "8",
    type: "project",
    creator: "Julian Voss",
    signature: "Julian",
    timestamp: "2024-04-24T21:00:00Z",
    name: "Blueprint Engine",
    tagline: "React components as architectural schematics.",
    description: "A documentation tool that renders your React components as literal blueprints, including wire-frame dimensions and prop-type annotations.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Designers and developers speak different languages when discussing layout.",
      solution: "Engine provides a unified 'Technical View' that satisfies both the aesthetic and the engineering requirements.",
      impact: "Zero 'back-and-forth' on padding/margin specs for the last 3 projects."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Prop Extraction", detail: "Automatic discovery of Component interfaces." },
        { id: "2", label: "Schematic Render", detail: "Canvas-based drawing of component boundaries." },
        { id: "3", label: "Annotation layer", detail: "Dynamic labeling of responsive breakpoints." }
      ]
    },
    metrics: { acknowledgements: 670, audits: 15, forks: 88 }
  },
  {
    id: "e9",
    type: "experience",
    creator: "Alex Rivera",
    signature: "A.Riv",
    timestamp: "2024-04-24T22:30:00Z",
    content: "Stop using 'Smart' as a synonym for 'Opaque'. If I can't see the logic flow that led to an AI recommendation, the recommendation is worthless to me as an engineer. Show me the weights or show me the door.",
    tags: ["transparency", "ai", "opinion"],
    metrics: { acknowledgements: 1540, audits: 112, forks: 1 }
  },
  {
    id: "9",
    type: "project",
    creator: "Elena Rossi",
    signature: "E. Rossi",
    timestamp: "2024-04-25T00:00:00Z",
    name: "Cognitive Load Balancer",
    tagline: "Traffic control for the human brain.",
    description: "A browser extension that monitors your interaction frequency and progressively simplifies website UIs as it detects rising cognitive load.",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c89e12076d22?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Information density is the leading cause of developer burnout.",
      solution: "Balancer hides 'Nice-to-have' features and simplifies typography as the user's stress markers rise.",
      impact: "15% increase in sustained focus periods during afternoon coding blocks."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Stress Heuristics", detail: "Monitoring click-velocity and scroll-jitter patterns." },
        { id: "2", label: "UI Decimation", detail: "Step-wise removal of non-critical DOM elements." },
        { id: "3", label: "Type Normalization", detail: "Switching to high-legibility fonts (Inter/Roboto Mono) automatically." }
      ]
    },
    metrics: { acknowledgements: 345, audits: 8, forks: 23 }
  },
  {
    id: "e10",
    type: "experience",
    creator: "Marcus Thorne",
    signature: "M.Thorne",
    timestamp: "2024-04-25T01:30:00Z",
    content: "Just built a custom CSS reset that only allows for 'system-ui' fonts. No Google Fonts, no Typekit, no overhead. The speed is intoxicating. If your site takes more than 200ms to be interactive, you're building a wall, not an experience.",
    tags: ["performance", "minimalism", "webdev"],
    metrics: { acknowledgements: 98, audits: 2, forks: 12 }
  },
  {
    id: "10",
    type: "project",
    creator: "Sarah Chen",
    signature: "S.Chen",
    timestamp: "2024-04-25T03:00:00Z",
    isLead: true,
    name: "Echo Chamber",
    tagline: "Simulating the long-term impact of AI bias.",
    description: "A visualization tool that runs 10,000 iterations of an AI model's output to show how small initial biases manifest into systemic failures.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    caseStudy: {
      problem: "Bias in AI is often invisible until it reaches a catastrophic scale.",
      solution: "Echo uses recursive sampling to 'fast-forward' the model's logic through 10 years of simulated use.",
      impact: "Used by two major ethics boards to vet new LLM deployments."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Seed Ingestion", detail: "Starting with standard benchmark datasets." },
        { id: "2", label: "Recursive Loop", detail: "Feeding model output back into its own training context." },
        { id: "3", label: "Bias Heatmap", detail: "Visualizing the divergence from the 'Ground Truth' over time." }
      ]
    },
    metrics: { acknowledgements: 2300, audits: 145, forks: 340 }
  },
  {
    id: "e11",
    type: "experience",
    creator: "Julian Voss",
    signature: "Julian",
    timestamp: "2024-04-25T04:30:00Z",
    content: "The future of the web isn't 'Responsive Design', it's 'Adaptive Context'. Why am I seeing the same layout on my 32-inch monitor that I see on my phone, just wider? The content should fundamentally change its density based on the available real estate.",
    tags: ["design", "future", "ux"],
    metrics: { acknowledgements: 456, audits: 12, forks: 5 }
  },
  {
    id: "11",
    type: "project",
    creator: "David Kim",
    signature: "D.Kim",
    timestamp: "2024-04-25T06:00:00Z",
    name: "Logic Lattice",
    tagline: "3D visualization of complex state machines.",
    description: "A WebGL-based orchestrator that maps your application's state transitions into a 3D lattice, allowing for visual debugging of race conditions.",
    heroImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Complex React/Redux states become impossible to reason about once they cross 50+ nodes.",
      solution: "Lattice creates a spatial 'Physicality' for state, making bugs visible as 'Kinks' in the lattice.",
      impact: "Reduced debugging time for complex state-sync issues by 40%."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "State Capture", detail: "Middleware to hook into every state transition." },
        { id: "2", label: "Lattice Mapping", detail: "Force-directed graph layout in 3D space." },
        { id: "3", label: "Anomaly Detection", detail: "Automatic highlighting of circular dependencies or 'Dead Nodes'." }
      ]
    },
    metrics: { acknowledgements: 560, audits: 23, forks: 110 }
  },
  {
    id: "e12",
    type: "experience",
    creator: "Alex Rivera",
    signature: "A.Riv",
    timestamp: "2024-04-25T07:15:00Z",
    content: "I've started treating my `node_modules` like a high-security prison. Every dependency gets an audit before it's allowed to run in production. If you can't explain what a package does in one sentence, you don't need it. Ship less, worry less.",
    tags: ["security", "minimalism", "devops"],
    metrics: { acknowledgements: 890, audits: 204, forks: 0 }
  },
  {
    id: "12",
    type: "project",
    creator: "Marcus Thorne",
    signature: "M.Thorne",
    timestamp: "2024-04-25T08:30:00Z",
    name: "Signal vs Noise",
    tagline: "High-fidelity audio-to-UI synthesis.",
    description: "An orchestrator that generates UI components based on the frequency spectrum of ambient noise, creating a workspace that 'dances' to your environment.",
    heroImage: "https://images.unsplash.com/photo-1514525253344-f814d0c9e583?q=80&w=2070&auto=format&fit=crop",
    caseStudy: {
      problem: "Static workspaces feel disconnected from the physical reality of the user's environment.",
      solution: "Signal uses FFT (Fast Fourier Transform) to map decibel levels to component scale and frequency to border-radius.",
      impact: "Users reported a 30% increase in 'Flow State' consistency when working with music-synced UIs."
    },
    implementation: {
      logicNodes: [
        { id: "1", label: "Audio Ingestion", detail: "Real-time Web Audio API stream processing." },
        { id: "2", label: "FFT Mapping", detail: "Spectral analysis to identify dominant frequency bands." },
        { id: "3", label: "Reactive Props", detail: "Binding component styles to audio-reactive state variables." }
      ]
    },
    metrics: { acknowledgements: 720, audits: 45, forks: 12 }
  }
];

export const orchestrators: Orchestrator[] = [
  {
    id: "o1",
    name: "Julian Voss",
    signature: "Julian",
    specialty: "Spatial Architect & Vibe Translation",
    status: "active",
    role: "engineer",
    metrics: { nodesBroadcasted: 42, forkRate: 850 }
  },
  {
    id: "o2",
    name: "Elena Rossi",
    signature: "E. Rossi",
    specialty: "High-Stakes Data Pipelines & Zero-UI",
    status: "active",
    role: "builder",
    metrics: { nodesBroadcasted: 18, forkRate: 1205 }
  },
  {
    id: "o3",
    name: "Marcus Thorne",
    signature: "M.Thorne",
    specialty: "Algorithmic Aesthetics & Motion",
    status: "dormant",
    role: "guest",
    metrics: { nodesBroadcasted: 8, forkRate: 340 }
  },
  {
    id: "o4",
    name: "Sarah Chen",
    signature: "S.Chen",
    specialty: "Edge-Compute & Build-Time Inference",
    status: "active",
    role: "engineer",
    metrics: { nodesBroadcasted: 56, forkRate: 2100 }
  },
  {
    id: "o5",
    name: "David Kim",
    signature: "D.Kim",
    specialty: "Component Governance & Systems",
    status: "active",
    role: "builder",
    metrics: { nodesBroadcasted: 112, forkRate: 450 }
  },
  {
    id: "o6",
    name: "Alex Rivera",
    signature: "A.Riv",
    specialty: "Middleware Reduction & Stateless Auth",
    status: "active",
    role: "guest",
    metrics: { nodesBroadcasted: 24, forkRate: 670 }
  }
];

export const workbenchData: WorkbenchItem[] = [
  {
    id: "w1",
    originalPost: feedData[0], // Aura Architect
    forkedAt: "2024-04-24T10:30:00Z",
    status: "integrating",
    notes: "The semantic mapping approach here is perfect for our new e-commerce client. Need to adapt the vibe tokens to support 'Industrial' instead of 'Ethereal'."
  },
  {
    id: "w2",
    originalPost: feedData[2], // Quantify.AI
    forkedAt: "2024-04-22T14:15:00Z",
    status: "review",
    notes: "Reviewing the zero-UI gatekeeper logic. If we can suppress 99% of our internal monitoring noise, our response times will drop significantly."
  }
];
