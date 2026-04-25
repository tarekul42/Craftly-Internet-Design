# Craftly Internet

A premium showcase platform for sharing, discovering, and building AI-powered applications. Craftly Internet adapts its entire experience based on who you are — **Engineer**, **Builder**, or **Guest**.

---

## What is Craftly Internet?

Craftly is an AI that builds apps. This platform is the community around it — a place where people share projects, experiences, and tools. But instead of a one-size-fits-all interface, Craftly Internet **reshapes itself** based on your role:

- **Engineers** see a technical console with architectural deep-dives, logic maps, and peer review workflows.
- **Builders** see a product dashboard with app showcases, creator profiles, and publishing tools.
- **Guests** see an exploration space with curated content, community highlights, and bookmarking.

Same platform. Same content. Completely different experience.

---

## Why Not Social Media?

Most platforms for sharing and discovering apps end up as social media clones — a scrolling feed of cards, like buttons, follower counts, and trending sidebars. We looked at that model and decided it was the wrong foundation for what Craftly is trying to do.

### The Problem with Social Media Patterns

Social media is built for **consumption**. The entire design — infinite scroll, engagement metrics, notification badges, algorithmically-sorted feeds — is optimized to keep you looking at things. It treats every piece of content as interchangeable: a photo, a thought, a meme, an article — they all go through the same feed, get the same like button, and compete for the same attention.

Craftly is built for **utility**. People come here not to kill time, but to find tools, understand how they work, save them for later, and build on top of them. The content is not interchangeable — a project is fundamentally different from an experience, and the way you interact with it should reflect that difference.

### What We Did Instead

| Social Media Does This | Craftly Does This Instead |
|---|---|
| Scrolling feed of cards | Split-pane console: stream + detailed canvas |
| Like / Comment / Share | Ack / Audit / Fork — functional, not social |
| "Post" something | "Broadcast" / "Publish" / "Share" — role-specific verbs |
| Follower counts | Network graph — collaborators, not an audience |
| Trending sidebar | Context panel — adapts to what you're viewing |
| One interface for everyone | Three interfaces — one per role, instant switching |
| Color-coded everything | Strict monochrome — content carries all the weight |
| Rounded cards with shadows | Structured layouts — like an architecture magazine |
| Generic labels ("Home", "Feed") | Thematic labels ("Console", "Dashboard", "Explore") |

The goal was not to build a cooler Twitter or a minimalist LinkedIn. The goal was to build something that **feels like a precision instrument** — a tool that respects the differences between its users and adapts to them, rather than forcing everyone through the same mental model.

### The Design Philosophy

Think of the difference between a **restaurant menu** and a **chef's workstation**.

A social media platform is like a menu — everyone sees the same list, ordered the same way, with the same descriptions. It's designed for mass consumption.

Craftly is more like a chef's workstation — the layout, the tools, the terminology, and the information density all change depending on who's standing in front of it. A sous chef sees prep lists and timing. A pastry chef sees temperature charts and ratios. A dishwasher sees... well, you get the idea. The station adapts to the person.

That's the principle behind Craftly's three-role system. The platform molds itself to you.

---

## The Three Roles

### Engineer — The Console

For developers who build AI systems and want to share architectural decisions with peers.

- **Home**: "Console" — a split-pane interface with a live stream of logic nodes on the left and a detailed architectural canvas on the right
- **Network**: "Global Nodes" — discover other engineers, their specialties, and their broadcast history
- **Workbench**: "Blueprint Archive" — a private workspace for forking and integrating architectural logic from the network
- **Identity**: "Orchestrator Profile" — your technical identity, metrics, and operational mode

The engineer experience uses technical language throughout: "nodes," "broadcasts," "forks," "audits," "orchestrators." The feed content is written in technical prose — implementation details, algorithmic descriptions, system architecture discussions. The logic map on project pages shows technical labels like "AST Ingestion," "Poisson-disk Sampling," and "Force-directed Graph Layout."

