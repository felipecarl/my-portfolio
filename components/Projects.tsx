import Image from "next/image";
import Link from "next/link";
import { prTrackerTech, projects, site } from "@/lib/data";
import { ArrowIcon } from "./icons";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="sectionInner">
        <div className="eyebrow">Projects</div>
        <h2 className="h2">Featured work</h2>

        <div className={styles.featuredCard}>
          <div className={styles.featuredTopRow}>
            <div className={styles.featuredHeading}>
              <Image
                src="/images/pr-tracker-logo.png"
                alt=""
                width={40}
                height={40}
                className={styles.featuredLogo}
              />
              <div>
                <div className={styles.featuredKicker}>Primary project</div>
                <h3 className={styles.featuredTitle}>PR Tracker</h3>
                <p className={styles.featuredSubtitle}>
                  A full-stack SaaS platform for centralizing pull request visibility and
                  engineering workflows.
                </p>
              </div>
            </div>
            <span className={styles.statusPillPrivate}>Private repository</span>
          </div>

          <div className={styles.featuredShot}>
            <Image
              src="/images/pr-tracker-dashboard.png"
              alt="PR Tracker dashboard showing tracked pull requests across repositories with status, SLA, and approval columns"
              width={1280}
              height={717}
              className={styles.featuredShotImg}
            />
          </div>

          <div className={styles.featuredBody}>
            <div>
              <div className={styles.featuredColLabel}>Problem</div>
              <p className={styles.featuredColText}>
                Engineering teams often manage pull requests across multiple repositories and
                platforms without a centralized view of ownership, status, reviews, and
                organizational access.
              </p>
            </div>
            <div>
              <div className={styles.featuredColLabel}>Solution</div>
              <p className={styles.featuredColText}>
                A multi-tenant platform organized around organizations, workspaces, repositories,
                pull requests, members, invitations, notifications, audit history, and plans and
                permissions.
              </p>
            </div>
          </div>

          <div className={styles.featuredTechRow}>
            {prTrackerTech.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>

          <p className={styles.featuredMessage}>
            This project demonstrates Felipe&apos;s ability to own a SaaS product end to end,
            make architecture decisions across frontend and backend, model complex business
            rules, implement secure authentication and permissions, and create a polished user
            experience.
          </p>

          <div className={styles.featuredNotice}>
            Private repository — architecture, implementation details, and a product walkthrough
            are available during interviews.
          </div>

          <div className={styles.featuredCtas}>
            <Link href="/projects/pr-tracker" className="ctaPrimary">
              View Case Study <ArrowIcon />
            </Link>
            <a
              href={`mailto:${site.email}?subject=PR%20Tracker%20walkthrough`}
              className="ctaSecondary"
            >
              Request a Walkthrough
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.title} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <span className={styles.statusPill}>{proj.status}</span>
              </div>
              <p className={styles.cardSubtitle}>{proj.subtitle}</p>
              <div className={`${styles.shot} ${!proj.image ? styles.shotPlaceholder : ""}`}>
                {proj.image ? (
                  <Image
                    src={proj.image.src}
                    alt={proj.image.alt}
                    width={proj.image.width}
                    height={proj.image.height}
                    className={styles.shotImg}
                  />
                ) : (
                  <span className={styles.shotLabelSmall}>{proj.shotLabel}</span>
                )}
              </div>
              <p className={styles.cardBody}>{proj.body}</p>
              <div className={styles.techRow}>
                {proj.tech.map((t) => (
                  <span key={t} className={styles.techPillSmall}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
