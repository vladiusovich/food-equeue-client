import { makeObservable, observable, action, computed } from "mobx"
import SocketApiProvider from "../../services/dataProvider/SocketApiProvider";
import AuthStore from "./Auth";
import GetCustomerOrderRequestStore from "@api/requests/getCustomerOrder/GetCustomerOrderRequestStore";

// TODO: Implement UserStore when api is ready
class UserStore {
    public getCustomerOrderRequestStore: GetCustomerOrderRequestStore = new GetCustomerOrderRequestStore();

    public auth: AuthStore;

    private apiProvider: SocketApiProvider;

    constructor(apiProvider: SocketApiProvider, auth: AuthStore) {
        this.auth = auth;

        makeObservable(this, {
            orderId: computed,
            branchId: computed,
        });

        this.apiProvider = apiProvider;
    }

    async fetch(): Promise<void> {
        await this.getCustomerOrderRequestStore.execute({
            hash: this.auth.hash ?? '',
        });
    }

    public get orderId(): number | null {
        return this.getCustomerOrderRequestStore.data?.orderId ?? null;
    }

    public get branchId(): number | null {
        return this.getCustomerOrderRequestStore.data?.branchId ?? null;
    }
}

export default UserStore;