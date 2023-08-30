/* eslint-disable @next/next/no-async-client-component */
"use client";

import styles from "./styles.module.css";
import { tokenService } from "../services/tokenService";
// import { withSessionHOCClient } from "../services/session";

// TODO : -notificar agendamento com sucesso..
// TODO : usar um redux pra saber qual usuario esta conectado...

interface ScheduleProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    service: { value: string };
    date: { value: string };
  };
}

async function ClientPage(): Promise<JSX.Element> {
  const backendUrl = "http://localhost:8080";
  const token = tokenService.get();

  const timeOptions = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ];

  const TimeOptions = () => (
    <datalist id="date-options">
      {timeOptions.map((time, index) => (
        <option key={index} value={time} />
      ))}
    </datalist>
  );

  const minDate: Date = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const invertedDate = minDate.toLocaleDateString().split("/").reverse().join("-");

  const services: any[] = await fetch(`${backendUrl}/services`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      if (Array.isArray(data)) {
        return data;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });

  function handleSubmit(e: ScheduleProps) {
    e.preventDefault();

    const dateValue = e.target.date.value;
    const timeValue = e.target.time.value;
    const [year, month, day] = dateValue.split("-");
    const [hours, minutes] = timeValue.split(":");
    const formatedDate = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes)
    );

    const data = {
      client_id: Number(1), // ARRUMAR ISSO AQUI
      service_id: Number(e.target.service.value),
      date_time: formatedDate.toISOString(),
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      fetch(`${backendUrl}/schedules`, options)
        .then((res) => {
          if (res.status == 201) {
            return res.body;
          } else {
            alert("Não foi possível agendar agora, tente novamente mais tarde.");
          }
        })
        .then(() => {
          e.target.service.value = "";
          e.target.date.value = "";
          e.target.time.value = "";
          // NOTIFICAÇÃO DE AGENDADO COM SUCESSO
        });
    } catch (error) {
      console.log(error);
      alert("Não foi possível agendar agora, tente novamente mais tarde.");
      throw new Error("Não foi possível cadastrar os dados.");
    }
  }

  return (
    <main className={styles.main}>
      <h1>Agendamento da Cabeleleila Leila</h1>

      <div className={styles.container}>
        <section className={styles.formSection}>
          <h2>Agendar um serviço</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputContainer}>
              <label htmlFor="service" className={styles.label}>
                Serviço
              </label>
              <select name="service" id="service" required>
                <option value="" selected disabled className={styles.emptyOption}>
                  Selecione uma opção
                </option>
                {services.map((service) => {
                  return (
                    <option value={service.id} key={service.id}>
                      {service.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="date" className={styles.label}>
                Data
              </label>
              <input type="date" required id="date" name="date" min={invertedDate} />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="time" className={styles.label}>
                Horário
              </label>
              <input
                type="time"
                required
                list="date-options"
                id="time"
                name="time"
                min="09:00"
                max="19:00"
              />

              <TimeOptions />
            </div>

            <button type="submit">Agendar</button>
          </form>
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

// export default withSessionHOCClient(ClientPage);
export default ClientPage;
