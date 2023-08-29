const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ClientsController {
  static async getClients(req, res, next) {
    try {
      const clients = await prisma.clients.findMany();
      return res.status(200).json(clients);
    } catch (error) {
      console.log(error);
    }
  }

  static async createClient(req, res, next) {
    const { name, phone, password } = req.body;
    try {
      await prisma.clients.create({
        data: {
          phone,
          name,
          password,
        },
      });
      return res.status(201).json({ message: "client created" });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ClientsController;
