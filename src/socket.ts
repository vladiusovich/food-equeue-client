import { io } from 'socket.io-client';

// TODO: Change the port when deploying to production
const PORT = 3002;

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : `http://localhost:${PORT}`;

export const socket = io(URL!);