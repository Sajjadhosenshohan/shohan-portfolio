"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; booting up developer profile...</TypingAnimation>

      <AnimatedSpan delay={1000} className="text-emerald-600 dark:text-emerald-400">
        <span>✔ Identity confirmed: Md. Sajjad Hosen Shohan</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1600} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Client Comms: Global clients across USA 🇺🇸, France 🇫🇷 &amp; Italy 🇮🇹
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2200} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Backend: High-performance APIs with Node.js &amp; Express
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2800} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Database: PostgreSQL, Prisma ORM &amp; Complex Database Design
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={3400} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Deployment: AWS (EC2, S3), Docker Containers &amp; CI/CD
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Frontend: Modern responsive web apps with Next.js &amp; React
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={4600} className="text-emerald-600 dark:text-emerald-400">
        <span>
          ✔ Automation: End-to-end workflows with n8n, Zapier &amp; Webhooks
        </span>
      </AnimatedSpan>

      <TypingAnimation delay={5200} className="text-muted-foreground font-semibold">
        &gt; System ready. Let&apos;s build scalable solutions together.
      </TypingAnimation>
    </Terminal>
  );
}