This is not a design choice to exclude non-technical users — it's a design choice to **give engineers a space that speaks their language**. The same project that an engineer sees as "A WebGL-based orchestrator that maps state transitions into a 3D lattice" will be shown to a guest as "A tool that turns complex data into easy-to-understand 3D visuals."

### Builder — The Dashboard

For creators who build and publish AI-powered applications using Craftly.

- **Home**: "Dashboard" — a feed of apps with case studies, user stories, and market impact metrics
- **Network**: "Top Creators" — discover fellow builders, their published apps, and collaboration opportunities
- **Workbench**: "Studio" — a private workspace for cloning and reviewing apps from the community
- **Identity**: "Account Settings" — your builder profile, app installs, and publishing tools

The builder experience uses product language: "apps," "publish," "installs," "revenue," "optimize," "clone." The feed content focuses on what problems the app solves, how many people use it, and what business impact it has. The case study section asks "What problem does this solve?" instead of "What algorithm does this use?"

### Guest — Explore

For anyone who wants to discover AI-powered tools and connect with the community.

- **Home**: "Explore" — a curated feed of tools, stories, and community highlights
- **Network**: "Global Community" — meet people, see what they're working on, and connect
- **Workbench**: "Bookmarks" — save posts and tools you find interesting for later
- **Identity**: "Your Profile" — your discovery points, saved items, and community contributions

The guest experience uses accessible, friendly language: "tools," "save," "rate," "connect," "community." Technical implementation details are replaced with simple explanations. "A layout engine using Poisson-disk sampling with Verlet integration for constraint solving" becomes "A tool that arranges elements in a natural, balanced way automatically." No jargon. No prerequisites. Just "here's what this does and why you might find it useful."

---

## How It Works

### The Split-Pane Console

The main page is not a traditional feed. It's a split-pane interface inspired by developer tools and editorial layouts:

```
┌──────────────────┬────────────────────────┐
│                  │                        │
│   STREAM (35%)   │     CANVAS (65%)       │
│                  │                        │
│  A compact list  │   Full detail view of  │
│  of all content  │   the selected item.   │
│  — projects and  │   For projects: hero   │
│  experiences —   │   image, case study,   │
│  sorted by time  │   and logic map.       │
│  or popularity.  │   For experiences:     │
│                  │   italic quote, tags,  │
│  Like a file     │   and attachments.     │
│  browser, not a  │                        │
│  social feed.    │                        │
└──────────────────┴────────────────────────┘
```

The left pane (Stream) is intentionally compact — it shows just enough information to identify each item: the creator, the title, the type, and the metrics. No large preview cards, no avatars taking up half the width. It's designed for scanning, not for lingering.

The right pane (Canvas) is where the depth lives. When you click an item, the canvas transforms to show its full content. A project gets a hero image, a structured case study with Problem/Solution/Results columns, and a visual logic map showing how the app works. An experience gets an italic journal-style layout with tags and optional attachments.

The two panes feel like two different tools, not the same content at two sizes. This is intentional — it mirrors how engineers actually work, switching between a high-level overview and a deep technical inspection.

On mobile, the two panes collapse into a single view with a toggle. The stream becomes the primary view, and tapping an item opens the canvas as a full-screen overlay.

### Content Types

Every piece of content on Craftly is one of two types, and they look fundamentally different:

**Project** — A full application showcase:
- Hero image with the app name and creator signature
- Description of what the app does
- Case study breakdown:
  - **Problem**: What gap or pain point does this address?
  - **Solution**: How does the app solve it?
  - **Results**: What impact has it had? (metrics, adoption, outcomes)
- Visual Logic Map — a flowchart showing the implementation architecture. Each node represents a step in the app's pipeline, labeled with the technique or technology used. Engineers see technical labels ("AST Ingestion," "Recursive Loop"). Guests see simple labels ("Read Input," "Process Data").

**Experience** — A reflection, thought, or story:
- Italic journal-style text with left border accent
- Optional image attachment
- Tags for categorization
- No case study, no logic map — just the raw thought

