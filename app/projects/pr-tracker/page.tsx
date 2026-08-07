import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { prTrackerTech } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "PR Tracker Case Study | Felipe Carl",
  description:
    "Case study for PR Tracker, a full-stack SaaS platform for centralizing pull request visibility and engineering workflows.",
};

export default function PrTrackerCaseStudy() {
  return (
    <section className="section">
      <div className="sectionInner">
        <div className="eyebrow">Case study</div>
        <h1 className="h2">PR Tracker</h1>
        <p className="p">
          The full write-up for this project is still being put together. In the meantime, the
          highlights are on the homepage&apos;s Projects section — a multi-tenant SaaS platform
          built with {prTrackerTech.join(", ")}, covering organizations, workspaces,
          repositories, pull requests, members, invitations, notifications, audit history, and
          plans and permissions.
        </p>
        <p className="p">
          Architecture, implementation details, and a full product walkthrough are available on
          request during interviews.
        </p>

        <div className={styles.gallery}>
          <div className={styles.shot}>
            <Image
              src="/images/pr-tracker-dashboard.png"
              alt="PR Tracker dashboard showing tracked pull requests across repositories with status, SLA, and approval columns"
              width={1280}
              height={717}
              className={styles.shotImg}
            />
          </div>
          <div className={styles.shot}>
            <Image
              src="/images/pr-tracker-signin.png"
              alt="PR Tracker sign-in screen with password and email-link authentication options"
              width={1280}
              height={713}
              className={styles.shotImg}
            />
          </div>
        </div>

        <Link href="/#projects" className="ctaSecondary">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
