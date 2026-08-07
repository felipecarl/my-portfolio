import { principles } from "@/lib/data";
import styles from "./Principles.module.css";

export function Principles() {
  return (
    <section className="sectionAlt">
      <div className="sectionInner">
        <div className="eyebrow">How I work</div>
        <h2 className="h2">Engineering principles</h2>
        <div className={styles.grid}>
          {principles.map((p) => (
            <div key={p.index} className={styles.card}>
              <div className={styles.index}>{p.index}</div>
              <div className={styles.title}>{p.title}</div>
              <p className={styles.body}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
