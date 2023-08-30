"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { authService } from "./services/authService";

export default function Home(): JSX.Element {
  const router = useRouter();

  const [values, setValues] = useState({
    phone: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValues((currentValue) => {
      return {
        ...currentValue,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // router.push("/cliente");

    authService
      .clientLogin({
        phone: values.phone,
        password: values.password,
      })
      .then(() => {
        // TODO: colocar um alerta de login bem sucedido
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
                onChange={handleChange}
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
                onChange={handleChange}
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
