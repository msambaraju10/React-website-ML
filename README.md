## Manasa.io

# Key Components

- Next.js App Router
- Next.js Server Actions
- Client & Server Components
- TypeScript
- Tailwind CSS
- Context API
- Advanced Animations with Framer Motion
- React.Email & Resend
- Custom React hooks
- Vercel deployment

# Running Locally

This application requires Node.js v13.4.8

```bash
git clone https://github.com/ByteGrad/portfolio-website.git
npm i next@13.4.8
npm install -i react-vertical-timeline-component
npm i --save-dev @types/react-vertical-timeline-component
npm i resend
```

# Setup

1. Add RESEND_API_KEY environment variable in .env.local
2. In the send-email.ts action file, change the "to" email to your own email

# Bug

- Desc: experience section isn't visible on the page.
- Fix: [experience.tsx](https://github.com/ByteGrad/portfolio-website/issues/21#issuecomment-1880372021)
