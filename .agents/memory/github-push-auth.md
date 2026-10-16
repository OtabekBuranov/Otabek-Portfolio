---
name: GitHub push authorization
description: A Replit GitHub OAuth connection can look healthy while Git CLI authentication is still unavailable.
---

Treat a successful integration status as insufficient proof that `git push` works. A push may reach GitHub and then stall while `replit-git-askpass` waits for credentials.

**Why:** During GitHub Pages setup, the repository was reachable and the OAuth connection reported healthy, but the Git CLI did not receive credentials and the push timed out.

**How to apply:** Make one bounded push attempt. If the askpass process stalls, stop retrying, leave the local commit intact, and clearly tell the user that nothing was pushed; use a valid secure authorization flow or ask the user to restore GitHub access through Replit.
