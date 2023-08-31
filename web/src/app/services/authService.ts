import { tokenService } from "./tokenService";

type AuthServiceProps = { phone: string; password: string };

const backendUrl = "http://localhost:8080";

export const authService = {
  async clientLogin({ phone, password }: AuthServiceProps) {
    const fetchOptions = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ phone, password }),
    };

    try {
      return await fetch(`${backendUrl}/clientLogin`, fetchOptions).then(async (res) => {
        if (!res.ok) throw new Error("invalid phone or password");
        const body: any = await res.json();
        tokenService.save(body.accessToken.accessToken);
        return body;
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getClientSession(context: any = null) {
    const token = tokenService.get(context);
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
    return fetch(`${backendUrl}/clientSession`, fetchOptions).then((res) => {
      if (!res.ok) throw new Error("not authorized");
      return res.body;
    });
  },
};
