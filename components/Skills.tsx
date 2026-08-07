import { skillGroups } from "@/lib/data";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionInner">
        <div className="eyebrow">Skills</div>
        <h2 className="h2">Capabilities</h2>
        <div className={styles.grid}>
          {skillGroups.map((g) => (
            <div key={g.name} className={styles.card}>
              <div className={styles.title}>{g.name}</div>
              <div className={styles.tags}>
                {g.items.map((it) => (
                  <span key={it} className={styles.tag}>
                    {it}
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