The key difference: a project is about **something you built**. An experience is about **something you think**. They serve different purposes in the community and deserve different presentation formats.

### Interactions

Every interaction on Craftly is a **functional action**, not a social gesture. The exact name changes based on your role:

| What You're Doing | Engineer Says | Builder Says | Guest Says |
|---|---|---|---|
| Showing appreciation | Ack | Like | Like |
| Validating quality | Audit | Optimize | Rate |
| Saving for later | Fork | Clone | Save |
| Creating new content | Broadcast | Publish | Post |
| Reaching out to someone | Ping Node | Message | Connect |
| Viewing saved items | Workbench | Studio | Bookmarks |

This isn't cosmetic. The language changes the mental model. When an engineer "forks" a project, they're pulling architectural logic into their private workspace for integration — it's a deliberate, professional action. When a guest "saves" a project, they're bookmarking something they found interesting — it's casual, lightweight. Same button, completely different expectations.

### Role Switching

Visit the Identity page and switch between roles at any time. When you switch, the entire platform transforms:

- **Navigation labels** change (Console → Dashboard → Explore)
- **Feed content** reloads with role-appropriate framing
- **Button text** adapts (Broadcast → Publish → Post)
- **Toast messages** change tone (terminal jargon → friendly text)
- **Empty states** rewrite (technical → accessible)
- **Section headers** shift (Architectural Case Study → How It Works)
- **Network descriptions** adapt (Spatial Architect → Layout Design)

This transformation is instant — no page reload, no spinner, no "setting up your experience" screen. The role switch is the demo moment of the platform. It's the feature that makes someone go "wait, the entire app just changed?"

### The Network

The Network page is not a "followers" page. It's a directory of people on the platform, organized by what they do. But what they do changes based on your role:

- **Engineer** sees: "Julian Voss — Spatial Architecture & Vibe Translation" (technical specialty)
- **Builder** sees: "Julian Voss — Luxury Brand & Fashion Tech" (product domain)
- **Guest** sees: "Julian Voss — Layout & Brand Design" (accessible description)

Same person, three different descriptions. Because what matters about a person depends on who's looking.

### The Workbench

The Workbench is the **private layer** of Craftly. It's where items you've saved go to live. It has three names:

- **Engineer**: "Blueprint Archive" — items you've forked for integration into your own projects. Each item has private notes for technical observations.
- **Builder**: "Studio" — apps you've cloned for testing or adaptation. Each item has notes for product decisions.
- **Guest**: "Bookmarks" — posts and tools you've saved for later. Each item has personal notes.

The Workbench is what makes Craftly a tool, not just a browser. It's the difference between reading about an app and actually pulling it into your workspace to use it.

### Content Creation

The Init page (accessible from the navbar) lets you create new content. Like everything else, it adapts:

- **Engineer** sees: "Initialize Node" — a technical form with "System.Execute" header, "Node Type" selector, and "Data Stream" textarea
- **Builder** sees: "Publish App" — a product form with "Builder.Publish" header, "Post Type" selector, and "Description" textarea
- **Guest** sees: "Share Something" — a simple form with "Get Started" header, "Post Type" selector, and "What's on your mind?" textarea

### Error States

Even error messages are role-aware. An engineer who hits an unauthorized action sees `[SYSTEM ERROR] UNAUTHORIZED. INITIALIZE IDENTITY.` in terminal-style mono font. A builder sees "Please sign in to continue." A guest sees "Sign in to access this feature." The error boundary page itself changes its heading, description, and retry button text per role.

---

## Navigation

| Route | Engineer | Builder | Guest |
|-------|----------|---------|-------|
| `/` | Console | Dashboard | Explore |
| `/network` | Global Nodes | Top Creators | Global Community |
| `/workbench` | Blueprint Archive | Studio | Bookmarks |
| `/init` | Initialize Node | Publish App | Share Something |
| `/identity` | Orchestrator Profile | Account Settings | Your Profile |

---

## Features

### Adaptive UI

