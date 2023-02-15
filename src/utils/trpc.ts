import { createTRPCReact } from "@trpc/react-query";

import { AppR } from "../@types/trpc";
export const trpc = createTRPCReact<AppR>();
