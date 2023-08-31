import styles from "./styles.module.css";

export default function About(): JSX.Element {
  return (
    <>
      <img src="https://placehold.co/500x300" alt="foto" className={styles.image} />
      <p className={styles.aboutDescription}>
        Cabelos, unhas, hidratação e unha. Venha fazer suas unhas, seus cabelos, e até
        mesmo hidratar suas madeixas de cabelo conosco. Tudo esterelizado.
      </p>
    </>
  );
}
