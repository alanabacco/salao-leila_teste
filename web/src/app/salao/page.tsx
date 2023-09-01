import Header from "../components/Header";
import { tokenService } from "../services/tokenService";
import styles from "./styles.module.css";

export default async function SalaoPage() {
  const token = tokenService.get();
  const backendUrl = "http://localhost:8080";

  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFsYW5hIiwiaWF0IjoxNjkzNTI4NTg2LCJleHAiOjE2OTM1MzkzODZ9.OPwCy2fNCWzhp8rKRs6fUhIvDbLli519RgXtOrUGGGw`,
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  const response = await fetch(`${backendUrl}/schedules`, options);
  const schedules = await response.json();
  return (
    <>
      <Header />
      <main className={styles.main}>
        {schedules.map((schedule: any) => (
          <div key={schedule.id} className={styles.scheduleCard}>
            <p>{schedule.client_id} Nome Cliente </p>
            <p>{schedule.service_id} Serviço </p>
            <p>Data: {schedule.date_time}</p>
          </div>
        ))}
      </main>
    </>
  );
}

// falta:
// pegar o nome do cliente de acordo com o id e mostrar na tela
