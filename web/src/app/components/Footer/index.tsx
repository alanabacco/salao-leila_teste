import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Link href="/">2023 - Cabeleleila Leila: Salão de Beleza</Link>
    </footer>
  );
}
