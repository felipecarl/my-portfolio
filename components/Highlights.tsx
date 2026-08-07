import { highlights } from "@/lib/data";
import styles from "./Highlights.module.css";

export function Highlights() {
  return (
    <section aria-label="Professional highlights" className={styles.section}>
      <div className={styles.grid}>
        {highlights.map((h) => (
          <div key={h.mark} className={styles.card}>
            <div className={styles.mark}>{h.mark}</div>
            <p className={styles.text}>{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
