"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { authService } from "./services/authService";

// TODO: colocar um alerta de login bem sucedido

interface HomeProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    phone: { value: string };
    password: { value: string };
  };
}

export default function Home(): JSX.Element {
  const router = useRouter();

  function handleSubmit(e: HomeProps) {
    e.preventDefault();
    authService
      .clientLogin({
        phone: e.target.phone.value,
        password: e.target.password.value,
      })
      .then(() => {
        router.push("/cliente");
      })
      .catch((error) => {
        console.log(error);
        alert("telefone ou senha inválidos.");
      });
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Boas vindas ao salão de beleiza da Cabeleleila Leila!
        </h1>

        <div className={styles.aboutContainer}>
          <img src="https://placehold.co/500x300" alt="foto" />
          <p>
            Cabelos, unhas, hidratação e unha. Venha fazer suas unhas, seus cabelos, e até
            mesmo hidratar suas madeixas de cabelo conosco. Tudo esterelizado.
          </p>
        </div>

        <div className={styles.loginContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label htmlFor="phone" className={styles.label}>
                Telefone
              </label>
              <input
                type="tel"
                placeholder="14987654321"
                required
                id="phone"
                name="phone"
                minLength={11}
                maxLength={11}
                pattern="^[0-9]+$"
              />
            </div>

            <div>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <input
                type="password"
                placeholder="********"
                required
                id="password"
                name="password"
                minLength={6}
              />
            </div>

            <button type="submit">Entrar</button>
          </form>
          <p>
            Ainda não tem cadastro? <Link href="cliente/cadastrar">Criar cadastro</Link>
          </p>
          <p className={styles.info}>
            Esse site usa cookies para suas informações de login, ao continuar usando o
            site você afirma estar de acordo com o uso dos cookies.
          </p>
        </div>
      </main>
    </>
  );
}
