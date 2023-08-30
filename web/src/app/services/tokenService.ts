import nookies from "nookies";
const ACCESS_TOKEN_KEY = "ATK";
const tresHoras = (60 * 60 * 24) / 8;

export const tokenService = {
  save(accessToken: string, context: any = null) {
    nookies.set(context, ACCESS_TOKEN_KEY, accessToken, {
      maxAge: tresHoras,
      path: "/",
    });
  },
  get(context: any = null) {
    const cookies = nookies.get(context);
    return cookies[ACCESS_TOKEN_KEY] || "";
  },
  delete(context: any = null) {
    nookies.destroy(context, ACCESS_TOKEN_KEY);
  },
};
