"use client";

import { site } from "@/lib/data";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./Contact.module.css";

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.open(`mailto:${site.email}?subject=Portfolio%20contact&body=${body}`, "_blank");
  }

  return (
    <section id="contact" className="section">
      <div className="contactInner">
        <div className="eyebrow">Contact</div>
        <h2 className="h2">Let&apos;s build something useful.</h2>
        <p className={styles.sub}>
          I&apos;m open to remote Frontend, Full-Stack, and Product Engineering opportunities
          with U.S. and international teams.
        </p>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name
              <input type="text" name="name" required className={styles.input} placeholder="Your name" />
            </label>
            <label className={styles.label}>
              Email
              <input
                type="email"
                name="email"
                required
                className={styles.input}
                placeholder="you@company.com"
              />
            </label>
            <label className={styles.label}>
              Message
              <textarea
                name="message"
                required
                rows={4}
                className={styles.textarea}
                placeholder="Tell me about the role or project"
              />
            </label>
            <button type="submit" className={styles.submit}>
              Start a Conversation
            </button>
          </form>

          <div className={styles.linksCol}>
            <a href={`mailto:${site.email}`} className={styles.linkRow}>
              <MailIcon />
              <span>{site.email}</span>
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noopener" className={styles.linkRow}>
              <LinkedinIcon />
              <span>linkedin.com/in/felipecarl</span>
            </a>
            <a href={site.githubUrl} target="_blank" rel="noopener" className={styles.linkRow}>
              <GithubIcon />
              <span>github.com/felipecarl</span>
            </a>
            <a href={site.resumeUrl} target="_blank" rel="noopener" className={styles.linkRow}>
              <DownloadIcon />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
