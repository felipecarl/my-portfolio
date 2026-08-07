import { focusAreas } from "@/lib/data";
import { CodeIcon, GlobeIcon, PinIcon } from "./icons";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="sectionInner">
        <div className="eyebrow">About</div>
        <div className={styles.grid}>
          <div>
            <p className="p">
              I&apos;m a Software Engineer from Blumenau, Brazil, with 6+ years of experience
              building and evolving web applications for both local businesses and international
              organizations.
            </p>
            <p className="p">
              My strongest background is in frontend engineering with React and TypeScript, where
              I&apos;ve worked on design systems, micro-frontends, developer portals, responsive
              applications, and complex operational interfaces. Over time, I also expanded into
              full-stack development using Node.js, NestJS, Prisma, and PostgreSQL, which allows
              me to work across the full product lifecycle rather than only one layer of the
              stack.
            </p>
            <p className="p">
              What I enjoy most is taking an unclear problem and turning it into a well-structured
              solution — understanding the business need, defining the architecture, implementing
              the feature, testing it, documenting it, and helping take it to production. I care a
              lot about maintainability, clear responsibilities, reusable patterns, and making
              technical decisions that support the product instead of adding unnecessary
              complexity.
            </p>
            <p className="p">
              I have experience working with distributed and international teams, collaborating
              closely with engineers, designers, QA, product, and business stakeholders. I
              communicate fluently in English and value autonomy, ownership, thoughtful
              engineering discussions, and environments where developers are encouraged to
              understand the problem, not just implement tickets.
            </p>
            <p className="pNote">
              Outside of software, I enjoy playing racket sports, learning musical instruments,
              and building personal products and experiments.
            </p>
          </div>

          <aside className={styles.card}>
            <div className={styles.row}>
              <PinIcon />
              <span>Blumenau, Santa Catarina, Brazil</span>
            </div>
            <div className={styles.row}>
              <GlobeIcon />
              <span>Remote — U.S. &amp; international teams</span>
            </div>
            <div className={styles.row}>
              <CodeIcon />
              <span>React, TypeScript, JavaScript, Node.js, NestJS, PostgreSQL</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.focusLabel}>Focus areas</div>
            <div className={styles.tags}>
              {focusAreas.map((f) => (
                <span key={f} className={styles.tag}>
                  {f}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
