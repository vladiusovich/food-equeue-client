import { io } from 'socket.io-client';
import appConfig from './config/appConfig';

export const socket = io(appConfig.api.socketUrl);