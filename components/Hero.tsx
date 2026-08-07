import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Open to remote opportunities with U.S. companies
        </div>
        <h1 className={styles.h1}>
          Software Engineer building reliable products for global teams.
        </h1>
        <p className={styles.heroSub}>
          I&apos;m a Software Engineer with 6+ years of experience building production web
          applications, design systems, micro-frontends, developer platforms, and full-stack SaaS
          products. Based in Brazil and experienced working remotely with international teams.
        </p>
        <div className={styles.heroCtas}>
          <a href="#projects" className="ctaPrimary">
            View My Work
          </a>
          <a href={site.resumeUrl} target="_blank" rel="noopener" className="ctaSecondary">
            Download Resume
          </a>
        </div>
        <div className={styles.heroLinks}>
          <a href={site.githubUrl} target="_blank" rel="noopener" className={styles.heroLink}>
            <GithubIcon /> GitHub
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener" className={styles.heroLink}>
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className={styles.heroLink}>
            <MailIcon /> Email
          </a>
        </div>
      </div>
    </header>
  );
}
