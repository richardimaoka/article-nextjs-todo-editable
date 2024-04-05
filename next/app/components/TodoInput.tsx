import styles from "./TodoInput.module.css";

export function TodoInput() {
  return (
    <div className={styles.component}>
      <input
        className={styles.input}
        placeholder="enter todo here"
        required
        type="text"
        name="todo"
      />
      <button type="submit" className={styles.button}>
        &#43;{/* `+` sign */}
      </button>
    </div>
  );
}
