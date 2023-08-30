"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { FormEvent } from "react";
import Link from "next/link";
import { tokenService } from "../services/tokenService";
import { withSessionHOCClient } from "../services/session";

// TODO : -notificar agendamento com sucesso..

interface ScheduleProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    service: { value: string };
    date: { value: string };
  };
}

async function ClientPage(): Promise<JSX.Element> {
  const router = useRouter();
  const backendUrl = "http://localhost:8080";
  const token = tokenService.get();

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

    console.log(formatedDate); // JA ESTOU PEGANDO O ID DOS SERVICES, E A DATA E HORARIO

    // router.push("/");
  }

  return (
    <main className={styles.main}>
      <h1>Agendamento da Cabeleleila Leila</h1>

      <div>
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

            <datalist id="date-options">
              <option value="09:00" />
              <option value="09:30" />
              <option value="10:00" />
              <option value="10:30" />
              <option value="11:00" />
              <option value="11:30" />
              <option value="12:00" />
              <option value="12:30" />
              <option value="13:00" />
              <option value="13:30" />
              <option value="14:00" />
              <option value="14:30" />
              <option value="15:00" />
              <option value="15:30" />
              <option value="16:00" />
              <option value="16:30" />
              <option value="17:00" />
              <option value="17:30" />
              <option value="18:00" />
              <option value="18:30" />
            </datalist>
          </div>

          <button type="submit">Agendar</button>
        </form>

        <div>
          {/* ideia: abrir historico de agendamento em um modal */}
          <Link href="">Ver histórico de agendamento</Link>
        </div>
      </div>
    </main>
  );
}

export default withSessionHOCClient(ClientPage);
