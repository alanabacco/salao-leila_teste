import { tokenService } from "@/app/services/tokenService";
import styles from "./styles.module.css";

interface ScheduleProps extends React.ChangeEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    service: { value: string };
    date: { value: string };
  };
}

export default async function ScheduleForm() {
  const token = tokenService.get();

  const backendUrl = "http://localhost:8080";
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

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <ServiceDropdown services={services} />
      <DateTimeInput minDate={invertedDate} />
      <TimeInput />
      <button type="submit">Agendar</button>
    </form>
  );
}

interface ServiceDropdownProps {
  services: { id: number; name: string }[];
}
const ServiceDropdown = ({ services }: ServiceDropdownProps) => (
  <div className={styles.inputContainer}>
    <label htmlFor="service">Serviço</label>
    <select name="service" id="service" required>
      <option value="" disabled className={styles.emptyOption}>
        Selecione uma opção
      </option>
      {services.map((service) => (
        <option value={service.id} key={service.id}>
          {service.name}
        </option>
      ))}
    </select>
  </div>
);

interface DateTimeInputProps {
  minDate: string;
}
const DateTimeInput = ({ minDate }: DateTimeInputProps) => (
  <div className={styles.inputContainer}>
    <label htmlFor="date" className={styles.label}>
      Data
    </label>
    <input type="date" required id="date" name="date" min={minDate} />
  </div>
);

const TimeInput = () => (
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
);

const TimeOptions = () => {
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
  return (
    <datalist id="date-options">
      {timeOptions.map((time, index) => (
        <option key={index} value={time} />
      ))}
    </datalist>
  );
};
