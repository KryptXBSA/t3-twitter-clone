import { useEventContext } from "@context/EventContext";
import { useEffect, useState } from "react";

export function registerListener(id: string, callback: (data: any) => void) {
  const { registerListener, unregisterListener } = useEventContext();
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (!registered) {
      registerListener(id, callback);
      setRegistered(true);
    }
    return () => {
      unregisterListener(id);
    };
  }, []);
}
