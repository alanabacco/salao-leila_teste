const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQ2FiZWxlbGVpbGFMZWlsYSIsImlhdCI6MH0"; // em produção isso é pra estar em uma variavel de ambiente

const AuthClientLogin = async ({ typedPassword, clientDb }) => {
  const psw = typedPassword;
  const hash = clientDb.password;
  const isSamePsw = await compare(psw, hash);

  if (!isSamePsw) {
    throw new Error("invalid phone or password");
  }

  const threeHours = (60 * 60 * 24) / 8;
  const accessToken = sign(
    {
      id: clientDb.id,
      name: clientDb.name,
    },
    secret,
    {
      expiresIn: threeHours,
    }
  );

  return { accessToken };
};

module.exports = AuthClientLogin;
