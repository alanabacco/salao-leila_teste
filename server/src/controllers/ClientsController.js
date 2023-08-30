const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { hash } = require("bcryptjs");

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
    const pswHash = await hash(password, 8);
    const newClient = {
      data: {
        name,
        phone,
        password: pswHash,
      },
    };
    try {
      await prisma.clients.create(newClient);
      return res.status(201).json({ status: 201, message: "client created" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: 500, message: "it was not possible to create client" });
    }
  }
}

module.exports = ClientsController;
