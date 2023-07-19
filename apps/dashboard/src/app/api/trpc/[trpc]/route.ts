import { appRouter, createTRPCContext } from "@master-bot/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const runtime = "nodejs";

// export API handler
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => createTRPCContext(),
  });

export { handler as GET, handler as POST };
