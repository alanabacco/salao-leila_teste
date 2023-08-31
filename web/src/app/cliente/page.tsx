"use client";

import styles from "./styles.module.css";
import { withSessionHOCClient } from "../services/session";
import ScheduleForm from "./components/ScheduleForm";
import { useClientContext } from "../contexts/ClientContext";
import ScheduleHistory from "./components/ScheduleHistory";
import Header from "../components/Header";

function ClientPage(): JSX.Element {
  const { client } = useClientContext();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Agendamento da Cabeleleila Leila</h2>
        <h3 className={styles.pageDescription}>Olá {client.name}, gostaria de agendar um serviço?</h3>

        <div className={styles.container}>
          <section className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Agendar um serviço</h3>
            <ScheduleForm />
          </section>

          <section className={styles.historySection}>
            <h3 className={styles.sectionTitle}>Histórico de agendamento</h3>
            <ScheduleHistory />
          </section>
        </div>
      </main>
    </>
  );
}

export default withSessionHOCClient(ClientPage);
