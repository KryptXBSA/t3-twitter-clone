/* eslint-disable @typescript-eslint/no-misused-promises */
import * as dotenv from 'dotenv' 
dotenv.config()
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { createOpenApiExpressMiddleware } from "trpc-openapi";



import { openApiDocument } from "./openapi";
import { appRouter } from "./router/root";
import { createContext } from "./trpc/trpc";

const app = express();

// Setup CORS
app.use(cors());
app.use(express.json({ "limit": '1mb' }));

// Handle incoming tRPC requests
app.use(
  "/api/trpc",
  createExpressMiddleware({ router: appRouter, createContext })
);
// Handle incoming OpenAPI requests
app.use(
  "/api",
  createOpenApiExpressMiddleware({ router: appRouter, createContext })
);

// Serve Swagger UI with our OpenAPI schema
app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(openApiDocument));

let port = 7019;
app.listen(port, () => {
  console.log("Server started on http://localhost:" + port);
});
