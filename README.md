# Craftly Internet

Craftly Internet is a premium, professional showcase platform designed explicitly for **AI Orchestrators, Builders, and Engineers**. It operates as a stylized social network and portfolio system where users can broadcast architectural logic, fork and integrate nodes, and review developer case studies in a specialized "Technical-Editorial" aesthetic.

## Features

- **The Console**: A dual-pane feed (Stream/Canvas) layout for browsing and reviewing technical logic nodes.
- **The Workbench**: A private sector for authenticated users to fork, review, and integrate network logic into their local memory.
- **Node Broadcasting**: Submit logic nodes (Experience Logs or Architectural Projects) directly to the network.
- **Identity System**: A simulated authentication and profile system with local persistence.
- **Command Palette**: Power-user navigation menu accessible via `CMD/CTRL + K`.
- **Brutalist Dark Mode**: Fully responsive, high-contrast monochrome design system togglable via standard hotkeys.

## Tech Stack

- **Framework**: Next.js 14/15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context + `localStorage` for robust, database-free prototyping
- **Typography**: Inter (Prose), JetBrains Mono (Data/Tech), Pacifico (Brand)

## Getting Started

First, install the required dependencies. This project uses `bun`, but `npm` or `yarn` will also work.

```bash
# Install dependencies
bun install
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Philosophy

The project adheres to a strict "Brutalist / Technical-Editorial" visual language. The core pillars of the design are:
1. **Zero Distraction**: Almost exclusively black and white, prioritizing the underlying architectural logic over superficial decoration.
2. **Typography as Structure**: Hierarchy is established primarily through font families (JetBrains Mono vs Inter), text-transform (uppercase/tracking), and weighting, mimicking the structure of an IDE or terminal.
3. **Micro-interactions**: Subtle hover states, cursor pulsing, and grayscale-to-color reveals are used to create a responsive, engaging experience without breaking the stark aesthetic.

## Navigation 

- `/` (Console) - The global stream of orchestrated nodes.
- `/workbench` - Your personal repository of forked nodes.
- `/identity` - Orchestrator profile and network access status.
- `/init` - Broadcast a new node to the network.

## Authors
- **Craftly Orchestrators**
