"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { FormEvent } from "react";
import Link from "next/link";

export default function ClientRegisterPage(): JSX.Element {
  const router = useRouter();

  const today: Date = new Date();
  today.setDate(today.getDate() + 1);
  const invertedDate = today.toLocaleDateString().split("/").reverse().join("-");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }

  // TODO : -notificar agendamento com sucesso..

  return (
    <main className={styles.main}>
      <h1>Agendamento da Cabeleleila Leila</h1>

      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend>Serviço</legend>

            <div>
              <input type="checkbox" id="haircut" name="Corte de Cabelo" />
              <label htmlFor="haircut">Corte de Cabelo</label>
            </div>

            <div>
              <input type="checkbox" id="hairstyle" name="Penteado" />
              <label htmlFor="hairstyle">Penteado</label>
            </div>

            <div>
              <input type="checkbox" id="hair-hydration" name="Hidratação no Cabelo" />
              <label htmlFor="hair-hydration">Hidratação no cabelo</label>
            </div>

            <div>
              <input type="checkbox" id="fingernails" name="Unhas das mãos" />
              <label htmlFor="fingernails">Unhas das mãos</label>
            </div>

            <div>
              <input type="checkbox" id="Toenails" name="Unhas dos pés" />
              <label htmlFor="Toenails">Unhas dos pés</label>
            </div>
          </fieldset>

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
