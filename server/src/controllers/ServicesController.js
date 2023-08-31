const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ServicesController {
  static async getServices(req, res, next) {
    try {
      const services = await prisma.services.findMany();
      return res.status(200).json(services);
    } catch (error) {
      console.log(error);
    }
  }

  static async getServiceById(req, res, next) {
    const params = req.params;
    const id = Number(params.id);

    try {
      const serviceById = await prisma.services.findUnique({ where: { id } });
      if (!serviceById) return res.status(404).json({ message: "service not found" });
      return res.status(200).json(serviceById);
    } catch (error) {
      console.log(error);
    }
  }

  static async createService(req, res, next) {
    const service = req.body;
    try {
      await prisma.services.create({
        data: {
          name: service.name,
        },
      });
      return res.status(201).json({ message: "service created" });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateService(req, res, next) {
    const params = req.params;
    const id = Number(params.id);
    const service = req.body;

    try {
      await prisma.services.update({
        where: { id },
        data: { name: service.name },
      });
      return res.status(200).json({ message: "service updated" });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteService(req, res, next) {
    const params = req.params;
    const id = Number(params.id);
    try {
      await prisma.services.delete({ where: { id } });
      return res.status(200).json({ message: "service deleted" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ServicesController;
