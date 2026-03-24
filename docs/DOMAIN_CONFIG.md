# Domain Configuration — upskillintech.com

This document records all domain and deployment configuration details for the **upskillintech.com** website, transferred from the `Amynwabu/upskillintech` repository.

---

## Domain

| Property | Value |
|---|---|
| **Domain** | `upskillintech.com` |
| **Production URL** | `https://upskillintech.com` |
| **API URL** | `https://upskillintech.com` (or `https://api.upskillintech.com` if separate) |
| **Email** | `noreply@upskillintech.com`, `info@upskillintech.com` |

---

## Hosting

| Property | Value |
|---|---|
| **Host** | Hostinger |
| **Deploy method** | FTP/FTPS via GitHub Actions |
| **Target directory** | `/public_html/` |
| **Protocol** | FTPS |

---

## GitHub Actions Secrets Required

Set these in **Settings → Secrets → Actions** of this repository:

| Secret Name | Description |
|---|---|
| `HOSTINGER_SERVER` | Hostinger FTP server address (e.g. `ftp.upskillintech.com`) |
| `HOSTINGER_USERNAME` | Hostinger FTP username |
| `HOSTINGER_PASSWORD` | Hostinger FTP password |
| `VITE_API_URL` | Production API URL — `https://upskillintech.com` |
| `SENDGRID_API_KEY` | SendGrid API key for email (starts with `SG.`) |

---

## Deployment Workflow

Every push to the `main` branch triggers the **Deploy to Hostinger** GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Installs dependencies with `pnpm`
2. Builds the React/Vite application
3. Uploads the compiled `dist/` folder to Hostinger via FTPS

---

## Email Configuration

| Property | Value |
|---|---|
| **Email provider** | SendGrid |
| **Sender email** | `noreply@upskillintech.com` |
| **Notification email** | `info@upskillintech.com` |
| **Setup guide** | See `SENDGRID_SETUP.md` |

---

## Environment Variables

See `.env.example` for the full list of required environment variables.

```
VITE_API_URL=https://upskillintech.com
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/upskillintech
SENDGRID_API_KEY=SG.your_key_here
SMTP_FROM_EMAIL=noreply@upskillintech.com
```

---

## Source

Domain configuration transferred from `Amynwabu/upskillintech` (commit `bc268b0`) on 24 Mar 2026.
