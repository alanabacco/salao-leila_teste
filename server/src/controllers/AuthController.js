const { PrismaClient } = require("@prisma/client");
const AuthClientLogin = require("../services/AuthService");
const prisma = new PrismaClient();

class AuthController {
  static async ClientLogin(req, res, next) {
    const { phone, password } = req.body;

    const typedPhone = phone.toString();
    const typedPassword = password.toString();

    try {
      const client = await prisma.clients.findUniqueOrThrow({
        where: { phone: typedPhone },
      });
      if (client !== null) {
        const accessToken = await AuthClientLogin({
          typedPassword: typedPassword,
          clientDb: client,
        });
        return res.status(200).json({accessToken, client});
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(401).send({ status: 401, message: error.message });
    }
  }

  static async getClientSession(req, res, next) {
    const name = req.name;
    try {
      if (name) {
        res.status(200).json({
          data: { session: { user: { name } } },
        });
      }
    } catch (error) {
      res.status(401).json({ status: 401, message: "invalid access token" });
    }
  }
}

module.exports = AuthController;
