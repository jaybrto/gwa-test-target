# GWA Test Target

Simple Bun counter app for end-to-end testing of the [GitHub Workflow Agents](https://github.com/jaybrto/github-workflow-agents) system.

## What This Repo Does

This repo is automatically processed by GWA. When issues are created and moved through the GitHub Project board, Claude Code agents:

1. **Plan** the implementation (Planning column)
2. **Implement** the feature (In Progress column)
3. **Run QA** tests via Playwright (QA column)
4. **Review** and merge (Review column)
5. **Deploy** and clean up (Done column)

## Columns

`Todo → Planning → In Progress → QA → Blocked → Review → Done`

## Counter App

The counter app (`index.ts`) is intentionally simple to make GWA's work fast and verifiable during E2E tests.
