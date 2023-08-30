import styles from "./styles.module.css";
import ClientRegisterForm from "./components/ClientRegisterForm";

// TODO:
// - notificação de cadastrado com sucesso

export default function ClientRegisterPage() {
  return (
    <main className={styles.main}>
      <h2>
        Cadastre para poder agendar um seviço do salão de beleza da Cabeleleila Leila
      </h2>
      <div className={styles.registerContainer}>
        <ClientRegisterForm />
      </div>
    </main>
  );
}
