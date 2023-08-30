const { verify, decode } = require("jsonwebtoken");

const HASH_SECRET =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQ2FiZWxlbGVpbGFMZWlsYSIsImlhdCI6MH0"; // em produção isso é pra estar em uma variavel de ambiente
const secret = HASH_SECRET;

const authenticator = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      mensagem: "token access not informed",
      status: 401,
    });
  }

  const [baerer, accessToken] = token.split(" ");

  try {
    verify(accessToken, secret);

    const { id, nome } = await decode(accessToken);

    req.id = id;
    req.nome = nome;

    return next();
  } catch (error) {
    res.status(401).send("unauthorized user");
  }
};

module.exports = [authenticator];
