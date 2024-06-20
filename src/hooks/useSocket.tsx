import { useState, useEffect } from 'react';
import { socket } from '../socket';
import CustomerEventType from '@type/events/CustomerEventType';

type handleEventType = (event: any) => void;

const useSocket = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);

    const setListner = (eventName: CustomerEventType | string, handler: handleEventType) => {
        socket.on(eventName, handler);
    };

    useEffect(() => {
        const onConnect = () => {
            setIsConnected(true);
        };

        const onDisconnect = () => {
            setIsConnected(false);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        console.log(isConnected ? 'Connected' : 'Disconnected');

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, [socket.connected]);

    return { isConnected, setListner };
};

export default useSocket;