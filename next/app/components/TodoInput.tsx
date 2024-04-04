import styles from "./TodoInput.module.css";

export function TodoInput() {
  return (
    <div className={styles.component}>
      <input className={styles.input} placeholder="enter todo here" />
      <button type="submit" className={styles.plus}>
        &#43;{/* `+` sign */}
      </button>
    </div>
  );
}
