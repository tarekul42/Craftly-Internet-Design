# Contributing to Craftly Internet

We welcome contributions from engineers, builders, and designers who share our vision for a specialized, technical-editorial showcase platform.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### 1. Reporting Bugs
- Check the [Issue Tracker](https://github.com/tarekul42/Craftly-Internet-Design/issues) to see if the bug has already been reported.
- If not, create a new issue.
- Include steps to reproduce, expected behavior, and screenshots if applicable.

### 2. Suggesting Enhancements
- Open a new issue.
- Explain the problem the enhancement solves and why it fits the "Craftly Internet" philosophy.

### 3. Pull Requests
- Fork the repository.
- Create a new branch with a descriptive name (e.g., `feature/logic-map-zoom` or `fix/nav-mobile-overflow`).
- Ensure your code follows the existing style (Tailwind v4, strict TypeScript).
- Run `bun run lint` and `bun run build` before submitting.
- Link your PR to the relevant issue.

## Team Selection Process
 
This project serves as a showcase for team members to present their designs and technical implementations. 
 
- **Peer Review**: Use the "Audit" and "Ack" functions within the platform to review each other's work.
- **Authority Selection**: All submissions are reviewed by the project authority. 
- **Operations Build**: The selected design will be handed over to the Operations Team for final production implementation.
 
## Technical Standards

- **Strict Monochrome**: All new UI components must strictly adhere to the monochrome design system.
- **Role Awareness**: Any new strings must be added to `src/lib/roleCopy.ts` for all three roles (Engineer, Builder, Guest).
- **Aesthetic Excellence**: Focus on whitespace, typographic hierarchy, and smooth transitions.

## Development Workflow

```bash
bun install
bun run dev
```

Thank you for helping us build the next internet.
