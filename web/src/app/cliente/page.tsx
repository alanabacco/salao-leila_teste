"use client";

import styles from "./styles.module.css";
import { withSessionHOCClient } from "../services/session";
import ScheduleForm from "./components/ScheduleForm";
import { useClientContext } from "../contexts/ClientContext";
import ScheduleHistory from "./components/ScheduleHistory";

async function ClientPage(): Promise<JSX.Element> {
  const { client } = useClientContext();

  return (
    <main className={styles.main}>
      <h1>Agendamento da Cabeleleila Leila</h1>
      <h2>Olá {client.name}, gostaria de agendar um serviço?</h2>

      <div className={styles.container}>
        <section className={styles.formSection}>
          <h3>Agendar um serviço</h3>
          <ScheduleForm />
        </section>

        <section className={styles.historySection}>
          <h3>Ver histórico de agendamento</h3>
          <ScheduleHistory />
        </section>
      </div>
    </main>
  );
}

export default withSessionHOCClient(ClientPage);
