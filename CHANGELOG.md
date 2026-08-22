---
layout: default
title: Changelog
---
# Changelog

All notable changes to the Execord project will be documented in this file.

## [2026-08-16] - Resume Usage Fix

### Fixed
- Fixed a bug where `/resume` did not restore previous usage stats (tokens and requests), causing inaccurate account balances after resuming.

## [2026-08-15] - Premium Command & Execution Checkpoints

### Added
- **New `/premium` Command:** View and compare Free, Pro, and Ultra tiers with direct upgrade buttons.
- **Execution Checkpoints:** If a command fails mid-run due to running out of tokens, Execord now saves the current progress so you can pick up where you left off with `/resume`.

## [2026-08-14] - Subscriptions & Error Improvements

### Added
- **Pro & Ultra Subscriptions:** Paid tiers are now available for purchase via Whop.

### Improved
- **Detailed Error Messages:** Error messages are now more specific and actionable.

## [2026-08-13] - Fetch Limits & Prompt Separation

### Improved
- **Higher Fetch Limits:** Increased the maximum number of members and other server objects the AI can retrieve in a single lookup. Users are now notified when results are truncated.
- **Separate Prompt Fields:** The `/execute` command now has separate fields for prompt templates and custom prompts.

## [2026-08-12] - Referral System

### Added
- **Referral Codes:** Invite others to use Execord and earn bonus tokens as a reward. Both the referrer and the referred user receive tokens.
- **New `/referral` Command:** View your personal referral code, share link, and track referral stats.

## [2026-08-09] - Logging & Benchmarking

### Improved
- **Enhanced Logging:** More detailed internal logging for better debugging and diagnostics.
- **Benchmark Suite:** Added an internal benchmark framework to test AI models for efficiency and accuracy on complex user prompts.

## [2026-07-23] - Bug Fixes

### Fixed
- Fixed a bug where voting rewards on Top.gg were not credited to the user's account.

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
- Fixed a bug where all actions were automatically executed after confirming for the first time.
- Fixed a bug where an empty page could appear in the action embed when the first page was full.

## [2026-05-12] - Rebrand & Small Additions

### Added
- **Audit Log Access**: Execord can now view and analyze server audit logs.
- **Command Prompt Templates**: Built-in templates (Audit Log Check, Permission Check) to the execute interface.
- **Message Splitting**: Fixed a bug where long responses wouldn't send. Execord now splits long text into multiple messages.

### Improved
- **Frictionless Lookups**: Removed confirmation requirements for simple information gathering actions.
- **Readable Confirmations**: Confirmation parameters are now human-readable instead of raw JSON.
- **Official Rebrand**: The project has officially been renamed to Execord.
