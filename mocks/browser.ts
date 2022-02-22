import { setupWorker } from 'msw';
import { handlers } from './handlers/news';

export const worker = setupWorker(...handlers);
