import { useEffect, useState } from "react";
import { authService } from "./authService";
import { useRouter } from "next/navigation";
import { NextComponentType } from "next";

export function useSessionClient() {
  const [session, setSession]: any = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getClientSession()
      .then((userSession) => {
        console.log(userSession);
        setSession(userSession);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: session,
    error,
    loading,
  };
}

// HCO Higher Order Component
export function withSessionHOCClient(Component: NextComponentType) {
  return function Wrapper(props: any) {
    const router = useRouter();
    const session = useSessionClient();

    if (!session.loading && session.error) {
      console.log(session.error);
      router.push("/cliente/cadastrar/?error=401");
    }
    const modifiedCtx = {
      ...props,
      session: session.data?.session,
    };
    return <Component {...modifiedCtx} />;
  };
}
