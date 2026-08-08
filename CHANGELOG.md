---
layout: default
title: Changelog
---
# Changelog

All notable changes to the Execord project will be documented in this file.

## [2026-07-22] - Multi-Agent Engine & Unified UI Overhaul

### Added
- **Multi-Agent Architecture**: Complex server commands are now processed by specialized AI sub-agents in background pipelines, providing significantly higher precision for nested prompts.
- **Automated Top.gg Voting Rewards**: Voting on Top.gg now automatically credits **20,000 bonus tokens** to your account with instant DM confirmation.
- **New `/vote` Command**: Direct access to the Top.gg voting link and reward info.
- **Redesigned Command UI**: Complete visual overhaul for `/account`, `/status`, `/help`, `/check`, and `/vote` with consistent embeds and live system status indicators.

### Improved & Fixed
- **Automated Rewards**: Removed the manual `/claim` command as token rewards are now credited automatically.
- **Action Embeds**: Made action progress and execution status significantly clearer and easier to read.
- **Codebase Stability**: Deployed numerous bug fixes and backend stability improvements.

## [2026-05-12] - Rebrand & Small Additions

### Added
- **Audit Log Access**: Execord can now view and analyze server audit logs.
- **Command Prompt Templates**: Built-in templates (Audit Log Check, Permission Check) to the execute interface.
- **Message Splitting**: Fixed a bug where long responses wouldn't send. Execord now splits long text into multiple messages.

### Improved
- **Frictionless Lookups**: Removed confirmation requirements for simple information gathering actions.
- **Readable Confirmations**: Confirmation parameters are now human-readable instead of raw JSON.
- **Official Rebrand**: The project has officially been renamed to Execord.
