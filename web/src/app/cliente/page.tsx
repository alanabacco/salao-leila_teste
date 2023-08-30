"use client";

import styles from "./styles.module.css";
import { withSessionHOCClient } from "../services/session";
import ScheduleForm from "./components/ScheduleForm";

async function ClientPage(): Promise<JSX.Element> {
  return (
    <main className={styles.main}>
      <h1>Agendamento da Cabeleleila Leila</h1>

      <div className={styles.container}>
        <section className={styles.formSection}>
          <h2>Agendar um serviço</h2>
          <ScheduleForm />
        </section>

        <section className={styles.historySection}>
          <h2>Ver histórico de agendamento</h2>
          <div>
            <p>23/08/2023</p>
            <p>Hidratação no cabelo</p>
          </div>
          <div>
            <p>23/08/2023</p>
            <p>Hidratação no cabelo</p>
          </div>
          <div>
            <p>23/08/2023</p>
            <p>Hidratação no cabelo</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default withSessionHOCClient(ClientPage);