Every piece of text in the interface is role-aware. Over 60 localized strings per role ensure that engineers see technical language, builders see product language, and guests see accessible language. No jargon leaks across roles — a guest will never see the word "orchestrator," "node," "broadcast," or "console" in any interface element.

### Role-Specific Content

The feed, network, and workbench all serve different content based on your active role. The same underlying projects are framed differently — engineers see implementation details and algorithmic descriptions, builders see market impact and user stories, guests see simple explanations of what the tool does and why it's useful.

### Visual Logic Maps

Every project includes a logic map — a visual flowchart showing how the app's implementation works. The nodes in this map are labeled differently per role. Engineers see "Poisson-disk algorithm for high-entropy distribution." Builders see "Smart algorithm for creating balanced layouts." Guests see "Arranges elements naturally and evenly."

### Dark Mode

Full dark mode support with a single toggle. Available via the theme button in the navbar or the Command Palette. Both modes use the same strict monochrome palette — black and white simply swap. No colored dark mode accents.

### Command Palette

Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette for quick navigation between pages and actions.

### Responsive Design

Fully responsive layout. On mobile, the split-pane console collapses into a toggle between the stream and canvas views. The navbar collapses into a full-screen overlay menu.

### Data Persistence

All user data — role selection, authentication state, forked/saved items — persists in `localStorage` across sessions.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Fonts | Inter (body), JetBrains Mono (accents), Pacifico (logo) |
| State | React Context + localStorage |
| Icons | Unicode / Text-based |

---

## Brand Guidelines

Craftly Internet follows four strict brand rules:

1. **Strict Monochrome** — Black (`#000`) and White (`#FFF`) only. No semantic colors — no red for errors, no green for success. All images rendered in grayscale. Error states use double borders and inverted color blocks instead of color.
2. **Pacifico for Logo Only** — The Pacifico font is reserved exclusively for the "Craftly Internet" logotype. Everything else uses Inter (body, headings) or JetBrains Mono (technical labels, IDs, metadata).
3. **Simplicity Over Complexity** — The interface adapts to the user. Engineers see technical language. Builders see product language. Guests see accessible language. No cross-contamination between role vocabularies.
4. **Aesthetic & Elegant** — Generous whitespace, strict typographic hierarchy, smooth transitions (`500ms`), subtle shadows (`0 4px 12px rgba(0,0,0,0.08)`), and high-contrast monochrome design. No brutal shadows, no thick offset borders, no decorative elements.

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for the full specification.

---

## Design Decisions

### Why Three Roles?

Most platforms force everyone into the same mental model. A developer and a non-technical user see the same labels, the same navigation, the same language. This works when the product is simple — a calculator doesn't need different interfaces for different users. But Craftly serves fundamentally different use cases.

An engineer is here to understand how an app works at an architectural level. They want to see the logic flow, the algorithms, the design patterns. A builder is here to evaluate whether an app solves a real problem for real users. They want to see the case study, the impact metrics, the market fit. A guest is here to discover tools they didn't know existed. They want to see what it does, why it matters, and whether it's worth trying.

These are three completely different information needs. Serving them from the same interface means serving none of them well. So we built three interfaces instead.

The role system is not a label-swap — it's a complete content transformation. When you switch from Engineer to Guest, the feed articles are rewritten, the network profiles are re-described, the workbench notes change tone, and even the error messages adapt. The platform reshapes itself around you.

### Why Monochrome?

Color is information. When every button, status, and notification has a different color, your brain spends energy decoding the palette instead of understanding the content. Red means error. Green means success. Blue means link. You're constantly translating.

By removing color entirely, Craftly eliminates that translation layer. Your brain goes straight to the content — the words, the layout, the structure. The information hierarchy is communicated through size, weight, spacing, and position, not through a color wheel. This is how architecture blueprints work, how academic papers work, how high-end editorial design works. The content carries all the weight.

There's also a consistency argument. Social media platforms look different in dark mode, different on different devices, different depending on which designer last updated the style guide. A monochrome system with two states (black-on-white and white-on-black) is inherently consistent. It scales without fragmentation.

