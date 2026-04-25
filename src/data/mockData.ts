import { FeedPost, Orchestrator, WorkbenchItem, UserRole } from "@/types";

export const feedDataByRole: Record<UserRole, FeedPost[]> = {
  engineer: [
    {
      id: "eng-p1",
      type: "project",
      creator: "Julian Voss",
      signature: "Julian",
      timestamp: "2024-04-24T08:00:00Z",
      isLead: true,
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
      metrics: { acknowledgements: 142, audits: 12, forks: 8 }
    },
    {
      id: "eng-e1",
      type: "experience",
      creator: "David Kim",
      signature: "D.Kim",
      timestamp: "2024-04-24T09:30:00Z",
      content: "I've been thinking about the friction between generative AI output and rigid design systems. If we let the AI generate the components, we lose brand consistency. If we force the AI into our components, we lose the magic. The sweet spot is letting the AI orchestrate the *layout* while using our predefined *atoms*.",
      tags: ["architecture", "thoughts", "design-systems"],
      metrics: { acknowledgements: 89, audits: 3, forks: 1 }
    },
    {
      id: "eng-p2",
      type: "project",
      creator: "Sarah Chen",
      signature: "S.Chen",
      timestamp: "2024-04-24T13:15:00Z",
      isLead: true,
      name: "Grid Ghost",
      tagline: "The invisible architecture of asymmetrical chaos.",
      description: "An experimental layout engine using Poisson-disk sampling to distribute UI elements in a way that feels organic yet mathematically balanced.",
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
      id: "eng-e2",
      type: "experience",
      creator: "Alex Rivera",
      signature: "A.Riv",
      timestamp: "2024-04-24T12:00:00Z",
      content: "Refactoring the monolithic authentication service today. Sometimes the most beautiful architecture is just deleting 5,000 lines of over-engineered middleware and replacing it with a clean, stateless token exchange. Less code is always the correct answer.",
      tags: ["refactoring", "performance", "minimalism"],
      metrics: { acknowledgements: 342, audits: 18, forks: 5 }
    },
    {
      id: "eng-p3",
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
      id: "eng-e3",
      type: "experience",
      creator: "Alex Rivera",
      signature: "A.Riv",
      timestamp: "2024-04-24T22:30:00Z",
      content: "Stop using 'Smart' as a synonym for 'Opaque'. If I can't see the logic flow that led to an AI recommendation, the recommendation is worthless to me as an engineer. Show me the weights or show me the door.",
      tags: ["transparency", "ai", "opinion"],
      metrics: { acknowledgements: 1540, audits: 112, forks: 1 }
    },
    {
      id: "eng-p4",
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
      id: "eng-e4",
      type: "experience",
      creator: "David Kim",
      signature: "D.Kim",
      timestamp: "2024-04-24T20:15:00Z",
      content: "The best design system is the one that prevents you from making bad decisions. We've moved our spacing tokens into a strict prime-number sequence. If the gap isn't 2, 3, 5, 7, 11, or 13 pixels, the linter errors. Chaos is the enemy of professional software.",
      tags: ["systems", "linting", "perfection"],
      metrics: { acknowledgements: 89, audits: 14, forks: 3 }
    }
  ],
  builder: [
    {
      id: "bld-p1",
      type: "project",
      creator: "Julian Voss",
      signature: "Julian",
      timestamp: "2024-04-24T08:00:00Z",
      isLead: true,
      name: "Aura Architect",
      tagline: "AI-powered editorial layouts for luxury brands.",
      description: "An app that generates unique, asymmetrical page layouts for fashion and lifestyle brands. Just describe your brand's vibe, and Aura creates a complete lookbook experience.",
      heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Boutique fashion brands spend $15K-$50K on custom website layouts that still look template-based.",
        solution: "Aura turns a simple brand description into a fully responsive, unique editorial layout in seconds.",
        impact: "40% longer visitor sessions on client stores. Average order value increased by 22%."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Brand Brief Input", detail: "User describes their brand style in natural language." },
          { id: "2", label: "Layout Generation", detail: "AI creates a unique CSS Grid-based layout from the brand description." },
          { id: "3", label: "Content Placement", detail: "Automatically arranges product images and copy into the generated layout." }
        ]
      },
      metrics: { acknowledgements: 142, audits: 12, forks: 8 }
    },
    {
      id: "bld-p2",
      type: "project",
      creator: "Elena Rossi",
      signature: "E. Rossi",
      timestamp: "2024-04-24T10:15:00Z",
      name: "Quantify.AI",
      tagline: "Smart monitoring that only alerts when it matters.",
      description: "A financial monitoring app that stays invisible 99% of the time and only surfaces critical market anomalies with clean, executive-ready summaries.",
      heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
      caseStudy: {
        problem: "Finance teams waste 3+ hours daily filtering through dashboards that are mostly noise.",
        solution: "Quantify uses AI to suppress non-critical data and only show what actually needs attention.",
        impact: "Reduced decision-making time by 12 seconds per incident. 80% fewer false alerts."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Data Connection", detail: "Connect your market data sources and set your thresholds." },
          { id: "2", label: "Smart Filtering", detail: "AI learns which patterns are noise vs. real signals." },
          { id: "3", label: "Executive Summary", detail: "One-click generation of clean, shareable reports." }
        ]
      },
      metrics: { acknowledgements: 205, audits: 8, forks: 45 }
    },
    {
      id: "bld-p3",
      type: "project",
      creator: "Sarah Chen",
      signature: "S.Chen",
      timestamp: "2024-04-24T19:30:00Z",
      isLead: true,
      name: "Latency Layer",
      tagline: "Turn AI loading time into a design feature.",
      description: "A UI wrapper for any AI chatbot or assistant that makes the 'thinking' phase visually engaging instead of frustrating. Shows users what the AI is processing in real-time.",
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      caseStudy: {
        problem: "Users abandon AI tools during the 2-3 second 'thinking' wait, perceiving them as broken.",
        solution: "Latency Layer displays beautiful, semantic visualizations during inference time.",
        impact: "90% fewer abandoned requests. User satisfaction scores rose from 3.2 to 4.7."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "AI Integration", detail: "Drop-in wrapper for OpenAI, Anthropic, or any streaming API." },
          { id: "2", label: "Visual Pulse", detail: "Animated indicator shows the AI is actively processing." },
          { id: "3", label: "Progress Reveal", detail: "Gradually shows topic clusters the AI is exploring." }
        ]
      },
      metrics: { acknowledgements: 1200, audits: 12, forks: 450 }
    },
    {
      id: "bld-p4",
      type: "project",
      creator: "David Kim",
      signature: "D.Kim",
      timestamp: "2024-04-24T15:30:00Z",
      name: "Mono-Morphism",
      tagline: "A UI kit that achieves depth using only black and white.",
      description: "A complete component library and design generator that creates glass-like depth, shadows, and layering effects using nothing but black, white, and grayscale textures.",
      heroImage: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Color-heavy UIs fail accessibility standards and look inconsistent across devices.",
        solution: "Morphism uses shadow depth, grain textures, and contrast to communicate hierarchy.",
        impact: "Passed WCAG AAA accessibility. Used by 200+ apps since launch."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Component Library", detail: "50+ black-and-white components ready to copy-paste." },
          { id: "2", label: "Shadow Generator", detail: "AI-adjusts shadow weight based on your background." },
          { id: "3", label: "Texture Engine", detail: "Adds grain and noise for tactile, premium-feeling surfaces." }
        ]
      },
      metrics: { acknowledgements: 312, audits: 9, forks: 67 }
    },
    {
      id: "bld-p5",
      type: "project",
      creator: "Elena Rossi",
      signature: "E. Rossi",
      timestamp: "2024-04-25T00:00:00Z",
      name: "Cognitive Load Balancer",
      tagline: "A browser extension that simplifies websites when you're overwhelmed.",
      description: "Monitors your browsing patterns and progressively simplifies page layouts as it detects stress or cognitive overload. Perfect for research-heavy workflows.",
      heroImage: "https://images.unsplash.com/photo-1504384308090-c89e12076d22?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Information-dense websites cause decision fatigue, especially during long work sessions.",
        solution: "The extension hides non-essential elements and increases whitespace as it detects overload.",
        impact: "15% increase in sustained focus. Users report 30% less screen fatigue."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Install & Set", detail: "One-click browser extension. No configuration needed." },
          { id: "2", label: "Adaptive UI", detail: "Dynamically simplifies any website based on your interaction patterns." },
          { id: "3", label: "Focus Mode", detail: "Strips pages to just the content you actually need." }
        ]
      },
      metrics: { acknowledgements: 345, audits: 8, forks: 23 }
    },
    {
      id: "bld-e1",
      type: "experience",
      creator: "Alex Rivera",
      signature: "A.Riv",
      timestamp: "2024-04-24T12:00:00Z",
      content: "Deleted 5,000 lines of middleware today and replaced it with a 200-line stateless auth flow. The app runs 40% faster and we have 80% fewer bugs. Sometimes the best feature you can build is the one you remove.",
      tags: ["productivity", "performance", "simplicity"],
      metrics: { acknowledgements: 342, audits: 18, forks: 5 }
    },
    {
      id: "bld-e2",
      type: "experience",
      creator: "Julian Voss",
      signature: "Julian",
      timestamp: "2024-04-24T14:00:00Z",
      content: "The industry chases 'User Friendly' but should chase 'Expert Empowering'. A tool that takes 10 hours to learn but produces 10x the output is infinitely more valuable than one that takes 10 seconds but caps your potential. Build for the top 10% of your users, not the bottom 90%.",
      tags: ["product-strategy", "tools", "growth"],
      metrics: { acknowledgements: 1205, audits: 42, forks: 15 }
    },
    {
      id: "bld-e3",
      type: "experience",
      creator: "Elena Rossi",
      signature: "E. Rossi",
      timestamp: "2024-04-24T16:45:00Z",
      content: "If your AI app doesn't have a clearly visible 'Stop' button, you're building a liability, not a product. Users need to feel in control. The most powerful AI tool is the one where the 'Off' switch is bigger than the 'On' switch.",
      tags: ["safety", "product-design", "trust"],
      metrics: { acknowledgements: 678, audits: 89, forks: 2 }
    }
  ],
  guest: [
    {
      id: "gst-p1",
      type: "project",
      creator: "Julian Voss",
      signature: "Julian",
      timestamp: "2024-04-24T08:00:00Z",
      isLead: true,
      name: "Aura Architect",
      tagline: "Create stunning layouts just by describing your style.",
      description: "Tell Aura what your brand feels like — 'minimal', 'bold', 'elegant' — and it generates a beautiful, unique website layout instantly. No design skills needed.",
      heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Getting a professional-looking website usually costs thousands and takes weeks.",
        solution: "Aura generates a complete, unique layout in seconds from a simple text description.",
        impact: "Used by over 500 small businesses. Average setup time: under 5 minutes."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Describe Your Brand", detail: "Just type a few words about your style." },
          { id: "2", label: "AI Creates Layout", detail: "Aura generates a unique arrangement based on your description." },
          { id: "3", label: "Drop in Your Content", detail: "Add your images and text into the ready-made layout." }
        ]
      },
      metrics: { acknowledgements: 142, audits: 12, forks: 8 }
    },
    {
      id: "gst-p2",
      type: "project",
      creator: "Sarah Chen",
      signature: "S.Chen",
      timestamp: "2024-04-24T19:30:00Z",
      isLead: true,
      name: "Latency Layer",
      tagline: "No more staring at loading screens with AI tools.",
      description: "Adds a beautiful, engaging visual layer to any AI chatbot so the waiting feels natural instead of annoying. You can see what the AI is 'thinking' about in real-time.",
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      caseStudy: {
        problem: "Waiting for AI responses feels slow and frustrating, even when it's only 2-3 seconds.",
        solution: "Latency Layer shows an elegant visualization during the wait, making it feel instant.",
        impact: "90% of users stopped abandoning AI conversations mid-response."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Wrap Your AI", detail: "Works with any AI chatbot — no technical setup." },
          { id: "2", label: "Beautiful Waiting", detail: "See a live preview of what the AI is processing." },
          { id: "3", label: "Seamless Reveal", detail: "Results appear naturally as the visualization completes." }
        ]
      },
      metrics: { acknowledgements: 1200, audits: 12, forks: 450 }
    },
    {
      id: "gst-p3",
      type: "project",
      creator: "David Kim",
      signature: "D.Kim",
      timestamp: "2024-04-24T15:30:00Z",
      name: "Mono-Morphism",
      tagline: "Beautiful black-and-white design components.",
      description: "A collection of clean, elegant UI components that use only black, white, and shadows to create depth. Perfect for minimalist websites, portfolios, and professional pages.",
      heroImage: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Colorful websites often look cluttered and unprofessional on different devices.",
        solution: "Mono-Morphism components use shadow and texture to create a premium feel without any color.",
        impact: "Passed all accessibility checks. Over 200 websites built with these components."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Browse Components", detail: "Cards, buttons, forms, navbars — all in black and white." },
          { id: "2", label: "Copy & Paste", detail: "Grab the code and drop it into your project." },
          { id: "3", label: "Looks Great Everywhere", detail: "Works perfectly on any device and screen size." }
        ]
      },
      metrics: { acknowledgements: 312, audits: 9, forks: 67 }
    },
    {
      id: "gst-p4",
      type: "project",
      creator: "Elena Rossi",
      signature: "E. Rossi",
      timestamp: "2024-04-25T00:00:00Z",
      name: "Cognitive Load Balancer",
      tagline: "A browser tool that declutters websites when you need focus.",
      description: "When you're overwhelmed with too many tabs and too much information, this browser extension quietly simplifies web pages so you can concentrate on what matters.",
      heroImage: "https://images.unsplash.com/photo-1504384308090-c89e12076d22?q=80&w=2070&auto=format&fit=crop",
      caseStudy: {
        problem: "Too much information on screen makes it hard to focus and get work done.",
        solution: "The extension detects when you're overwhelmed and automatically simplifies the page.",
        impact: "Users report 30% less screen fatigue and 15% longer focus sessions."
      },
      implementation: {
        logicNodes: [
          { id: "1", label: "Add to Browser", detail: "Install in one click. Works on Chrome, Firefox, and Safari." },
          { id: "2", label: "It Adapts to You", detail: "Automatically adjusts page complexity based on your usage." },
          { id: "3", label: "Focus Mode", detail: "Strip away everything except the content you need." }
        ]
      },
      metrics: { acknowledgements: 345, audits: 8, forks: 23 }
    },
    {
      id: "gst-e1",
      type: "experience",
      creator: "Julian Voss",
      signature: "Julian",
      timestamp: "2024-04-24T14:00:00Z",
      content: "I believe the best tools are the ones that respect your intelligence. Don't dumb things down — build tools that reward the time someone invests in learning them. That's how you create something people genuinely love using.",
      tags: ["philosophy", "tools", "craft"],
      metrics: { acknowledgements: 1205, audits: 42, forks: 15 }
    },
    {
      id: "gst-e2",
      type: "experience",
      creator: "Elena Rossi",
      signature: "E. Rossi",
      timestamp: "2024-04-24T16:45:00Z",
      content: "I built a rule for every AI product I create: the 'Stop' button must always be bigger and easier to find than the 'Start' button. If people don't feel in control, they won't trust the tool — no matter how smart it is.",
      tags: ["safety", "trust", "design"],
      metrics: { acknowledgements: 678, audits: 89, forks: 2 }
    },
    {
      id: "gst-e3",
      type: "experience",
      creator: "Marcus Thorne",
      signature: "M.Thorne",
      timestamp: "2024-04-24T18:00:00Z",
      content: "I spent 4 hours perfecting a single hover animation today. Some people might think that's excessive, but those tiny details are the difference between an app that feels alive and one that feels like a template. The details are the product.",
      tags: ["craftmanship", "design", "details"],
      metrics: { acknowledgements: 234, audits: 5, forks: 0 }
    },
    {
      id: "gst-e4",
      type: "experience",
      creator: "David Kim",
      signature: "D.Kim",
      timestamp: "2024-04-24T09:30:00Z",
      content: "The most overlooked feature in any app is consistency. When every spacing unit, every shadow, every transition follows the same rules, the entire experience feels premium — even if the user can't explain why. Consistency IS the design.",
      tags: ["design-systems", "consistency", "quality"],
      metrics: { acknowledgements: 89, audits: 3, forks: 1 }
    }
  ]
};

