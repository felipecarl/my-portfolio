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
              I&apos;m a Software Engineer from Blumenau, Brazil, with over six years of
              experience building web applications for local businesses and international
              organizations.
            </p>
            <p className="p">
              My strongest background is in frontend engineering with React and TypeScript,
              including design systems, micro-frontends, responsive applications, developer
              portals, and complex operational interfaces.
            </p>
            <p className="p">
              I also build full-stack applications with NestJS, Prisma, and PostgreSQL. I enjoy
              taking ownership of a product or feature from the initial problem through
              architecture, implementation, testing, documentation, and release.
            </p>
            <p className="p">
              I work comfortably with distributed teams, communicate fluently in English, and
              value autonomy, thoughtful engineering decisions, and products that solve real
              operational problems.
            </p>
            <p className="pNote">
              Outside of software, I enjoy playing padel and tennis, learning musical instruments,
              and building personal products.
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
              <span>React, TypeScript, NestJS, PostgreSQL</span>
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
