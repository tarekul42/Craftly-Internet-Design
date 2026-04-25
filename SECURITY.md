# Security Policy

## Supported Versions

We currently support and maintain only the latest version of Craftly Internet. Security updates will be applied to the `main` branch.

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please do not disclose it publicly. Instead, report it through one of the following channels:

1. **GitHub Security Advisory**: Use the [GitHub Security Advisory](https://github.com/tarekul42/Craftly-Internet-Design/security/advisories/new) feature to report the issue privately.
2. **Email**: Send a detailed report to `security@craftly.internet`.

### What to include in your report

- A detailed description of the vulnerability.
- Steps to reproduce the issue (PoC).
- Potential impact of the vulnerability.

We aim to acknowledge all reports within 48 hours and provide a fix or mitigation plan as quickly as possible.

## Security Practices

Craftly Internet maintains a proactive security stance:

- **Automated Scanning**: We use [GitHub CodeQL](.github/workflows/codeql.yml) to perform deep semantic analysis of the codebase on every push and pull request.
- **Dependency Management**: We monitor dependencies for known vulnerabilities and update them regularly.
- **Monochrome Design**: Our strict design system reduces visual complexity, helping reviewers focus on architectural logic and code quality.