export const orchestratorsByRole: Record<UserRole, Orchestrator[]> = {
  engineer: [
    { id: "eng-o1", name: "Julian Voss", signature: "Julian", specialty: "Spatial Architecture & Vibe Translation", status: "active", role: "engineer", metrics: { nodesBroadcasted: 42, forkRate: 850 } },
    { id: "eng-o2", name: "Sarah Chen", signature: "S.Chen", specialty: "Edge Computing & Build-Time Inference", status: "active", role: "engineer", metrics: { nodesBroadcasted: 56, forkRate: 2100 } },
    { id: "eng-o3", name: "Alex Rivera", signature: "A.Riv", specialty: "Middleware Reduction & Stateless Systems", status: "active", role: "engineer", metrics: { nodesBroadcasted: 24, forkRate: 670 } },
    { id: "eng-o4", name: "David Kim", signature: "D.Kim", specialty: "Component Governance & Design Systems", status: "active", role: "engineer", metrics: { nodesBroadcasted: 112, forkRate: 450 } },
    { id: "eng-o5", name: "Elena Rossi", signature: "E. Rossi", specialty: "Zero-UI & Data Pipeline Architecture", status: "active", role: "engineer", metrics: { nodesBroadcasted: 18, forkRate: 1205 } },
    { id: "eng-o6", name: "Marcus Thorne", signature: "M.Thorne", specialty: "Algorithmic Aesthetics & Motion Systems", status: "dormant", role: "engineer", metrics: { nodesBroadcasted: 8, forkRate: 340 } }
  ],
  builder: [
    { id: "bld-o1", name: "Julian Voss", signature: "Julian", specialty: "Luxury Brand & Fashion Tech", status: "active", role: "builder", metrics: { nodesBroadcasted: 42, forkRate: 850 } },
    { id: "bld-o2", name: "Sarah Chen", signature: "S.Chen", specialty: "AI-Powered Developer Tools", status: "active", role: "builder", metrics: { nodesBroadcasted: 56, forkRate: 2100 } },
    { id: "bld-o3", name: "Elena Rossi", signature: "E. Rossi", specialty: "Enterprise SaaS & Analytics", status: "active", role: "builder", metrics: { nodesBroadcasted: 18, forkRate: 1205 } },
    { id: "bld-o4", name: "David Kim", signature: "D.Kim", specialty: "Design Systems & Accessibility", status: "active", role: "builder", metrics: { nodesBroadcasted: 112, forkRate: 450 } },
    { id: "bld-o5", name: "Alex Rivera", signature: "A.Riv", specialty: "Performance Optimization Tools", status: "active", role: "builder", metrics: { nodesBroadcasted: 24, forkRate: 670 } },
    { id: "bld-o6", name: "Marcus Thorne", signature: "M.Thorne", specialty: "Creative Tools & Motion Design", status: "dormant", role: "builder", metrics: { nodesBroadcasted: 8, forkRate: 340 } }
  ],
  guest: [
    { id: "gst-o1", name: "Julian Voss", signature: "Julian", specialty: "Layout & Brand Design", status: "active", role: "guest", metrics: { nodesBroadcasted: 42, forkRate: 850 } },
    { id: "gst-o2", name: "Sarah Chen", signature: "S.Chen", specialty: "AI & Machine Learning Apps", status: "active", role: "guest", metrics: { nodesBroadcasted: 56, forkRate: 2100 } },
    { id: "gst-o3", name: "Elena Rossi", signature: "E. Rossi", specialty: "Data & Analytics", status: "active", role: "guest", metrics: { nodesBroadcasted: 18, forkRate: 1205 } },
    { id: "gst-o4", name: "David Kim", signature: "D.Kim", specialty: "UI Kits & Design Resources", status: "active", role: "guest", metrics: { nodesBroadcasted: 112, forkRate: 450 } },
    { id: "gst-o5", name: "Alex Rivera", signature: "A.Riv", specialty: "Performance & Optimization", status: "active", role: "guest", metrics: { nodesBroadcasted: 24, forkRate: 670 } },
    { id: "gst-o6", name: "Marcus Thorne", signature: "M.Thorne", specialty: "Motion & Interaction Design", status: "dormant", role: "guest", metrics: { nodesBroadcasted: 8, forkRate: 340 } }
  ]
};

