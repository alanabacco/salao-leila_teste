"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

// TODO:
// - notificação de cadastrado com sucesso

interface ClientRegisterPageProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    name: { value: string };
    phone: { value: string };
    password: { value: string };
  };
}

export default function ClientRegisterPage(): JSX.Element {
  const router = useRouter();
  const backendUrl = "http://localhost:8080/clients";

  function passwordsMatch(psw1: string, psw2: string): boolean {
    return psw1 === psw2 ? true : false;
  }

  function handleSubmit(e: ClientRegisterPageProps) {
    e.preventDefault();
    if (!passwordsMatch(e.target.password1.value, e.target.password2.value)) {
      alert("as senhas devem ser iguais");
      return;
    }

    const data = {
      name: e.target.name.value.trim(),
      phone: e.target.phone.value,
      password: e.target.password2.value,
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      fetch(backendUrl, options).then((res) => {
        if (res.status == 201) {
          router.push("/");
          return res.body;
        } else {
          alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");
        }
      });
    } catch (error) {
      console.log(error);
      alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível cadastrar os dados.");
    }
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
            <label htmlFor="password1" className={styles.label}>
              Digite sua senha
            </label>
            <input
              type="password"
              placeholder="********"
              required
              id="password1"
              name="password1"
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="password2" className={styles.label}>
              Digite a senha novamente
            </label>
            <input
              type="password"
              placeholder="********"
              required
              id="password2"
              name="password2"
              minLength={6}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </main>
  );
}
