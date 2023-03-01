import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../../server/src/router/root";
import { createContext } from "../../../../server/src/trpc/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
