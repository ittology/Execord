---
layout: default
title: Features & Capabilities
---
# Execord Features & Capabilities Reference

This document provides a structured list of everything Execord can do on your Discord server. Because Execord translates natural language into structured actions, it's important to understand exactly what information the bot can **see** (read) versus what it can **change** (execute).

If you ask the bot to do something and it says it cannot, it is likely because that specific property or endpoint is not listed below.

---

## Reading Data (What Execord can see)

Before making changes, Execord can look up information about your server to gather context or answer your questions. It only retrieves data when specifically asked.

| Category | What the bot can read |
| :--- | :--- |
| **Server (Guild)** | Server ID, Name, Description, Icon URL, Owner, Creation Date, Locale, Premium Tier, Member Count, Verification Level, System/Rules/Updates Channels. |
| **Categories** | Category ID, Name, Position, Creation Date, Channels inside it, Permission Overwrites (who can see/do what). |
| **Channels** | Channel ID, Type (Text/Voice/Forum/Stage), Category, Name, Position, Topic, NSFW status, News status, Slowmode Delay, Bitrate, User Limit (Voice), Available Tags & Reaction Emojis (Forum). |
| **Roles** | Role ID, Name, Color (Hex), Permissions list, Position, Mentionable status, Hoist status, Managed status, Icon URL. |
| **Members (Max 50 at once)** | User ID, Username, Display Name, Avatar, Bot status, Server Nickname, Joined Date, if they are timed out (Timeout Until), and their current Roles. |
| **Bans** | List of banned Users and the Reason for their ban. |
| **Threads** | Thread ID, Owner, Parent Channel, Name, Type (Public/Private/News), Tags, Slowmode, Creation Date, Archived/Locked status. |
| **Messages (Max 50 at once)** | Message ID, Location, Author, Content (Text), Pinned status, Creation/Edit Date, and if it replies to another message. |
| **Audit Logs (Max 50 at once)** | Action taken, Member who performed it, Target of the action, Reason provided, and Creation Date. |

> [!NOTE]
> Execord **cannot** read messages outside of the channel you run the command in, unless you explicitly tell it to "Read the last 10 messages in #[channel name]". It does not log message content.

---

## Modifying Data (What Execord can change)

Execord can execute direct changes to your server architecture, roles, and members.

### Server Settings
- **Edit Details:** Update the server Name, Description, Language (Locale), and Verification Level.
- **Edit Assets:** Set or change the Icon, Banner, and Splash Image.
- **Assign Channels:** Define which channel acts as the Rules, Public Updates, or System/Welcome channel.

### Categories
- **Create:** Set the Name, list Position, and initial Permission Overwrites.
- **Edit:** Rename categories, move them, or adjust their permissions.
- **Delete:** Safely remove single or multiple categories at once.

### Channels
- **Create & Edit Channels**
    - Set the Name, Category, Position, and custom Permissions.
- **Text Channel Features**
    - Toggle NSFW status and News/Announcement status.
    - Set Topics (up to 1024 characters).
    - Apply Slowmode cooldowns (up to 6 hours).
- **Voice Channel Features**
    - Enforce User Limits (from 1 to 99 participants).
- **Forum Channel Features**
    - Create Tags (including moderation requirements and emoji icons).
    - Require tags for new posts.
    - Set a default Reaction Emoji.
- **Delete Channels**
    - Instantly bulk-delete any number of channels.

### Roles & Permissions
- **Create Roles**
    - Define Name, exact Hex Color (e.g., `#ff0000`), and specific Discord Permissions.
    - Display the role separately from others (Hoist).
    - Allow anyone to mention the role.
- **Edit Roles**
    - Modify any creation properties, plus the ability to set a custom Role Icon image.
- **Complex Permissions**
    - Target `@everyone`, specific Roles, or specific Members to explicitly allow or deny specific permissions on any channel or category.
- **Delete Roles**
    - Bulk-delete old or unused roles.

### Member Moderation
- **Edit Profiles**
    - Change a member's server nickname.
    - Assign or remove multiple roles at once.
- **Timeouts**
    - Temporarily mute users for any duration between 1 minute and 28 days.
- **Kicks**
    - Remove a member from the server and attach an audit log reason.
- **Bans & Unbans**
    - Ban members and attach an audit log reason.
    - Optionally bulk-delete the banned user's message history (up to the last 7 days).
    - Bulk-unban members by providing their User IDs.

### Messaging & Threads
- **Manage Messages**
    - Send text or image attachments to any channel.
    - Send private (ephemeral) messages only visible to you.
    - Edit bot messages or pin important messages to a channel.
- **Purge Messages**
    - Delete specific messages by ID, or bulk-purge the last X messages in a channel.
- **Manage Threads**
    - Create Public, Private, or News threads.
    - Set Thread Slowmodes and apply Forum tags.
    - Edit thread names and properties, or delete them entirely.

### Images
- **Provide URLs**
    - Supply an existing image URL from the web and tell Execord to use it.
- **Generate Images**
    - Create stunning images from text prompts.
- **Apply Images Everywhere**
    - Thanks to Action Chaining, both provided URLs and generated images can instantly be applied as message attachments, Role Icons, Server Icons, Server Banners, or Server Invite Splash Images.

---

## Action Chaining
Because Execord uses a LLM (Large Language Model), it can smartly use variables. For example, if you tell it:
*"Create a role called VIP, then create a private text channel where only VIPs can read messages, and post a welcome message inside it."*

The bot will execute this perfectly in one go. It understands how to create the role, save its new ID, create the channel using that ID for the permission overwrite, and then send the message into the new channel.
