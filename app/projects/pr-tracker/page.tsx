import type { Metadata } from "next";
import Link from "next/link";
import { prTrackerTech } from "@/lib/data";

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
        <Link href="/#projects" className="ctaSecondary">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
