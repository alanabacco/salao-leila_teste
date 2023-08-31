import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.titleContainer}>
        <h1 className={styles.title}>Cabeleleila Leila</h1>
        <p className={styles.subtitle}>Salão de Beleiza</p>
      </Link>
    </header>
  );
}
