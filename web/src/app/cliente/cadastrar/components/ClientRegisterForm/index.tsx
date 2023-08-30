"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import FormInput from "../FormInput";

interface ClientRegisterFormProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    name: { value: string };
    phone: { value: string };
    password: { value: string };
  };
}

export default function ClientRegisterForm(): JSX.Element {
  const router = useRouter();
  const backendUrl = "http://localhost:8080/clients";

  function passwordsMatch(psw1: string, psw2: string): boolean {
    return psw1 === psw2 ? true : false;
  }

  function handleSubmit(e: ClientRegisterFormProps) {
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
      fetch(backendUrl, options)
        .then((res) => {
          if (res.status == 201) {
            return res.body;
          } else {
            alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");
          }
        })
        .then(() => router.push("/"));
    } catch (error) {
      console.log(error);
      alert("Não foi possível cadastrar os dados, tente novamente mais tarde.");
      throw new Error("Não foi possível cadastrar os dados.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.clientRegisterForm}>
      <FormInput
        label="Nome"
        type="text"
        placeholder="Nome"
        required
        id="name"
        name="name"
        minLength={2}
      />

      <FormInput
        label="Telefone"
        type="tel"
        placeholder="14987654321"
        required
        id="phone"
        name="phone"
        minLength={11}
        maxLength={11}
        pattern="^[0-9]+$"
      />

      <FormInput
        label="Digite sua senha"
        type="password"
        placeholder="********"
        required
        id="password1"
        name="password1"
        minLength={6}
      />

      <FormInput
        label="Digite a senha novamente"
        type="password"
        placeholder="********"
        required
        id="password2"
        name="password2"
        minLength={6}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
