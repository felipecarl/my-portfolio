import { experience } from "@/lib/data";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="sectionInner">
        <div className="eyebrow">Experience</div>
        <h2 className="h2">My Journey</h2>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.company} className={styles.item}>
              <div className={styles.markerCol}>
                <div className={styles.dot} />
                {job.showLine && <div className={styles.line} />}
              </div>
              <div className={styles.card}>
                <div className={styles.head}>
                  <div>
                    <div className={styles.role}>{job.role}</div>
                    <div className={styles.company}>{job.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <div className={styles.period}>{job.period}</div>
                    <div className={styles.model}>{job.model}</div>
                  </div>
                </div>
                <ul className={styles.list}>
                  {job.points.map((pt) => (
                    <li key={pt} className={styles.li}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
