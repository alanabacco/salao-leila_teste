"use client";

import { tokenService } from "@/app/services/tokenService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import Header from "@/app/components/Header";

export default function ScheduleUpdate() {
  const route = useRouter();
  const token = tokenService.get();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const backendUrl = "http://localhost:8080";

  const [services, setServices] = useState([
    { id: 1, name: "Penteado" },
    { id: 2, name: "Corte Cabelo" },
  ]);
  const [values, setValues] = useState({
    client_id: "",
    service_id: "",
    date_time: "",
  });

  const dateTimeArray = values.date_time.split("T");
  const date = dateTimeArray[0];
  const time = dateTimeArray[1]?.substring(0, 8);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "GET",
        };

        const response = await fetch(`${backendUrl}/schedules/${id}`, options);
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          setValues((currentValue) => {
            return {
              ...currentValue,
              service_id: data.client_id,
              client_id: data.service_id,
              date_time: data.date_time,
            };
          });
        }
      } catch (error) {
        toast.error("Erro ao carregar agendamento.");
        console.error("Error fetching data:", error);
      }
    };
    fetchInitialData();
  }, []);

  function handleSubmit(e: any) {
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
      client_id: Number(values.client_id),
      service_id: Number(e.target.service.value),
      date_time: formatedDate.toISOString(),
    };
    const options = {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      fetch(`${backendUrl}/schedules`, options)
        .then((res) => {
          console.log("res.status", res.status);

          if (res.status == 201) {
            return res.body;
          } else {
            toast.error("Não foi possível agendar agora, tente novamente mais tarde.");
          }
        })
        .then(() => {
          e.target.service.value = "";
          e.target.date.value = "";
          e.target.time.value = "";
          toast.success("Editado com sucesso.");
          route.push("/cliente");
        });
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível agendar agora, tente novamente mais tarde.");
      throw new Error("Não foi possível cadastrar os dados.");
    }
  }

  // COMPONENTS -> tem que ser extraído para um arquivo separado
  interface ServiceDropdownProps {
    services: { id: number; name: string }[];
  }
  const ServiceDropdown = ({ services }: ServiceDropdownProps) => (
    <div className={styles.inputContainer}>
      <label htmlFor="service">Serviço</label>
      <select name="service" id="service" required>
        {services?.map((service) => (
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
      <input type="date" required id="date" name="date" min={minDate} value={date} />
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
        value={time}
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
  // COMPONENTS ========END============

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Editar agendamento</h1>
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <ServiceDropdown services={services} />
          <DateTimeInput minDate="2023-31-08" />
          <TimeInput />
          <button type="submit">Editar</button>
          <button onClick={() => route.push("/cliente")} className={styles.cancelButton}>
            Cancelar
          </button>
        </form>
      </main>
    </>
  );
}
