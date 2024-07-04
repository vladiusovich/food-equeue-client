import { io } from 'socket.io-client';
import appConfig from './config/appConfig';

// TODO: Change it when deploying to production
const URL = process.env.NODE_ENV === 'production' ? undefined : appConfig.socketUrl;

export const socket = io(URL!);