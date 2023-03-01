import { generateOpenApiDocument } from 'trpc-openapi';
import { appRouter } from './router/root';


// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Twitter clone API',
  description: 'OpenAPI compliant REST API built using tRPC with Express',
  version: '1.0.0',
  baseUrl: process.env.API_URL,
  docsUrl: 'https://github.com/AlandSleman/t3-twitter-clone',
  tags: ['auth', 'users', 'posts'],
});
