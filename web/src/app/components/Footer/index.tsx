import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Link href="/">2023 - Cabeleleila Leila: Salão de Beleza</Link>
      <address>Rua Fulano de Tal, 1000, Centro - Borborema/SP</address>
      <a href="tel:16997544271">{"(16) 99754-4271"}</a>
    </footer>
  );
}
