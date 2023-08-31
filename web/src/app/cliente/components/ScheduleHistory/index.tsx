import { useEffect, useState } from "react";
import { tokenService } from "@/app/services/tokenService";
import { useClientContext } from "@/app/contexts/ClientContext";
import styles from "./styles.module.css";

type ScheduleProps = {
  id: number;
  client_id: number;
  service_id: number;
  date_time: Date;
};

type Service = {
  id: number;
  name: string;
};

export default function ScheduleHistory() {
  const { client } = useClientContext();
  const token = tokenService.get();
  const backendUrl = "http://localhost:8080";

  const [serviceNames, setServiceNames] = useState<{ [key: number]: string }>({});
  const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const serviceOptions = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "GET",
        };

        const response = await fetch(`${backendUrl}/services`, serviceOptions);
        const serviceData: Service[] = await response.json();
        const serviceNameMap: { [key: number]: string } = {};
        serviceData.forEach((service) => {
          serviceNameMap[service.id] = service.name;
        });
        setServiceNames(serviceNameMap);

        const scheduleResponse = await fetch(
          `${backendUrl}/schedules/client/${client.id}`,
          serviceOptions
        );
        if (!scheduleResponse.ok) {
          throw new Error("Failed to fetch schedules");
        }
        const scheduleData: ScheduleProps[] = await scheduleResponse.json();
        setSchedules(scheduleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInitialData();
  }, [client.id, token]);

  const formatDate = (dateTimeString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    };

    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("pt-BR", options);

    return formattedDate;
  };

  return (
    <div className={styles.cardsContainer}>
      <p>
        Clique para poder editar o agendamento, <br />
        apenas antes de 2 dias de sua data.
      </p>

      {schedules.length > 0 ? (
        schedules.map((schedule) => (
          <div key={schedule.id} className={styles.card}>
            <p className={styles.scheduleDate}>
              Data: {`${formatDate(schedule.date_time)}h`}
            </p>
            <p className={styles.scheduleService}>
              Serviço: {serviceNames[schedule.service_id]}
            </p>
          </div>
        ))
      ) : (
        <p>Nenhum agendamento encontrado.</p>
      )}
    </div>
  );
}
