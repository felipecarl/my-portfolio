import { site } from "@/lib/data";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <div className={styles.footerName}>Felipe Carl</div>
          <div className={styles.footerRole}>Software Engineer · Blumenau, Brazil</div>
          <div className={styles.footerAvail}>Available for remote opportunities</div>
        </div>
        <div className={styles.footerLinks}>
          <a href={site.linkedinUrl} target="_blank" rel="noopener" className={styles.footerLink}>
            LinkedIn
          </a>
          <a href={site.githubUrl} target="_blank" rel="noopener" className={styles.footerLink}>
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className={styles.footerLink}>
            Email
          </a>
        </div>
        <div className={styles.footerYear}>© {new Date().getFullYear()} Felipe Carl</div>
      </div>
    </footer>
  );
}
