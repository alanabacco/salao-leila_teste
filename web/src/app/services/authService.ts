import { tokenService } from "./tokenService";

type AuthServiceProps = { phone: string; password: string };
// type ResponseProps = { ok: boolean; status: number; statusText: string; body: any };

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
        tokenService.save(body.accessToken);
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
      console.log("res.body: ", res.body);
      return res.body;
    });
  },
};
