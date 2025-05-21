import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; booting up...</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Identity confirmed: Sajjad</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Role: Full-Stack Developer (MERN)</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Frontend: crafting UIs with React & Next.js</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Backend: building APIs in Node.js & Express</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Database: modelling data with MongoDB</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ DevOps: CI/CD pipelines, Docker containers</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Testing: unit & integration for rock-solid code</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Mindset: agile, collaborative, always learning</span>
      </AnimatedSpan>

      <TypingAnimation delay={5500} className="text-muted-foreground">
        Welcome to my terminal. Type help to see what’s possible.
      </TypingAnimation>
    </Terminal>
  );
}