### Why Pacifico Only for the Logo?

Pacifico is a personality font. It has character, warmth, and presence. In a design system that's otherwise rigid — monospace labels, uppercase tracking, strict grids — the Pacifico logo is the one moment of humanity. It says "real people made this."

Used everywhere, it becomes noise. Used in exactly one place — the logo — it becomes an anchor. The moment you see that handwritten script, you know where you are. It's the visual signature of the brand, and signatures only work when they're rare.

### Why a Split-Pane Layout Instead of a Feed?

A traditional feed scrolls vertically. Each item gets the same width, the same card treatment, the same interaction bar. You consume items one at a time, in sequence, like reading a newspaper.

Craftly's split-pane layout treats the stream and the detail as two separate tools. The stream is for **scanning** — quickly identifying what's worth your attention. The canvas is for **understanding** — diving deep into the thing you selected. This mirrors how engineers actually work: you scan a list of files, then open one in an editor. You scan a list of commits, then inspect one in detail. The split-pane is not a design flourish — it's a workflow.

It also solves a content problem. Projects and experiences are fundamentally different content types with different optimal layouts. A feed card can't do justice to a full case study with a logic map. A feed card also overserves an experience that's just a paragraph of text. The split-pane lets the stream be minimal (for scanning) and the canvas be rich (for understanding), without either one compromising the other.

### Why Functional Interactions Instead of Social Ones?

"Like" is a social gesture. It communicates "I approve of this" or "This entertains me." It's lightweight, low-commitment, and high-volume. People like hundreds of things a day without thinking about it.

"Acknowledge" (for engineers) or "Rate" (for guests) is a functional action. It communicates "I have read and understood this" or "I have evaluated this and assigned it a value." It's heavier, more deliberate, and lower-volume.

This distinction matters because it changes what the platform optimizes for. A platform built around "likes" optimizes for virality — content that gets the most likes rises to the top, regardless of quality. A platform built around "audits" and "ratings" optimizes for quality — content that professionals validate rises to the top, regardless of popularity.

Craftly optimizes for quality.

---

## Getting Started

```bash
# Install dependencies
bun install

# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### First Steps

1. Click the sign-in button in the navbar to initialize your identity
2. Choose your role (Engineer / Builder / Guest) from the Identity page
3. Switch between roles and watch the entire platform transform
4. Browse the feed, explore the network, or create your first project

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home (Console / Dashboard / Explore)
│   ├── network/            # Network page
│   ├── workbench/          # Workbench / Studio / Bookmarks
│   ├── init/               # Publish / Broadcast page
│   ├── identity/           # Profile / Account page
│   ├── error.tsx           # Error boundary (role-aware)
│   ├── layout.tsx          # Root layout with fonts and providers
│   └── globals.css         # Global styles and CSS variables
├── components/             # Shared UI components
│   ├── Navbar.tsx          # Adaptive navigation bar
│   ├── BroadcastModal.tsx  # Content creation modal
│   ├── CommandPalette.tsx  # Cmd+K command palette
│   ├── DataContext.tsx     # Data provider with role-based loading
│   ├── LogicMap.tsx        # Visual logic flowchart component
│   ├── Toast.tsx           # Toast notification system
│   ├── Auth.tsx            # Authentication and role context
│   └── ThemeContext.tsx     # Dark/light theme context
├── data/
│   └── mockData.ts         # Role-specific feed, network, and workbench data
├── lib/
│   ├── roleCopy.ts         # 60+ localized strings per role
│   └── utils.ts            # Utility helpers (cn)
└── types/
    └── index.ts            # TypeScript interfaces
```

---

## Community

We welcome contributions and feedback from the community. Please see our guidelines:

- **[CONTRIBUTING.md](./CONTRIBUTING.md)**: How to get involved and technical standards.
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)**: Community expectations and pledge.
- **[SECURITY.md](./SECURITY.md)**: Vulnerability reporting and practices.
- **[LICENSE](./LICENSE)**: MIT License details.

---

**Craftly Internet** — *The same platform, experienced differently.*