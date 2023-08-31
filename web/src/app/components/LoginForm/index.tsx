"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { authService } from "@/app/services/authService";
import { useClientContext } from "@/app/contexts/ClientContext";
import { toast } from "react-toastify";

interface FormProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    phone: { value: string };
    password: { value: string };
  };
}

export default function LoginForm(): JSX.Element {
  const router = useRouter();

  const { setClient } = useClientContext();

  async function handleSubmit(e: FormProps) {
    e.preventDefault();
    await authService
      .clientLogin({
        phone: e.target.phone.value,
        password: e.target.password.value,
      })
      .then((res) => {
        setClient({
          id: res.client?.id,
          name: res.client?.name,
          phone: res.client?.phone,
        });
        toast.success("Login bem sucedido.");
        router.push("/cliente");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Telefone ou senha inválidos.");
      });
  }

  return (
    <>
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
      <p className={styles.registerInfo}>
        Ainda não tem cadastro? <Link href="cliente/cadastrar">Criar cadastro</Link>
      </p>
      <p className={styles.cookiesInfo}>
        Este site usa cookies para suas informações de login. Ao continuar usando o site,
        você estará concordando com o uso dos cookies.
      </p>
    </>
  );
}
