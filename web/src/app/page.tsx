import styles from "./page.module.css";
import LoginForm from "./components/LoginForm";
import About from "./components/About";

// TODO: colocar um alerta de login bem sucedido

export default function Home(): JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Boas vindas ao salão de beleiza da Cabeleleila Leila!
        </h1>

        <div className={styles.aboutContainer}>
          <About />
        </div>

        <div className={styles.loginContainer}>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
