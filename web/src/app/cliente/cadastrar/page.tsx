"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { FormEvent } from "react";

// TODO:
// - notificação de cadastrado com sucesso

export default function ClientRegisterPage(): JSX.Element {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <main className={styles.main}>
      <div className={styles.registerContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              placeholder="Nome"
              required
              id="name"
              name="name"
              minLength={2}
            />
          </div>

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
              Digite sua senha
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

          <div>
            <label htmlFor="password" className={styles.label}>
              Digite a senha novamente
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

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </main>
  );
}