export const workbenchDataByRole: Record<UserRole, WorkbenchItem[]> = {
  engineer: [
    {
      id: "eng-w1",
      originalPost: feedDataByRole.engineer[0],
      forkedAt: "2024-04-24T10:30:00Z",
      status: "integrating",
      notes: "The semantic mapping approach is perfect for our new e-commerce client. Need to adapt the vibe tokens to support 'Industrial' instead of 'Ethereal'."
    },
    {
      id: "eng-w2",
      originalPost: feedDataByRole.engineer[2],
      forkedAt: "2024-04-22T14:15:00Z",
      status: "review",
      notes: "Reviewing the Poisson-disk distribution algorithm. Considering replacing the force-directed solver with a simpler constraint-based approach for our use case."
    },
    {
      id: "eng-w3",
      originalPost: feedDataByRole.engineer[6],
      forkedAt: "2024-04-23T09:00:00Z",
      status: "archived",
      notes: "Integrated the state visualization into our debugging pipeline. Works well for up to 100 nodes — starts lagging beyond that. Need to implement LOD."
    }
  ],
  builder: [
    {
      id: "bld-w1",
      originalPost: feedDataByRole.builder[0],
      forkedAt: "2024-04-24T10:30:00Z",
      status: "integrating",
      notes: "Adapting this for a client in the jewelry space. Need to add support for product gallery grids within the generated layouts."
    },
    {
      id: "bld-w2",
      originalPost: feedDataByRole.builder[2],
      forkedAt: "2024-04-23T16:00:00Z",
      status: "review",
      notes: "Testing as a wrapper for our customer support chatbot. Early results show 60% fewer 'is it broken?' tickets."
    },
    {
      id: "bld-w3",
      originalPost: feedDataByRole.builder[3],
      forkedAt: "2024-04-21T11:00:00Z",
      status: "archived",
      notes: "Used as the base for our company website redesign. Went live last week — client loved the minimal feel."
    }
  ],
  guest: [
    {
      id: "gst-w1",
      originalPost: feedDataByRole.guest[0],
      forkedAt: "2024-04-24T10:30:00Z",
      status: "review",
      notes: "This could work great for my portfolio. Love how simple it looks."
    },
    {
      id: "gst-w2",
      originalPost: feedDataByRole.guest[3],
      forkedAt: "2024-04-23T20:00:00Z",
      status: "review",
      notes: "Installing this for my research work. Too many tabs open all the time."
    },
    {
      id: "gst-w3",
      originalPost: feedDataByRole.guest[2],
      forkedAt: "2024-04-22T15:00:00Z",
      status: "archived",
      notes: "Used the button and card components for a class project. Got compliments on the clean design."
    }
  ]
};
