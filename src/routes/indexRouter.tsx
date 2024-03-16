import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { Home } from '../pages/Home';

export const indexRouter = new Elysia().use(html()).get('/', () => <Home />);
