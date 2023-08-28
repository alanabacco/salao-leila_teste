"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Home(): JSX.Element {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/cliente");
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
            mesmo hidratar suas madeixas de cabelo conosco.
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
        </div>
      </main>
    </>
  );
}
