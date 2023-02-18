import { formatDate } from "@utils/date";
import { useEffect, useState } from "react";

export function useFormattedDate(date:Date) {
  const [formattedDate, setFormattedDate] = useState(formatDate(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(formatDate(date));
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return formattedDate;
}
