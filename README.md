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

## The Three Roles

### Engineer — The Console

For developers who build AI systems and want to share architectural decisions with peers.

- **Home**: "Console" — a split-pane feed with a live stream of logic nodes and a detailed canvas view
- **Network**: "Global Nodes" — discover other engineers, their specialties, and their broadcast history
- **Workbench**: "Blueprint Archive" — a private workspace for forking and integrating architectural logic from the network
- **Identity**: "Orchestrator Profile" — your technical identity, metrics, and operational mode

### Builder — The Dashboard

For creators who build and publish AI-powered applications using Craftly.

- **Home**: "Dashboard" — a feed of apps with case studies, user stories, and market impact metrics
- **Network**: "Top Creators" — discover fellow builders, their published apps, and collaboration opportunities
- **Workbench**: "Studio" — a private workspace for cloning and reviewing apps from the community
- **Identity**: "Account Settings" — your builder profile, app installs, and publishing tools

### Guest — Explore

For anyone who wants to discover AI-powered tools and connect with the community.

- **Home**: "Explore" — a curated feed of tools, stories, and community highlights
- **Network**: "Global Community" — meet people, see what they're working on, and connect
- **Workbench**: "Bookmarks" — save posts and tools you find interesting for later
- **Identity**: "Your Profile" — your discovery points, saved items, and community contributions

---

## How It Works

### The Feed

The main page is a split-pane layout:
- **Left pane (Stream)**: A scrollable list of content — projects and experiences from the community. Switch between "Recent" and "Popular" views.
- **Right pane (Canvas)**: Click any item to see its full details. Projects include a case study breakdown and a visual logic map showing how the app works.

### Content Types

- **Projects**: Full app showcases with a description, a Problem → Solution → Results breakdown, and a visual logic map of the implementation.
- **Experiences**: Text-based thoughts, stories, and reflections from the community.

### Interactions

Every interaction is named differently based on your role:

| Action | Engineer | Builder | Guest |
|--------|----------|---------|-------|
| Appreciate | Ack | Like | Like |
| Validate | Audit | Optimize | Rate |
| Save | Fork | Clone | Save |
| Publish | Broadcast | Publish | Post |
| Connect | Ping Node | Message | Connect |

### Role Switching

Visit the Identity page to switch between roles at any time. The entire UI — navigation labels, feed content, button text, toast messages, empty states — adapts instantly.

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

Every piece of text in the interface is role-aware. Over 60 localized strings per role ensure that engineers see technical language, builders see product language, and guests see accessible language. No jargon leaks across roles.

### Role-Specific Content

The feed, network, and workbench all serve different content based on your active role. The same underlying projects are framed differently — engineers see implementation details, builders see market impact, guests see simple explanations.

### Dark Mode

Full dark mode support with a single toggle. Available via the theme button in the navbar or the Command Palette.

### Command Palette

Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette for quick navigation and actions.

### Responsive Design

Fully responsive layout. On mobile, the stream and canvas toggle between views. The navbar collapses into a full-screen overlay menu.

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

1. **Strict Monochrome** — Black (`#000`) and White (`#FFF`) only. No semantic colors. All images rendered in grayscale.
2. **Pacifico for Logo Only** — The Pacifico font is reserved exclusively for the "Craftly Internet" logotype. Everything else uses Inter or JetBrains Mono.
3. **Simplicity Over Complexity** — The interface adapts to the user. Engineers see technical language. Everyone else sees plain, accessible language.
4. **Aesthetic & Elegant** — Generous whitespace, smooth transitions (`500ms`), subtle shadows, and high-contrast monochrome design.

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for the full specification.

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
3. Browse the feed, explore the network, or publish your first post

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
│   ├── error.tsx           # Error boundary
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

## Design Decisions

### Why Three Roles?

Most platforms force everyone into the same mental model. A developer and a non-technical user see the same labels, the same navigation, the same language. Craftly Internet takes a different approach — the platform molds itself to you.

An engineer thinks in terms of "nodes," "forks," and "audits." A builder thinks in terms of "apps," "installs," and "reviews." A guest thinks in terms of "tools," "saves," and "ratings." These aren't just label swaps — the content itself is written differently for each audience.

### Why Monochrome?

Color is information. When every button, status, and notification has a different color, your brain spends energy decoding the palette instead of understanding the content. By removing color entirely, Craftly forces the content — the actual ideas — to carry all the weight.

### Why Pacifico Only for the Logo?

Pacifico is a personality font. It has character, warmth, and presence. Used everywhere, it becomes noise. Used in exactly one place — the logo — it becomes an anchor. The moment you see that handwritten script, you know where you are.

---

**Craftly Internet** — *The same platform, experienced differently.*