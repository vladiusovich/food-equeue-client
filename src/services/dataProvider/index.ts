import { makeObservable, observable } from "mobx";
import SocketApiProvider from "./SocketApiProvider";
import { socket } from "../../socket";

const apiProvider = new SocketApiProvider(socket);

makeObservable(apiProvider, {
    data: observable,
});

export default apiProvider;