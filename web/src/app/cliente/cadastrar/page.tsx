import styles from "./styles.module.css";
import ClientRegisterForm from "./components/ClientRegisterForm";
import Header from "@/app/components/Header";

// TODO:
// - notificação de cadastrado com sucesso

export default function ClientRegisterPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.pageDescription}>
          Cadastre para poder agendar um seviço do salão de beleza da Cabeleleila Leila
        </h2>
        <div className={styles.registerContainer}>
          <ClientRegisterForm />
        </div>
      </main>
    </>
  );
}
