const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SchedulesController {
  static async getSchedules(req, res, next) {
    try {
      const schedules = await prisma.schedules.findMany();
      return res.status(200).json(schedules);
    } catch (error) {
      console.log(error);
    }
  }

  static async getSchedulesByClientId(req, res, next) {
    const params = req.params;
    const clientId = Number(params.id);
    try {
      const schedules = await prisma.schedules.findMany({
        where: { client_id: clientId },
      });
      return res.status(200).json(schedules);
    } catch (error) {
      console.log(error);
    }
  }

  static async createSchedule(req, res, next) {
    const { client_id, service_id, date_time } = req.body;

    try {
      await prisma.schedules.create({
        data: {
          client_id,
          service_id,
          date_time,
        },
      });
      return res.status(201).json({ message: "schedule created" });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateSchedule(req, res, next) {
    const params = req.params;
    const id = Number(params.id);
    const newSchedule = req.body;

    try {
      const schedule = await prisma.schedules.findUnique({ where: { id } });
      if (!schedule) return res.status(404).json({ message: "schedule not found" });
      await prisma.schedules.update({
        where: { id },
        data: { newSchedule },
      });
      return res.status(200).json({ message: "schedule updated" });
    } catch (error) {
      console.log(error);
    }
  }

  static async getScheduleById(req, res, next) {
    const params = req.params;
    const id = Number(params.id);

    try {
      const scheduleById = await prisma.schedules.findUnique({ where: { id } });
      if (!scheduleById) return res.status(404).json({ message: "schedule not found" });
      return res.status(200).json(scheduleById);
    } catch (error) {
      console.log(error);
    }
  }
}

// implementar a lógica para verificar a disponibilidade de horários antes de
// confirmar um agendamento

module.exports = SchedulesController;
