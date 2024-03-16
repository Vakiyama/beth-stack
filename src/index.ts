import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { indexRouter } from './routes/indexRouter';
const PORT = process.env.PORT || 3000;

export const app = new Elysia()
  .use(staticPlugin())
  .use(indexRouter)
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
