import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../server/src/router/root";

export const trpc = createTRPCReact<AppRouter>();
